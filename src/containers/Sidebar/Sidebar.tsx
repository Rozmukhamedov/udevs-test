import { useState } from "react";
import classes from "./style.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as LogoImage } from "../../assets/images/LogoIcon.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/CloseIcon.svg";
import { ReactComponent as OpenIcon } from "../../assets/images/OpenIcon.svg";
import { ReactComponent as AnalyticsIcon } from "../../assets/images/sidebar/analytics.svg";
import { Button } from "../../components";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <AnalyticsIcon />,
    },
    {
      path: "/source",
      name: "Источник подбора",
      icon: <AnalyticsIcon />,
    },
    {
      path: "/age",
      name: "Средний возраст",
      icon: <AnalyticsIcon />,
    },
  ];

  return (
    <div
      style={{ width: isOpen ? "296px" : "56px" }}
      className={classes.sidebar}
    >
      <div className={classes.left}>
        <div className={classes.top}>
          {isOpen ? (
            <LogoImage />
          ) : (
            <Button type="button" onClick={toggle}>
              <OpenIcon />
            </Button>
          )}
        </div>
        <div className={classes.items}>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={
                item.path == location.pathname
                  ? classes.active
                  : classes.disactive
              }
            >
              {item.icon}
            </NavLink>
          ))}
        </div>
      </div>
      {isOpen ? (
        <div className={classes.right}>
          <div className={classes.top}>
            <p>Рекрутинг</p>
            <Button type="button" onClick={toggle}>
              <CloseIcon />
            </Button>
          </div>
          <div className={classes.items}>
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={
                  item.path == location.pathname
                    ? classes.active
                    : classes.disactive
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
