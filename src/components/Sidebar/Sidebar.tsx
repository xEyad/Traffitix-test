import { FunctionComponent, useState } from "react";
import styles from "./Sidebar.module.scss";
import router from "../../Routes";
import { PUBLIC_URL } from "../../utils";
interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const tabs = [
    {
      label: "Dashboard",
      icon: `${PUBLIC_URL}/assets/dashboard.svg`,
      url: "/dashboard",
    },
    { label: "Alerts", icon: `${PUBLIC_URL}/assets/alert.svg`, url: "/alerts" },
    { label: "Map", icon: `${PUBLIC_URL}/assets/map.svg`, url: "/map" },
    {
      label: "Search/Watchlist",
      icon: `${PUBLIC_URL}/assets/search.svg`,
      url: "/search",
    },
    {
      label: "Analytics",
      icon: `${PUBLIC_URL}/assets/analytics.svg`,
      url: "/analytics",
    },
    {
      label: "Control Panel ",
      icon: `${PUBLIC_URL}/assets/control-panel.svg`,
      url: "/control-panel",
    },
  ];

  const [activeTab, setactiveTab] = useState(2);
  const onTabClick = (idx: number) => {
    setactiveTab(idx);
    router.navigate(tabs[idx].url);
  };
  return (
    <div className={styles.sidebar}>
      <img src={`${PUBLIC_URL}/assets/logo.svg`} className={styles.logo} />
      {tabs.map((tab, idx) => (
        <div
          className={styles.tab}
          onClick={() => onTabClick(idx)}
          style={{
            backgroundColor:
              activeTab == idx
                ? "rgba(255, 200, 86, 0.17)"
                : "rgba(255, 255, 255, 0.06)",
          }}
        >
          <img
            src={
              activeTab === idx
                ? tab.icon.replace(".svg", "-active.svg")
                : tab.icon
            }
            alt={tab.label}
          />
          {}
          <span
            style={{
              color: activeTab == idx ? "#F2AB19" : "white",
            }}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
