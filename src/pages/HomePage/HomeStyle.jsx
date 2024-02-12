import styled from "styled-components";

export const HomePageStyle = styled.div`
    min-height: 100vh;
    padding: 3rem;
    background-color: var(--color-bg-1);

    header h1 {
        width: 100%;
        text-align: center;
        font-size: 5.2rem;
        margin-bottom: 1rem;
    }
`;

export const CardStyle = styled.div`
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(34rem, 1fr));
    gap: 5rem;
    margin: 5rem auto;

    .card {
        height: 45rem;
        border: 1px solid #333;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
        transition: all 0.2s;

        &:hover {
            border-color: #666;
        }
    }

    .iframe-wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;

        iframe {
            height: 90%;
            width: 100%;
            pointer-events: none;
            user-select: none;
            border: none;
            object-fit: cover;
        }
    }

    .title {
        font-size: 2rem;
        flex: 1;
        display: grid;
        place-items: center;
        border-top: 1px solid #333;
        background-color: var(--color-grey-3);
    }
`;
