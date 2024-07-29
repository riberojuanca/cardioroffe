"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

//Objects Array
export const dataCarouselTop = [
  {
    id: 1,
    title: "Primer Titulo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae dicta amet porro, delectus explicabo? Ut, molestiae? Illo iste ab ex laudantium? Dolorem quaerat incidunt architecto qui pariatur temporibus ab.",
    link: "#",
    image: "/prueba1.jpg",
  },
  {
    id: 2,
    title: "Segundo Titulo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae dicta amet porro, delectus explicabo? Ut, molestiae? Illo iste ab ex laudantium? Dolorem quaerat incidunt architecto qui pariatur temporibus ab.",
    link: "#",
    image: "/prueba2.jpg",
  },
  {
    id: 3,
    title: "Tercer Titulo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae dicta amet porro, delectus explicabo? Ut, molestiae? Illo iste ab ex laudantium? Dolorem quaerat incidunt architecto qui pariatur temporibus ab.",
    link: "#",
    image: "/prueba3.jpg",
  },
  {
    id: 4,
    title: "Cuarto Titulo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae dicta amet porro, delectus explicabo? Ut, molestiae? Illo iste ab ex laudantium? Dolorem quaerat incidunt architecto qui pariatur temporibus ab.",
    link: "#",
    image: "/prueba4.jpg",
  },
];

const CarouselHeader = () => {
  const router = useRouter();
  return (
    <section className="mt-24">
      <Carousel
        className="sm:w-full p-4 sm:p-0 sm:bg-black "
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="">
          {dataCarouselTop.map(({ id, title, description, link, image }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="lg:w-screen cursor-pointer"
            >
              <div className="sm:rounded-lg ">
                <Card className=" flex items-center justify-center sm:w-fit sm:h-80 sm:mt-0 bg-black  text-white shadow-none border-none">
                  <CardContent className="flex sm:flex-row flex-col justify-center gap-6 items-center text-center ">
                    <img
                      className="rounded-md sm:rounded-xl h-80 sm:h-60 mt-6 sm:pt-0 sm:mt-6 sm:w-2/5 object-cover"
                      src={image}
                      width={640}
                      height={640}
                      alt=""
                    ></img>
                    <div className="sm:w-1/3 w-full flex flex-col items-start text-left">
                      <h2 className=" sm:text-lg text-wrap">{title}</h2>
                      <p className=" text-xs sm:text-sm text-wrap">
                        {description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default CarouselHeader;
