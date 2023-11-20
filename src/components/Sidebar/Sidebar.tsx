import { FunctionComponent, useState } from "react";
import styles from "./Sidebar.module.scss";
interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const tabs = [
    { label: "Dashboard", icon: "/assets/dashboard.svg", url: "" },
    { label: "Alerts", icon: "/assets/alert.svg", url: "" },
    { label: "Map", icon: "/assets/map.svg", url: "" },
    { label: "Search/Watchlist", icon: "/assets/search.svg", url: "" },
    { label: "Analytics", icon: "/assets/analytics.svg", url: "" },
    { label: "Control Panel ", icon: "/assets/control-panel.svg", url: "" },
  ];

  const [activeTab, setactiveTab] = useState(2);
  const onTabClick = (idx: number) => {
    setactiveTab(idx);
  };
  return (
    <div className={styles.sidebar}>
      <img src="/assets/logo.svg" className={styles.logo} />
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
