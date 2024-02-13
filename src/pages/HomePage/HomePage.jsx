import HomeCard from "./HomeCard";
import HomeData from "./HomeData";

import { CardStyle, HomePageStyle } from "./HomeStyle";

export default function HomePage() {
    return (
        <HomePageStyle>
            <header>
                <h1>React Mini-Projects</h1>
            </header>

            <CardStyle>
                {HomeData.map((item) => (
                    <HomeCard key={item.id} {...item} />
                ))}
            </CardStyle>

            <footer>
                <p>
                    Built By |&nbsp;
                    <a
                        href="https://github.com/AmandeepMewar/React-Mini-Projects"
                        target="_blank"
                    >
                        Amandeep Mewar
                    </a>
                </p>
            </footer>
        </HomePageStyle>
    );
}
