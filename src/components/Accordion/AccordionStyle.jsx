import styled from "styled-components";

export const AccordionStyle = styled.div`
    max-width: 60rem;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: var(--color-bg-3);

    .btn {
        padding: 1rem 2rem;
        font-size: 1.6rem;
        background-color: var(--color-bg-2);
        transition: transform .1s;

        &:active {
            transform: translateY(-1px);
        }
    }

    .accordion {
        width: 100%;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    }

    .item {
        border: 1px solid var(--color-border-3);
    }

    .title {
        background-color: var(--color-grey-1);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        cursor: pointer;

        h3 {
            font-size: 1.6rem;
        }

        .icon {
            width: 1.5rem;
            height: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            span {
                width: 100%;
                height: 2px;
                margin-top: -2px;
                background-color: var(--color-text-2);

                &:first-child {
                    transform: rotate(-90deg);
                    transition: all 0.3s ease-out;
                }
            }
        }

        &.active {
            .icon span:first-child {
                transform: rotate(0deg);
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
        font-size: 1.4rem;
    }
`;
