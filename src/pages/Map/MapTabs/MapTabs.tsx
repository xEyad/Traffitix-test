import { FunctionComponent, useState } from "react";
import styles from "./MapTabs.module.scss";
import Switch from "react-switch";
interface MapTabsProps {
  onTabChange?: (tab: number) => void;
}

const MapTabs: FunctionComponent<MapTabsProps> = (props) => {
  const tabs = [{ label: "Tab1" }, { label: "Tab2" }, { label: "Tab3" }];
  const [isHeatMapOn, setisHeatMapOn] = useState(false);
  const [activeTab, setactiveTab] = useState(1);
  const onFlowHeatMapClicked = () => {
    setisHeatMapOn(!isHeatMapOn);
  };
  const onTabSelected = (idx: number) => {
    setactiveTab(idx);
    if (props.onTabChange) props.onTabChange(idx);
  };
  return (
    <div className={styles.mapTabs}>
      <div className={styles.tabs}>
        {tabs.map((tab, idx) => (
          <div
            style={{
              color: activeTab == idx ? "#F2AB19" : "",
              textUnderlineOffset: "8px",
              textDecoration: activeTab == idx ? "underline" : "",
            }}
            className={styles.tab}
            onClick={() => onTabSelected(idx)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.heatBtn}>
        <span>Flow heat maps</span>
        <div style={{ paddingTop: "11px" }}>
          <Switch
            width={34}
            height={18}
            onColor="#fdf7e9"
            checkedIcon={false}
            uncheckedIcon={false}
            onHandleColor="#F2AB19"
            className="react-switch"
            onChange={onFlowHeatMapClicked}
            checked={isHeatMapOn}
            aria-labelledby="neat-label"
          />
        </div>
      </div>
      <div className={styles.incidentBtn}>
        <div></div>
        <span>Incident data</span>
      </div>
    </div>
  );
};

export default MapTabs;
