import { FunctionComponent, useState } from "react";
import MapHeader from "./MapHeader/MapHeader";
import MapTabs from "./MapTabs/MapTabs";
import styles from "./Map.module.scss";
import MapSettings from "./MapSettings/MapSettings";
import ComingSoon from "../ComingSoon/ComingSoon";
interface MapProps {}

const Map: FunctionComponent<MapProps> = () => {
  const [activeTab, setactiveTab] = useState(1);
  return (
    <div className={styles.mapPage}>
      <MapHeader />
      <MapTabs onTabChange={setactiveTab} />
      <div className={styles.mapSection}>
        {activeTab != 1 ? (
          <ComingSoon />
        ) : (
          <>
            <MapSettings className={styles.mapSettings} />
            <iframe
              width="100%"
              height="100%"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Calculate population in area
              </a>
            </iframe>
          </>
        )}
      </div>
    </div>
  );
};

export default Map;
