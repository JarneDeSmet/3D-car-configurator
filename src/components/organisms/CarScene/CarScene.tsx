import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";
import { Bloom, BrightnessContrast, EffectComposer } from "@react-three/postprocessing";
import { A11y, A11yAnnouncer, useA11y } from "@react-three/a11y";
import CarModel from "../../molecules/CarModel/CarModel";
import DirectionalLight from "../../atoms/DirectionalLight/DirectionalLight";
import { useStoreSelector } from "../../../Redux/store";
import styles from "./CarScene.module.css";

const OnCarFocus = () => {
    const a11y = useA11y();
    if (a11y.focus)
        return (
            <mesh position={[0, 0.6, 0]}>
                <boxGeometry args={[3, 1.5, 5]} />
                <meshStandardMaterial wireframe color="red" />
            </mesh>
        );
};

const CarScene: FC = () => {
    const car = useStoreSelector((state) => state.car);
    return (
        <div className={styles.container}>
            <Canvas
                style={{ width: "100%", height: "100%" }}
                frameloop="demand"
                shadows
                camera={{ position: [5, 2, 5], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <OrbitControls maxPolarAngle={Math.PI - Math.PI / 2} enablePan enableZoom enableRotate />
                <CarModel />

                <A11y
                    role="button"
                    description={`${car.color} car ${car.rims} rims ${car.engine} engine ${car.sportPackage ? "with sport package" : "without sport package"}`}
                >
                    <OnCarFocus />
                </A11y>
                <Environment environmentIntensity={1} environmentRotation={[0, 10, 0]} preset="city" />
                <DirectionalLight position={new Vector3(5, 1, 0)} />
                <DirectionalLight position={new Vector3(-5, 1, 0)} />
                <DirectionalLight position={new Vector3(0, 1, 5)} />
                <DirectionalLight position={new Vector3(0, 1, -5)} />
                <DirectionalLight position={new Vector3(0, 5, 0)} />
                <ambientLight intensity={1} />

                <EffectComposer>
                    <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.1} intensity={0.1} />
                    <BrightnessContrast brightness={-0.1} contrast={0.07} />
                </EffectComposer>
            </Canvas>
            <A11yAnnouncer />
        </div>
    );
};

export default CarScene;
