import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./CarCard.module.css";

type CarCardProps = {
    id: string;
    title: string;
    engine: string;
    carImage: string;
    price: string;
};
const CarCard: FC<CarCardProps> = (props) => {
    const { title, engine, carImage, price, id } = props;
    return (
        <Link className={styles.link} to={`/configure-car/${id}`}>
            <div className={styles.card}>
                <h1>{title}</h1>
                <h2>{engine}</h2>

                <div>
                    <img src={carImage} alt={title} />
                </div>

                <h3>Vanaf € {price}</h3>
                <p>€ 299 /maand</p>
            </div>
        </Link>
    );
};

export default CarCard;
