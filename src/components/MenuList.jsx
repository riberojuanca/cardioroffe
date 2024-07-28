"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Descúbrenos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img
                      className="h-auto rounded-md"
                      src="/prueba01.jpg"
                      alt="Imagen de presentación"
                      width={640}
                      height={960}
                    ></img>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      CardioRoffe
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Descripición de presentación de clínica de prueba.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/cita" title="Cita">
                Pide tu cita
              </ListItem>
              <ListItem href="/correo" title="Correo">
                cardioroffe@correo.com
              </ListItem>
              <ListItem href="/wp" title="WhatsApp">
                Consulta directa por Whatsapp
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/*Servicios*/}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {servicesComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/*Trans Family*/}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Trans Family</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {transFamily.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/*FAQs*/}
        <NavigationMenuItem>
          <NavigationMenuTrigger>FAQs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {FAQs.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/*Unidad CardioRoffe*/}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Unidad CardioRoffe</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {unidadCardioRoffe.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/*Antes y después*/}
        <NavigationMenuItem>
          <Link href="/antes-y-despues" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Antes y después
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default MenuList;

const servicesComponents = [
  {
    title: "Medicina estética",
    href: "/medicina-estetica",
    description: "Descripción de Medicina estética",
  },
  {
    title: "Feminización corporal",
    href: "/feminización-corporal",
    description: "Descripción de Feminización corporal",
  },
  {
    title: "Metoidioplastia",
    href: "/metoidioplastia",
    description: "Descripción de Metoidioplastia",
  },
  {
    title: "Masculinización corporal",
    href: "masculinizacion-corporal",
    description: "Descripción de Masculinización corporal",
  },
  {
    title: "Vaginoplastia",
    href: "/vaginoplastia",
    description: "Descripción de Vaginoplastia",
  },
  {
    title: "Feminización facial",
    href: "/feminización-facial",
    description: "Descripción de Feminización facial",
  },
];

const transFamily = [
  {
    title: "Transexualidad",
    href: "/transexualidad",
    description: "Descripción de transexualidad",
  },
  {
    title: "Familias",
    href: "/familias",
    description: "Descripción de familias",
  },
  {
    title: "Info sobre género",
    href: "/info-sobre-genero",
    description: "Descripción de info sobre género",
  },
];

const FAQs = [
  {
    title: "FAQs Vaginoplastia",
    href: "/faqs-vaginoplastia",
    description: "Descripción de FAQs Vaginoplastia",
  },
  {
    title: "FAQs Faloplastia",
    href: "/faqs-faloplastia",
    description: "Descripción de FAQs Faloplastia",
  },
  {
    title: "FAQs Mastectomía",
    href: "/faqs-mastectomia",
    description: "Descripción de FAQs Mastectomia",
  },
];

const unidadCardioRoffe = [
  {
    title: "Unidad de Género",
    href: "/unidad-de-genero",
    description: "Descripción de Unidad de Género",
  },
  {
    title: "Equipo",
    href: "/equipo",
    description: "Descripción de Equipo",
  },
  {
    title: "Instalaciones",
    href: "/instalaciones",
    description: "Descripción de Instalaciones",
  },
  {
    title: "Videos de cirugías",
    href: "/videos-de-cirugias",
    description: "Descripción de Videos de cirugías",
  },
  {
    title: "Trámites",
    href: "/tramites",
    description: "Descripción de Trámites",
  },
];

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
