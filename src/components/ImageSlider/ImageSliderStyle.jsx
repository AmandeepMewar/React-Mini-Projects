import styled from "styled-components";

export const ImageSliderStyle = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60rem;

    .current-image {
        width: 60rem;
        height: 40rem;
        box-sizing: 0px 0px 7px #666;
        object-fit: cover;

    }

    .hide-current-image {
        display: none;
    }

    .arrow {
        position: absolute;
        width: 5rem;
        height: 5rem;
        color: rgba(255, 255, 255, 0.5);
        filter: drop-shadow(0px 0px 5px #555);
        z-index: 10;
    }

    .arrow-left {
        left: 2rem;
    }

    .arrow-right {
        right: 2rem;
    }

    .circle-indicator {
        display: flex;
        position: absolute;
        bottom: 2rem;
    }

    .current-indicator {
        background-color: #fff;
        height: 1.5rem;
        width: 1.5rem;
        margin: 0 0.2rem;
        border-radius: 50%;
        display: grid;
        place-items: center;

    }

    .inactive-indicator {
        background-color: rgba(255, 255, 255, 0.5);
    }
`;
