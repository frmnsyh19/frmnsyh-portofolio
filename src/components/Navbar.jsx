import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-white flex justify-center items-center fixed shadow-xl z-10">
        <div className="navbar lg:w-10/12 w-full bg-base">
          <div className="flex-1 w-full">
            <a className="btn btn-ghost normal-case text-2xl">frmnsyh</a>
          </div>
          <div className="lg:flex-none flex justify-end w-80 gap-2 mr-3">
            <div className="w-full hidden lg:block">
              <ul className="p-2 flex flex-row justify-around">
                <li className="p-2 normal-case text-lg rounded btn-ghost">
                  <a href="#home">home</a>
                </li>
                <li className="p-2 normal-case text-lg rounded btn-ghost">
                  <a href="#about">about</a>
                </li>
                <li className="p-2 normal-case text-lg rounded btn-ghost">
                  <a href="#skill">skill</a>
                </li>
                <li className="p-2 normal-case text-lg rounded btn-ghost">
                  <a href="#project">project</a>
                </li>
                <li className="p-2 normal-case text-lg rounded btn-ghost">
                  <a href="#contact">contack</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end block lg:hidden">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost rounded-btn ms-4 border shadow-xl">
                <FontAwesomeIcon icon={faBarsStaggered} />
              </div>
              <ul
                tabIndex="0"
                className="menu dropdown-content z-[1] p-2 shadow-lg text-neutral bg-slate-50 rounded-box w-52 mt-4">
                <li>
                  <a href="#home" className="text-lg">
                    home
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="#about">
                    about
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="#skill">
                    skill
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="#project">
                    project
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="#contact">
                    contack
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
