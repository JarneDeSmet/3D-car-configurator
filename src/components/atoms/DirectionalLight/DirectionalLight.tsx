import { Vector3 } from "three";
import { FC } from "react";

type props = {
    position: Vector3;
};

const DirectionalLight: FC<props> = ({ position: position }) => {
    return (
        <>
            <directionalLight position={position} intensity={0.3} color="#fff" />
        </>
    );
};

export default DirectionalLight;
