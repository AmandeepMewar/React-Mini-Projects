import { useEffect, useRef, useState } from "react";
import { LoadMoreStyle } from "./LoadMoreStyle";
import { LuLoader2 } from "react-icons/lu";

export default function LoadMore() {
    const ref = useRef(true);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${
                    count === 0 ? 0 : count * 20
                }`
            );
            const result = await response.json();

            if (result && result.products && result.products.length) {
                ref.current = true;
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false);
            }

            console.log(result);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (ref.current) {
            fetchProducts();
            ref.current = false;
        }
    }, [count]);

    return (
        <LoadMoreStyle>
            <div className="container">
                {products && products.length ? (
                    products.map((item) => (
                        <div key={item.id} className="product">
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                ) : (
                    <div className="loader">
                        <LuLoader2 className="loader-icon" />
                        Loading data! Please wait...
                    </div>
                )}
            </div>

            {products.length && (
                <div className="btn">
                    <button
                        onClick={() => setCount(count + 1)}
                        disabled={count === 4}
                    >
                        {loading && <LuLoader2 className="btn-icon" />}
                        Load More Products
                    </button>
                </div>
            )}
        </LoadMoreStyle>
    );
}
