import { Link } from "react-router-dom";

const HomeCard = (props) => {
    return (
        <div className="card">
            <Link to={props.path} className="iframe-wrapper">
                <iframe src={props.path} scrolling="no"></iframe>
                <h3 className="title">{props.title}</h3>
            </Link>
        </div>
    );
};

export default HomeCard;
