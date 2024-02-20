import styled from "styled-components";

export const ModalStyle = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    font-size: 1.6rem;

    .btn {
        padding: 1rem 2rem;
        border: 1px solid #333;
        letter-spacing: 4px;
        text-transform: uppercase;

        &:hover {
            background: var(--color-text-2);
            color: var(--color-text-3);
        }
    }

    .modal {
        position: fixed;
        z-index: 10;
        background-color: var(--color-bg-1);
        box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.15);
        max-width: 50rem;
        width: 95%;
        max-height: 45rem;
        display: flex;
        flex-direction: column;
        padding: 5rem 5rem;
        border-radius: 1rem;
        animation: movedown 0.2s ease-out;

        h2 {
            margin: 1.5rem 0;
            font-size: 2.6rem;
            letter-spacing: 4px;
            font-weight: 500;
            text-transform: uppercase;
        }

        .close {
            position: absolute;
            top: 3rem;
            right: 4rem;
            font-size: 2.5rem;
        }
    }

    .backdrop {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        backdrop-filter: blur(5px);
    }
    .input--field {
        margin: 2rem 0;

        input {
            width: 95%;
            border-bottom: 1.8px solid #aaa;
            padding: 0.8rem;
            margin-bottom: 1rem;
            transition: border 0.1s;

            &:focus {
                border-bottom: 1.8px solid #eee;
            }
        }
    }

    .btn--submit {
        margin-top: 1rem;
    }

    @keyframes movedown {
        0% {
            opacity: 0;
            transform: translateY(-50%);
        }
        90% {
            opacity: 1;
            transform: translateY(5%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
