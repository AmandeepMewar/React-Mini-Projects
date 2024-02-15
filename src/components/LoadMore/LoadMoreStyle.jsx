import styled from "styled-components";

export const LoadMoreStyle = styled.div`
    width: 90%;
    margin: 2rem auto;

    .container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        gap: 2rem;

        p {
            font-size: 1.6rem;
            text-align: center;
        }
    }

    .loader {
        width: 100%;
        height: 100vh;
        font-size: 1.8rem;
        display: flex;
        gap: 2rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .loader-icon {
        width: 5rem;
        height: 5rem;

        animation: rotateIcon infinite 1s ease;
    }

    .product {
        padding: 2rem;
        border: 1px solid var(--color-border-3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        img {
            width: 30rem;
            height: 30rem;
            object-fit: cover;
            object-position: center;
        }
    }

    .btn {
        display: grid;
        place-items: center;
        margin-top: 2rem;

        button {
            padding: 1rem 2rem;
            font-size: 1.8rem;
            border: 1px solid #333;
            background-color: var(--color-bg-3);
            transition: transform 0.2s;
            display: flex;
            align-items: center;
            gap: 0.5rem;

            &:hover {
                transform: translateY(-1px);
            }

            &:disabled {
                pointer-events: none;
                opacity: 0.5;
            }
        }
        &-icon {
            width: 2.2rem;
            height: 2.2rem;
            animation: rotateIcon infinite 1.2s ease;
        }
    }

    @keyframes rotateIcon {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
