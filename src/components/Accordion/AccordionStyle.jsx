import styled from "styled-components";

export const AccordionStyle = styled.div`
    max-width: 60rem;
    width: 100%;
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .btn {
        padding: 1rem 2rem;
        font-size: 1.8rem;
        background-color: var(--color-bg-3);
        transition: all 0.1s;
        border: 1px solid #333;

        width: 55%;

        &:active {
            transform: translateY(-1px);
        }
    }

    .accordion {
        width: 95%;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        background: var(--color-bg-3);
    }

    .item {
        border: 1px solid #333;
    }

    .title {
        background-color: var(--color-grey-1);
        box-shadow: 0 3px 4px rgba(255, 255, 255, 0.05);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        cursor: pointer;

        h4 {
            font-size: 1.8rem;
        }

        .icon {
            width: 1.5rem;
            height: 1.5rem;
            display: flex;
            /* flex-direction: column; */
            align-items: center;
            justify-content: center;

            span {
                width: 100%;
                height: 2px;
                /* margin-top: -2px; */
                background-color: var(--color-text-1);
                transition: all 0.3s ease-out;

                &:first-child {
                    /* transform: rotate(-90deg); */
                    margin-right: -2px;
                    transform: rotate(40deg);
                }

                &:last-child {
                    margin-left: -2px;
                    transform: rotate(-40deg);
                }
            }
        }

        &.active {
            .icon span:first-child {
                /* transform: rotate(0deg); */
                transform: rotate(-40deg);
            }

            .icon span:last-child {
                /* transform: rotate(0deg); */
                transform: rotate(40deg);
            }
        }

        & + .content {
            animation: moveDown 0.5s ease-out;

            @keyframes moveDown {
                0% {
                    transform: translateY(-100%);
                    opacity: 0;
                }
                20% {
                    opacity: 0;
                    transform: translateY(-10%);
                }
                100% {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        }
    }

    .content {
        background-color: var(--color-grey-3);
        padding: 1.2rem 2rem;
        font-size: 1.6rem;
    }
`;
