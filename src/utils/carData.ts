import { colorTypes, engineTypes, gearboxTypes } from "./constants";

export type CarDataType = {
    id: string;
    displayTitle: string;
    basePrice: number;
    engine: engineTypes;
    carImage: string;
    possibleColors: {
        type: colorTypes;
        cost: number;
        colors: {
            name: string;
            hex: string;
        }[];
    }[];
    possibleRims: {
        id: string;
        displayTitle: string;
        cost: number;
        image: string;
    }[];
    possibleEngines: {
        id: string;
        fuelType: engineTypes;
        engineTitle: string;
        gearbox: gearboxTypes;
        shortDetails: string[];
    }[];
};

export const carData: CarDataType[] = [
    {
        id: "supra",
        displayTitle: "Toyota Supra",
        basePrice: 54710,
        engine: engineTypes.petrol,
        carImage: "/assets/cars/Supra.png",
        possibleColors: [
            {
                type: colorTypes.glossy,
                cost: 0,
                colors: [
                    { name: "red", hex: "#431217" },
                    { name: "green", hex: "#104d1e" },
                    { name: "grey", hex: "#c4c2c2" },
                ],
            },
            {
                type: colorTypes.matte,
                cost: 500,
                colors: [{ name: "blue", hex: "#031949" }],
            },
            {
                type: colorTypes.chrome,

                cost: 950,
                colors: [{ name: "cyan", hex: "#079b8e" }],
            },
        ],
        possibleRims: [
            {
                id: "19InchBlack",
                displayTitle: '19" zwart lichtmetalen velgen',
                cost: 0,
                image: "/src/assets/rims/19InchBlack.png",
            },
            {
                id: "19InchSilver",
                displayTitle: '19" zilver lichtmetalen velgen',
                cost: 0,
                image: "/src/assets/rims/19InchSilver.png",
            },
        ],
        possibleEngines: [
            {
                id: "3.0Twin-scrollTurbo",
                fuelType: engineTypes.petrol,
                engineTitle: "3.0 Twin-Scroll Turbo",
                gearbox: gearboxTypes.manualTwoWd,
                shortDetails: ["Combined cycle consumption: 8.1 l/100km", "CO2 combined cycle: 183 g/km"],
            },
            {
                id: "2.0Twin-scrollTurbo",
                fuelType: engineTypes.petrol,
                engineTitle: "2.0 Twin-Scroll Turbo",
                gearbox: gearboxTypes.automaticTwoWd,
                shortDetails: ["Combined cycle consumption: 7.1 l/100km", "CO2 combined cycle: 161 g/km"],
            },
        ],
    },
];
