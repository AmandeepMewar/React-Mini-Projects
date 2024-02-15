import { useNavigate } from "react-router-dom";
import { ErrorStyle } from "./ErrorStyle";

export default function Error404() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };

    return (
        <ErrorStyle>
            <h1>404</h1>
            <h2>Page Not Found!</h2>
            <button onClick={navigateHome} className="btn">
                Go Home
            </button>
        </ErrorStyle>
    );
}
