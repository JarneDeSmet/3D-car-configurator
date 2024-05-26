import { FC } from "react";
import { Link } from "react-router-dom";
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

    return (
        <Link onClick={() => dispatch(setCarId(carDetails))} className={styles.link} to={`/configure-car/${id}`}>
            <div className={styles.card}>
                <h1>{title}</h1>
                <h2>{engine}</h2>

                <div>
                    <img src={carImage} alt={title} />
                </div>

                <h3>Vanaf € {formatNumber(price)}</h3>
                <p>€ 299 /maand</p>
            </div>
        </Link>
    );
};

export default CarCard;
