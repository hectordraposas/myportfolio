import { NavLink } from "react-router-dom";

const HireMeComponent = ({ onShowModal }) => {
  const handleModal = () => {
    onShowModal((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 bg-white/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Hey There!</h2>
        <p className="mb-4">Hi! I'm glad you interested working with me.</p>
        <p className="">Please email me at:</p>
        <p className="mb-4">Email : hector.raposas@gmail.com</p>
        <hr className="mb-4 text-slate-400" />
        <figure className="flex justify-between items-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">
            <NavLink to="about"> Check my resume instead</NavLink>
          </button>
          <button
            onClick={handleModal}
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Close
          </button>
        </figure>
      </div>
    </div>
  );
};

export default HireMeComponent;
