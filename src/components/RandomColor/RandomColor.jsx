import { useState } from "react";
import { RandomColorStyle } from "./RandomColorStyle";
export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#130f40");

    const createRandomColor = () => {
        if (typeOfColor === "hex") {
            const hex = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
            ];
            let hexColor = "#";

            for (let i = 0; i < 6; i++) {
                hexColor += hex[Math.floor(Math.random() * 16)];
            }
            console.log(hexColor);
            setColor(hexColor);
        }

        if (typeOfColor === "rgb") {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            setColor(`rgb(${r},${g},${b})`);
        }
    };

    return (
        <div className="wrapper">
            <RandomColorStyle style={{ background: color }}>
                <div className="color-heading">
                    <h1>{color}</h1>
                </div>
                <div className="type-of-color">
                    <button
                        className="btn"
                        onClick={() => setTypeOfColor("hex")}
                    >
                        Create HEX Color
                    </button>
                    <button
                        className="btn"
                        onClick={() => setTypeOfColor("rgb")}
                    >
                        Create RGB Color
                    </button>
                </div>

                <div className="create">
                    <button className="btn" onClick={createRandomColor}>
                        Generate Random Color
                    </button>
                </div>
            </RandomColorStyle>
        </div>
    );
}
