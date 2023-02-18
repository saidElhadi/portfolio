import { useContext, useState } from "react";
import { WatsonContext } from "../context/Context";
import { aboutMeInfo } from "../data/protfolioData";
import useClickOutside from "../useClickOutside";

const menus = [
  { id: 1, icon: "lnr lnr-home", name: "Home", href: "home" },
  { id: 2, icon: "lnr lnr-user", name: "About Me", href: "about" },
  { id: 3, icon: "lnr lnr-license", name: "Resume", href: "resume" },
  // { id: 4, icon: "lnr lnr-briefcase", name: "Portfolio", href: "portfolio" },
  { id: 5, icon: "lnr lnr-book", name: "Blog", href: "blog" },
  { id: 6, icon: "lnr lnr-envelope", name: "Contact", href: "contact" },
];

const Sidebar = () => {
  const { changeSection, section } = useContext(WatsonContext);
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });
  return (
    <header>
      <div className={`header-content ${toggle ? "on" : ""}`}>
        {/*Mobile Header*/}
        <div className="header-mobile">
          <a className="header-toggle" onClick={() => setToggle(!toggle)}>
            <i className="fas fa-bars" />
          </a>
          <h2>{aboutMeInfo.name}</h2>
        </div>
        {/*Main Header*/}
        <div className="header-main" data-simplebar="" ref={domNode}>
          <div className="image-container">
            <h2 className="header-name">{aboutMeInfo.name}</h2>
            <img src="img/profile-img.jpg" alt="profile-pic" />
          </div>
          {/*Nav Menus*/}
          <nav className="nav-menu">
            <ul>
              {menus.map((menu, i) => (
                <li key={menu.id}>
                  <a
                    href={`#${menu.href}`}
                    onClick={() => {
                      changeSection(menu.href)
                      setToggle(!toggle)
                    }}

                    className={`pt-link ${
                      menu.href === section ? "active" : ""
                    }`}
                  >
                    <span className="nav-menu-icon">
                      <i className={menu.icon} />
                    </span>
                    {menu.name}{" "}
                  </a>{" "}
                </li>
              ))}
            </ul>
          </nav>
          {/*Nav Footer*/}
          <div className="nav-footer">
            {/*Social Links*/}
            <ul className="social">
              <li>
                <a href="https://www.instagram.com/madara_ehd">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sayid-elhadi-23098b216/">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="weixin://dl/chat?elhadi_said">
                  <i className="fab fa-weixin" />
                </a>
              </li>
            </ul>
            {/*Copyright Text*/}
            <div className="copy">
              <p>
                {new Date().getFullYear()} © SAYID ELHADI.
                <br />
                All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Sidebar;
