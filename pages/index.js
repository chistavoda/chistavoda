import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import SEO from "@components/SEO/SEO";
import { CardBody, CardGroup, CardHeader, Card } from "@components/Card";
import Image from "next/image";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="NutriTrack - Avenue Labs landing page template 🚀"
                description="Discover NutriTrack, the effortless way to plan your meals with the power of Notion. Streamline your nutrition journey and achieve your health goals with ease."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-16">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    <SectionContainer id="uslugi" className="feature-tabs">
                        <PageTitle
                            className="text-center mx-auto pt-10"
                            type="default"
                        >
                            Нашите услуги
                        </PageTitle>
                        <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-3">
                            <Card className="col-span-1 text-primary-900">
                                <CardBody className="w-full bg-white-600/20 p-12">
                                    <CardHeader className="!text-black !text-2xl !font-bold">
                                        Инспекция на сондажи с видео камера
                                    </CardHeader>
                                    <p>
                                        Приемане на нов сондаж, решаване на
                                        възникнали спорове, обследване на
                                        сондажи без документация, установяване
                                        причините за замърсяване на водата,
                                        проверка за повреди и попаднали чужди
                                        предмети.
                                    </p>
                                </CardBody>
                            </Card>
                            <Card className="col-span-1 text-primary-900">
                                <CardBody className="w-full bg-white-600/20 p-12">
                                    <CardHeader className="!text-black !text-2xl !font-bold">
                                        Почистване на сондажи
                                    </CardHeader>
                                    <p>
                                        Машинно почистване на нови и стари
                                        сондажи, премахване на отложения пясък,
                                        глина и кал, освобождаване на заседнали
                                        помпи и изваждане на чужди предмети от
                                        сондажа.
                                    </p>
                                </CardBody>
                            </Card>
                            <Card className="col-span-1 text-primary-900">
                                <CardBody className="w-full bg-white-600/20 p-12">
                                    <CardHeader className="!text-black !text-2xl !font-bold">
                                        Доставка и монтаж на сондажни помпи
                                    </CardHeader>
                                    <p>
                                        Предоставяме комплексни услуги за
                                        доставка и професионален монтаж на
                                        сондажни помпи, гарантирайки надеждна и
                                        ефективна работа на вашите съоръжения.
                                    </p>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </SectionContainer>
                    <SectionContainer
                        id="kontakti"
                        className="faq bg-gray-100 py-12"
                    >
                        <PageTitle
                            className="text-center mx-auto mb-8"
                            type="default"
                        >
                            Контакти
                        </PageTitle>

                        <div className="w-full py-12 bg-gray-100">
                            <div className="flex flex-col md:flex-row justify-around items-center">
                                {/* Email */}
                                <div className="flex items-center mb-6 md:mb-0 space-x-4">
                                    <div className="bg-white-600/20 p-3 rounded-full">
                                        @
                                    </div>
                                    <a
                                        href="mailto:info@chistavoda.site"
                                        className="text-black hover:underline"
                                    >
                                        info@chistavoda.site
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center mb-6 md:mb-0 space-x-4">
                                    <div className="bg-white-600/20 p-3 rounded-full">
                                        📞
                                    </div>
                                    <a
                                        href="tel:+359889660333"
                                        className="text-black hover:underline"
                                    >
                                        +359 889 660 333
                                    </a>
                                </div>

                                {/* Address */}
                                <div className="flex items-center mb-6 md:mb-0 space-x-4">
                                    <div className="bg-white-600/20 p-3 rounded-full">
                                        <Image
                                            src="/black-pin.png"
                                            width={24}
                                            height={24}
                                            alt="Pin"
                                        />
                                    </div>
                                    <div className="text-black">
                                        София, Казанлък
                                    </div>
                                </div>

                                {/* Facebook */}
                                <div className="flex items-center space-x-4">
                                    <div className="bg-white-600/20 p-3 rounded-full">
                                        <Image
                                            src="/facebook-log.png"
                                            width={24}
                                            height={24}
                                            alt="Facebook"
                                        />
                                    </div>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61552803264917"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black hover:underline"
                                    >
                                        Фейсбук
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SectionContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
