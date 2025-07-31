import LogoComponent from "./navbarcomponents/LogoComponent";
import NavigationComponent from "./navbarcomponents/NavigationComponent";

const NavBarComponent = () => {
  return (
    <nav className="flex justify-between md:w-[80%] w-[95%] mx-auto mt-5 items-center rounded-md text-amber-50 cursor-pointer transition-all md:flex-row flex-col gap-5 md:gap-1">
      <LogoComponent />
      <NavigationComponent />
    </nav>
  );
};

export default NavBarComponent;
