import { useState } from "react";
import AccordionData from "./AccordionData";
import { AccordionStyle } from "./AccordionStyle";

export default function Accordion() {
    const [single, setSingle] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSelection = () => {
        setEnableMultiSelect((prev) => !prev);
        setMultiple([]);
        setSingle(null);
    };

    const handleSingleSelection = (ItemId) => {
        setSingle(single === ItemId ? null : ItemId);
    };

    const handleMultipleSelection = (ItemId) => {
        if (multiple.includes(ItemId)) {
            setMultiple(multiple.filter((id) => id !== ItemId));
        } else {
            setMultiple([...multiple, ItemId]);
        }
    };

    return (
        <div className="wrapper">
            <AccordionStyle>
                <button className="btn" onClick={handleSelection}>
                    {enableMultiSelect ? "Disable" : "Enable"} Mutliple
                    Selection
                </button>

                <div className="accordion">
                    {AccordionData && AccordionData.length > 0 ? (
                        AccordionData.map((dataItem) => (
                            <div className="item" key={dataItem.id}>
                                <div
                                    onClick={() =>
                                        enableMultiSelect
                                            ? handleMultipleSelection(
                                                  dataItem.id
                                              )
                                            : handleSingleSelection(dataItem.id)
                                    }
                                    className={`title ${
                                        single === dataItem.id ? "active" : ""
                                    }`}
                                >
                                    <h4>{dataItem.question}</h4>
                                    <div className="icon">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                {single === dataItem.id ||
                                multiple.includes(dataItem.id) ? (
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
