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
    <div className="dark:bg-secondary h-80">
      <Carousel
        className="flex justify-center items-center h-full w-screen sm:w-full sm:max-w-7xl  sm:rounded-lg"
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
              className=" lg:w-auto cursor-pointer"
            >
              <div className="sm:rounded-lg">
                <Card className="flex items-center justify-center w-screen sm:w-fit sm:h-80 mt-40 sm:mt-0 bg-black  text-white shadow-none border-none object-contain">
                  <CardContent className="flex sm:flex-row flex-col justify-start gap-6 items-center text-center">
                    <img
                      className="h-fit w-auto pt-6 sm:pt-8 pb-2 sm:h-80 sm:w-3/6 object-cover rounded-xl"
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
    </div>
  );
};

export default CarouselHeader;
