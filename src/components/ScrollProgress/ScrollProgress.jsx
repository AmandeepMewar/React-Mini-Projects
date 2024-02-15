import { useEffect, useState } from "react";
import { ScrollProgressStyle } from "./ScrollProgressStyle";

export default function ScrollProgress({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const fetchData = async (getUrl) => {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setErrorMsg(e.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    const handleScrollPercentage = () => {
        const totalScrolled =
            document.body.scrollTop || document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        setScrollPercentage((totalScrolled / scrollHeight) * 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);

        return () => {
            window.removeEventListener("scroll", handleScrollPercentage);
        };
    }, []);

    return (
        <ScrollProgressStyle>
            <header className="header">
                <h1>Scroll Progress</h1>
                <p>{scrollPercentage.toFixed(1)}%</p>
                <div className="progress-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${scrollPercentage}%` }}
                    ></div>
                </div>
            </header>

            <div className="data-container">
                {data && data.length > 0 ? (
                    data.map((dataItem, index) => (
                        <p key={index}>{dataItem.title}</p>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </ScrollProgressStyle>
    );
}
