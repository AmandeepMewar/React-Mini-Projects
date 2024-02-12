import { useState } from "react";
import AccordionData from "./AccordionData";
import { AccordionStyle } from "./AccordionStyle";

export default function Accordion() {
    const [single, setSingle] = useState(null);
    const [multiSelection, setMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSelection = () => {
        setMultiSelection((prev) => !prev);
    };

    const handleSingleSelection = (ItemId) => {
        console.log(ItemId);
        setSingle(single === ItemId ? null : ItemId);
    };

    const handleMultipleSelection = (ItemId) => {};

    return (
        <div className="wrapper">
            <AccordionStyle>
                <button className="btn" onClick={handleSelection}>
                    {multiSelection ? "Enable" : "Disable"} Mutliple Selection
                </button>

                <div className="accordion">
                    {AccordionData && AccordionData.length > 0 ? (
                        AccordionData.map((dataItem) => (
                            <div className="item" key={dataItem.id}>
                                <div
                                    onClick={() =>
                                        handleSingleSelection(dataItem.id)
                                    }
                                    className={`title ${
                                        single === dataItem.id ? "active" : ""
                                    }`}
                                >
                                    <h3>{dataItem.question}</h3>
                                    <div className="icon">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                {single === dataItem.id ? (
                                    <div className="content">
                                        {dataItem.answer}
                                    </div>
                                ) : null}
                            </div>
                        ))
                    ) : (
                        <div>No Data Found!</div>
                    )}
                </div>
            </AccordionStyle>
        </div>
    );
}
