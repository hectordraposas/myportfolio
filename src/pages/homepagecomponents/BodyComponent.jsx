import { useState } from "react";
import HeroComponent from "./headercomponents/HeroComponent";
import ImageConponent from "./headercomponents/ImageConponent";
import HireMeComponent from "./modalcomponents/HireMeComponent";

const BodyComponent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? <HireMeComponent onShowModal={setShowModal} /> : ""}
      <div className="md:flex flex w-[98%] md:w-[90%] mx-auto shadow-2xl/20 flex-col md:flex-row">
        <HeroComponent onShowModal={setShowModal} />
        <ImageConponent />
      </div>
    </>
  );
};

export default BodyComponent;
