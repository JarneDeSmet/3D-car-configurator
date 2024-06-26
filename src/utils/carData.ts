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
        cost: number;
    }[];
    possiblePackages: {
        id: string;
        displayTitle: string;
        shortDetails: string[];
        cost: number;
        image: string;
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
                    { name: "red", hex: "#9C0007" },
                    { name: "orange", hex: "#A74814" },
                    { name: "white", hex: "#c4c2c2" },
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
                image: "/assets/rims/19InchBlack.png",
            },
            {
                id: "19InchSilver",
                displayTitle: '19" zilver lichtmetalen velgen',
                cost: 0,
                image: "/assets/rims/19InchSilver.png",
            },
        ],
        possibleEngines: [
            {
                id: "3.0Twin-scrollTurbo",
                fuelType: engineTypes.petrol,
                engineTitle: "3.0 Twin-Scroll Turbo",
                gearbox: gearboxTypes.manualTwoWd,
                shortDetails: ["Combined cycle consumption: 8.1 l/100km", "CO2 combined cycle: 183 g/km"],
                cost: 2000,
            },
            {
                id: "2.0Twin-scrollTurbo",
                fuelType: engineTypes.petrol,
                engineTitle: "2.0 Twin-Scroll Turbo",
                gearbox: gearboxTypes.automaticTwoWd,
                shortDetails: ["Combined cycle consumption: 7.1 l/100km", "CO2 combined cycle: 161 g/km"],
                cost: 0,
            },
        ],
        possiblePackages: [
            {
                id: "sport",
                image: "/assets/packages/sport.png",
                displayTitle: "Sport package",
                cost: 700,
                shortDetails: ["Spoiler"],
            },
        ],
    },
];
