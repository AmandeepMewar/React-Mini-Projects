import styled from "styled-components";

export const HomePageStyle = styled.div`
    min-height: 100vh;
    padding: 3rem;
    padding-bottom: 1rem;
    background-color: var(--color-bg-1);

    header h1 {
        width: 100%;
        text-align: center;
        font-size: 5.2rem;
        margin-bottom: 1rem;
        font-weight: 700;
        letter-spacing: 5px;
        text-shadow: 2px 5px 6px rgba(255, 255, 255, 0.2);
        color: var(--color-text-1);
        text-transform: uppercase;
    }

    footer p {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: 300;
        margin-bottom: 1rem;
        letter-spacing: 3px;

        a {
            color: var(--color-text-1);
            cursor: pointer;
            font-weight: 700;
            transition: color 0.2s;

            &:hover {
                color: var(--color-text-2);
            }
        }
    }
`;

export const CardStyle = styled.div`
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    gap: 5rem;
    margin: 5rem auto;

    .card {
        height: 48rem;
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
            height: 85%;
            width: 100%;
            pointer-events: none;
            user-select: none;
            border: none;
            object-fit: cover;
            overflow: hidden;
            object-position: center;
        }
    }

    .title {
        font-size: 2.8rem;
        font-weight: 400;
        flex: 1;
        display: grid;
        place-items: center;
        border-top: 1px solid #333;
        background-color: var(--color-grey-3);
    }
`;
