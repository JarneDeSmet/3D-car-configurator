import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FC, useEffect, useRef } from "react";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const CustomControls: FC = () => {
    const controls = useRef<OrbitControlsImpl | null>(null);
    const { camera, gl } = useThree();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!controls.current) return;
            let newAngle;
            switch (event.key) {
                case "ArrowUp":
                case "z":
                    newAngle = controls.current.getPolarAngle() - 0.4;
                    controls.current.setPolarAngle(newAngle);
                    break;
                case "ArrowDown":
                case "s":
                    newAngle = controls.current.getPolarAngle() + 0.4;
                    controls.current.setPolarAngle(newAngle);
                    break;
                case "ArrowLeft":
                case "q":
                    newAngle = controls.current.getAzimuthalAngle() + 0.4;
                    controls.current.setAzimuthalAngle(newAngle);
                    break;
                case "ArrowRight":
                case "d":
                    newAngle = controls.current.getAzimuthalAngle() - 0.4;
                    controls.current.setAzimuthalAngle(newAngle);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return <OrbitControls ref={controls} maxPolarAngle={Math.PI - Math.PI / 2} args={[camera, gl.domElement]} />;
};

export default CustomControls;
