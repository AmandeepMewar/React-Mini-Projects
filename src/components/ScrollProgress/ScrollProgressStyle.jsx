import styled from "styled-components";

export const ScrollProgressStyle = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 1.6rem;

    .header {
        width: 100%;
        background-color: var(--color-text-1);
        color: var(--color-text-3);
        position: fixed;
        padding-top: 1rem;
        top: 0;
        left: 0;
        z-index: 10;

        .progress-container {
            height: 0.8rem;
            background-color: var(--color-border-2);
        }

        .progress-bar {
            width: 100%;
            height: 100%;
            background-color: var(--color-text-2);
            transition: width 0.2s;
        }
    }

    .data-container {
        position: absolute;
        top: 10rem;
    }
`;
