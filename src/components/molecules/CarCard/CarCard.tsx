import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreDispatch } from "../../../Redux/store";
import { setCarId } from "../../../Redux/carSlice";
import { carData } from "../../../utils/carData";
import styles from "./CarCard.module.css";

type CarCardProps = {
    id: string;
    title: string;
    engine: string;
    carImage: string;
    price: number;
};

function formatNumber(num: number): string {
    return num.toLocaleString("de-DE");
}

const CarCard: FC<CarCardProps> = (props) => {
    const dispatch = useStoreDispatch();
    const { title, engine, carImage, price, id } = props;
    const carDetails = carData.find((car) => car.id === id);
    const navigate = useNavigate();
    const setCar = (): void => {
        dispatch(setCarId(carDetails));
        navigate(`/configure-car/${id}`);
    };

    return (
        <button
            onClick={() => setCar()}
            type="button"
            aria-label={`navigate to cconfigure car/${id}`}
            className={`${styles.card}`}
        >
            <h1>{title}</h1>
            <h2>{engine}</h2>

            <div>
                <img src={carImage} alt={title} />
            </div>

            <h3>Vanaf € {formatNumber(price)}</h3>
            <p>€ 299 /maand</p>
        </button>
    );
};

export default CarCard;
