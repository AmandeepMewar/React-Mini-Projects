import styled from "styled-components";

export const ErrorStyle = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 10rem;
        letter-spacing: 1rem;
    }

    h2 {
        font-size: 5.2rem;
        letter-spacing: 0.6rem;
    }

    .btn {
        padding: 1rem 2rem;
        font-size: 1.8rem;
        margin-top: 2rem;
        border: 1px solid #333;
        transition: all 0.2s ease;

        &:hover {
            background-color: var(--color-text-2);
            color: var(--color-bg-1);
        }
    }
`;
