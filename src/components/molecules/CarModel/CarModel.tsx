import { FC, useEffect, useMemo } from "react";
import { Environment, useGLTF } from "@react-three/drei";
import {
    Material,
    Mesh,
    MeshBasicMaterial,
    MeshLambertMaterial,
    MeshPhongMaterial,
    MeshStandardMaterial,
    Vector3,
} from "three";
import { useStoreDispatch, useStoreSelector } from "../../../Redux/store";
import { setColor } from "../../../Redux/carSlice";

function isMaterialWithColor(
    material: Material,
): material is MeshBasicMaterial | MeshLambertMaterial | MeshPhongMaterial | MeshStandardMaterial {
    return "color" in material;
}

const CarModel: FC = () => {
    const dispatch = useStoreDispatch();
    const color = useStoreSelector((state) => state.car.color);
    const rims = useStoreSelector((state) => state.car.rims);
    const { scene: carScene } = useGLTF("/src/assets/Supra-Striped2.glb");
    const { scene: platform } = useGLTF("/src/assets/platform.glb");
    const { scene: wheelScene } = useGLTF(`/src/assets/${rims}.glb`);

    useEffect(() => {
        const hashValue = window.location.hash;
        const urlColor = hashValue.split("=")[1];

        if (color) dispatch(setColor(urlColor));
    }, [color, dispatch]);

    const configuredCar = useMemo(() => {
        const clonedCar = carScene.clone();

        clonedCar.traverse((object) => {
            if ("isMesh" in object && object.isMesh) {
                const mesh = object as Mesh;

                const material = mesh.material as MeshStandardMaterial;

                if (isMaterialWithColor(material)) {
                    if (material.name === "carpaint") {
                        material.color.set(color);
                        material.roughness = 0;
                    }
                }

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
    }, [carScene, color, wheelScene.children]);

    return (
        <>
            <mesh>
                <primitive object={configuredCar} />
                <Environment preset="city" />
            </mesh>
            <mesh>
                <primitive object={platform} />
            </mesh>
        </>
    );
};

export default CarModel;
