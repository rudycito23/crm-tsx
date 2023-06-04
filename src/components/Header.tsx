import "../styles/Header.css";
import { MdPermIdentity } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <div className="w-screen bg-slate-300 flex flex-row-reverse">
        <div className="m-4 flex justify-evenly items-center gap-1">
          <button className="flex items-center space-x-2 border-solid border-2 border-sky-500 p-2">
            <MdPermIdentity size={20} />
            <span>Login</span>
          </button>
          <button className="flex items-center space-x-2 border-solid border-2 border-sky-500 p-2">
            Try it free
          </button>
        </div>
      </div>
    </>
  );
};
