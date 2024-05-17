import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./CarScene.module.css";
import CarModel from "../../molecules/CarModel/CarModel";

const carScene: FC = () => {
    return (
        <div className={styles.container}>
            <Canvas
                style={{ height: "100%", width: "100%" }}
                frameloop="demand"
                shadows
                camera={{ position: [5, 3, 5], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                {/*<axesHelper args={[5]} />*/}
                <OrbitControls maxPolarAngle={Math.PI - Math.PI / 2} enablePan enableZoom enableRotate />
                <CarModel />
            </Canvas>
        </div>
    );
};

export default carScene;
