import styled from "styled-components";

export const TabStyle = styled.div`
    max-width: 60rem;
    width: 95%;
    font-size: 1.6rem;
    box-shadow: 0 2px 5px 2px rgba(255, 255, 255, 0.2) inset;
    padding: 2rem;
    color: var(--color-border-2);
    margin: auto 2rem;

    .header {
        display: flex;
        justify-content: space-between;

        border-bottom: 1px solid #333;

        .title {
            padding: 1.2rem 2rem;
            height: 100%;
            font-weight: 700;
            border-bottom: 2px solid transparent;
            transition: all 0.2s;

            &.active {
                color: var(--color-text-2);
                border-bottom: 2px solid var(--color-text-2);
            }
        }
    }

    .data-container {
        padding: 2rem 1rem 1rem;
        line-height: 1.8;
        letter-spacing: 1px;
    }
`;
