import { playfair } from "@/app/layout";
import MenuList from "./MenuList";
import Link from "next/link";

const Menu = () => {
  return (
    <header className="z-50 px-4 flex justify-evenly items-center h-24 bg-white fixed w-full top-0 gap-8">
      <div>
        <div className="flex items-center flex-col">
          <Link href="/">
            <h1 className={`${playfair.className}  text-2xl font-semibold`}>
              CardioRoffe
            </h1>
          </Link>
          <p className="">+598 123 456 789</p>
        </div>
      </div>
      <MenuList />
    </header>
  );
};

export default Menu;
