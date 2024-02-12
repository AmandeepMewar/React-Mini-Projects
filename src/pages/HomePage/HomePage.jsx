import HomeCard from "./HomeCard";
import HomeData from "./HomeData";

import { CardStyle, HomePageStyle } from "./HomeStyle";

export default function HomePage() {
    return (
        <HomePageStyle>
            <header>
                <h1>React Mini Projects</h1>
            </header>

            <CardStyle>
                {HomeData.map((item) => (
                    <HomeCard key={item.id} {...item} />
                ))}
            </CardStyle>
        </HomePageStyle>
    );
}
