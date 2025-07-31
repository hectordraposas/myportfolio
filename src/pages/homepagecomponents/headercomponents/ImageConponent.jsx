import meImg from "..//..//..//images/me.png";

const ImageConponent = () => {
  return (
    <div className="bg-white/50 w-full mt-5 p-2 md:h-[calc(100vh_-_100px)] md:rounded-tr-xl overflow-hidden md:order-2 order-1 flex justify-center items-center">
      <img
        className="object-top object-cover md:rounded-tr-md rounded-[50%] md:h-full md:w-full  h-40 w-40"
        src={meImg}
        alt="my photo"
      />
    </div>
  );
};

export default ImageConponent;
