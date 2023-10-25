import { Content } from "@components/Content";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <div className="page-banner--image relative">
            <Image
                src="/hero-banner.png"
                width={1024}
                height={680}
                className="w-full"
                alt="Page Banner"
                objectFit="cover"
            />
            <h1 className="text-center mx-auto mistral text-white main-title text-4xl lg:text-9xl">
                Чиста Вода
            </h1>
        </div>
    );
};
