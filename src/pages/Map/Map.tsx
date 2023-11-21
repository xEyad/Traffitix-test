import { FunctionComponent, useState } from "react";
import MapHeader from "./MapHeader/MapHeader";
import MapTabs from "./MapTabs/MapTabs";
import styles from "./Map.module.scss";
import MapSettings from "./MapSettings/MapSettings";
import ComingSoon from "../ComingSoon/ComingSoon";
import { getRandomInt } from "../../utils";
interface MapProps {}

const Map: FunctionComponent<MapProps> = () => {
  const [activeTab, setactiveTab] = useState(1);
  const [activeOption, setactiveOption] = useState(0);

  const generateCongestions = () => {
    let congestions = [];
    for (let i = 0; i < getRandomInt(1, 7); i++) {
      let left = getRandomInt(320, 820);
      let top = getRandomInt(120, 420);
      congestions.push([left, top]);
    }
    return congestions;
  };
  const congestions = generateCongestions();
  return (
    <div className={styles.mapPage}>
      <MapHeader />
      <MapTabs onTabChange={setactiveTab} />
      <div className={styles.mapSection}>
        {activeTab != 1 ? (
          <ComingSoon />
        ) : (
          <>
            <MapSettings
              className={styles.mapSettings}
              onOptionChange={setactiveOption}
            />
            {activeOption == 0 ? (
              congestions.map((c) => (
                <div
                  style={{
                    left: `${c[0]}px`,
                    top: `${c[1]}px`,
                  }}
                  className={styles.pulsatingCircle}
                ></div>
              ))
            ) : (
              <></>
            )}
            <iframe
              width="100%"
              height="100%"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </>
        )}
      </div>
    </div>
  );
};

export default Map;
