import "../styles/Header.css";
import { MdPermIdentity } from "react-icons/md"

export const Header = () => {
    return (
      <>
        <div className="w-screen bg-slate-300 flex">
          <div>
            <button>
              <span>
                <MdPermIdentity size={20} />
                <span>Login</span>
              </span>
            </button>
          </div>
        </div>
      </>
    );
}