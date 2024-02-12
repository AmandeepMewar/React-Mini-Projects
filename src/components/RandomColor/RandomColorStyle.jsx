import styled from "styled-components";

export const RandomColorStyle = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .color-heading {
        font-size: 3.5rem;
        color: var(--color-text-2);
    }

    .type-of-color {
        display: flex;
        gap: 2rem;
    }

    .btn {
        background-color: var(--color-bg-3);
        padding: 1rem 2rem;
        font-size: 1.6rem;
    }
`;
