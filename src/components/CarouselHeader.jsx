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
    <div className="bg-black dark:bg-secondary h-80">
      <Carousel
        className="w-screen"
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
              className=" cursor-pointer"
            >
              <div className="rounded-lg">
                <Card className="flex items-center justify-center w-screen h-80 bg-black  text-white shadow-none border-none object-cover">
                  <CardContent className="flex justify-center gap-8 items-center text-center">
                    <img
                      className="h-100 w-auto object-contain "
                      src={image}
                      width={640}
                      height={640}
                      alt=""
                    ></img>
                    <div className="w-1/3 flex flex-col items-start text-left">
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
