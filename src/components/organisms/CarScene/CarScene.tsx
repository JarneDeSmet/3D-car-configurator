import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import styles from "./CarScene.module.css";
import CarModel from "../../molecules/CarModel/CarModel";

const CarScene: FC = () => {
    return (
        <div className={styles.container}>
            <Canvas
                style={{ height: "100%", width: "100%" }}
                frameloop="demand"
                shadows
                camera={{ position: [5, 3, 5], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <OrbitControls maxPolarAngle={Math.PI - Math.PI / 2} enablePan enableZoom enableRotate />
                <CarModel />
                <Environment preset="city" />
                {/*<ambientLight intensity={2} />*/}
                {/*<directionalLight position={[-4, 2, -4]} intensity={1} />*/}
                {/*<directionalLight position={[4, 2, 4]} intensity={1} />*/}

                {/*<directionalLight position={[4, 2, -4]} intensity={1} />*/}
                {/*<directionalLight position={[-4, 2, 4]} intensity={1} />*/}
            </Canvas>
        </div>
    );
};

export default CarScene;
