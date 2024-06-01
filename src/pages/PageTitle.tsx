import { FC, useEffect } from "react";

type Props = {
    title: string;
};

const PageTitle: FC<Props> = ({ title }) => {
    useEffect(() => {
        document.title = `3D-C | ${title}`;
    }, [title]);

    return null;
};

export default PageTitle;
