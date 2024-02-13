import styled from "styled-components";

export const RandomColorStyle = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;

    .box {
        width: 45rem;
        padding: 3rem 2rem;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        box-shadow: 0 2px 10px 5px   rgba(0, 0, 0, 0.2);
    }

    .color-heading {
        padding: 1rem 2rem;
        border-radius: 2rem;
        h1 {
            font-size: 5.2rem;
            line-height: 1.2;
            color: var(--color-text-3);
        }
    }

    .type-of-color {
        display: flex;
        gap: 2rem;
    }

    .btn {
        background-color: var(--color-bg-2);
        padding: 1rem 2rem;
        font-size: 1.8rem;
        border: 1px solid #333;

        &:active {
            transform: translateY(-1px);
        }
    }
`;
