import { FC, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import {
    Material,
    Mesh,
    MeshBasicMaterial,
    MeshLambertMaterial,
    MeshPhongMaterial,
    MeshPhysicalMaterial,
    MeshStandardMaterial,
    Vector3,
} from "three";

import { useA11y } from "@react-three/a11y";
import { useStoreDispatch, useStoreSelector } from "../../../Redux/store";
import { setColor, setEngine, setRims, setSportPackage } from "../../../Redux/carSlice";
import { carData } from "../../../utils/carData";
import { colorTypes } from "../../../utils/constants";

function isMaterialWithColor(
    material: Material,
): material is MeshBasicMaterial | MeshLambertMaterial | MeshPhongMaterial | MeshStandardMaterial {
    return "color" in material;
}

const CarModel: FC = () => {
    const a11y = useA11y();
    const dispatch = useStoreDispatch();
    const carConfiguration = useStoreSelector((state) => state.car);
    const possibleColors = carData.find((car) => car.id === carConfiguration.id)?.possibleColors;
    const { scene: carScene } = useGLTF("/assets/Toyota-Supra.glb");
    const { scene: platform } = useGLTF("/assets/platform.glb");
    const { scene: wheelScene } = useGLTF(`/assets/${carConfiguration.rims}.glb`);

    useEffect(() => {
        const hashValue = window.location.hash;
        const hashValueGroups = hashValue.split("?");
        const urlColor = hashValue.includes("color") ? hashValueGroups[0].split("=")[1] : undefined;
        const urlRim = hashValue.includes("rims") ? hashValueGroups[1].split("=")[1] : undefined;
        const urlEngine = hashValue.includes("engine") ? hashValueGroups[2].split("=")[1] : undefined;
        const urlSportPack = hashValue.includes("sportPackage") ? hashValueGroups[3].split("=")[1] : undefined;

        if (urlColor && carConfiguration.color) dispatch(setColor(urlColor));
        if (urlRim && carConfiguration.rims) dispatch(setRims(urlRim));
        if (urlEngine && carConfiguration.rims) dispatch(setEngine(urlEngine));
        if (urlSportPack && carConfiguration.sportPackage) dispatch(setSportPackage(Boolean(urlSportPack)));
    }, [
        carConfiguration.color,
        carConfiguration.rims,
        carConfiguration.engine,
        carConfiguration.sportPackage,
        dispatch,
    ]);

    const configuredCar = useMemo(() => {
        const clonedCar = carScene.clone();

        clonedCar.traverse((object) => {
            if ("isMesh" in object && object.isMesh) {
                const mesh = object as Mesh;
                const material = mesh.material as MeshPhysicalMaterial;

                if (isMaterialWithColor(material)) {
                    if (material.name === "carpaint") {
                        const [color, colorType] = carConfiguration.color.split("-");
                        const colorHex = possibleColors
                            ?.find((colorGroup) => colorGroup.type === colorType)
                            ?.colors.find((col) => col.name === color)?.hex;

                        material.color.set(colorHex ?? "#000000");

                        switch (colorType) {
                            case colorTypes.chrome:
                                material.metalness = 1;
                                material.roughness = 0.1;

                                break;
                            case colorTypes.matte:
                                material.metalness = 1;
                                material.roughness = 0.7;

                                material.clearcoat = 1;
                                material.clearcoatRoughness = 0.2;
                                break;
                            case colorTypes.glossy:
                                material.metalness = 1;
                                material.roughness = 0.6;
                                material.clearcoat = 1;
                                material.clearcoatRoughness = 0.1;
                        }
                    }
                }

                mesh.visible = !(mesh.name === "Wing" && !carConfiguration.sportPackage);

                if ("isMesh" in wheelScene.children[0] && wheelScene.children[0].isMesh) {
                    const wheel = wheelScene.children[0] as Mesh;
                    const wheelNames = ["front_left_rim", "front_right_rim", "rear_right_rim", "rear_left_rim"];
                    if (wheelNames.includes(mesh.name)) {
                        mesh.geometry.computeBoundingBox();
                        const oldSize = mesh.geometry.boundingBox?.getSize(new Vector3()) ?? new Vector3(0, 0, 0);

                        wheel.geometry.computeBoundingBox();
                        const newSize = wheel.geometry.boundingBox?.getSize(new Vector3()) ?? new Vector3(0, 0, 0);
                        const scaleFactor = oldSize.divide(newSize);

                        mesh.geometry = wheel.geometry;
                        mesh.material = wheel.material;

                        mesh.scale.set(scaleFactor.x, scaleFactor.y, scaleFactor.z);

                        if (mesh.name === "front_right_rim" || mesh.name === "rear_right_rim") {
                            mesh.rotation.y = Math.PI;
                        }
                    }
                }
            }
        });

        return clonedCar;
    }, [carScene, wheelScene.children, carConfiguration, possibleColors]);

    return (
        <>
            <mesh position={a11y.focus ? [0, 2, 0] : [0, 0, 0]}>
                <primitive object={configuredCar} />
            </mesh>

            <mesh>
                <primitive object={platform} />
            </mesh>
        </>
    );
};

export default CarModel;
