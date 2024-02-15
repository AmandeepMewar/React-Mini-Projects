import { useState } from "react";
import { TabStyle } from "./TabStyle";
import TabsData from "./TabsData";
export default function Tabs() {
    const [active, setActive] = useState(1);

    return (
        <div className="wrapper">
            <TabStyle>
                <div className="header">
                    {TabsData.map((dataItem) => (
                        <button
                            key={dataItem.id}
                            className={`title ${
                                active === dataItem.id ? "active" : ""
                            }`}
                            onClick={() => setActive(dataItem.id)}
                        >
                            {dataItem.title}
                        </button>
                    ))}
                </div>

                <div className="data-container">
                    {TabsData.map((dataItem) => (
                        <div key={dataItem.id} className="content">
                            {active === dataItem.id && dataItem.content}
                        </div>
                    ))}
                </div>
            </TabStyle>
        </div>
    );
}
