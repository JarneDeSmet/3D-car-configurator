import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";
import { Bloom, BrightnessContrast, EffectComposer } from "@react-three/postprocessing";
import CarModel from "../../molecules/CarModel/CarModel";
import DirectionalLight from "../../atoms/DirectionalLight/DirectionalLight";
import styles from "./CarScene.module.css";

const CarScene: FC = () => {
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
        </div>
    );
};

export default CarScene;
