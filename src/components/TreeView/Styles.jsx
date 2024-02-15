import styled from "styled-components";

export const Sidebar = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;

    .sidebar-icon {
        position: absolute;
        top: 3rem;
        right: 3rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        cursor: pointer;

        span {
            width: 3rem;
            height: 2px;
            background-color: #fff;
            transition: transform 0.2s;
        }

        &.s-active {
            span:first-child {
                margin-top: 1rem;
                transform: rotate(-45deg);
            }

            span:nth-child(2) {
                visibility: hidden;
            }

            span:last-child {
                margin-top: -2rem;
                transform: rotate(45deg);
            }
        }
    }
`;

export const TreeViewStyle = styled.div`
    height: 100%;
    max-width: 35rem;
    width: 80%;
    background-color: var(--color-bg-3);
    position: relative;
    transform: translateX(-100%);
    transition: transform 0.4s ease;

    .container {
        width: 85%;
        position: absolute;
        top: 20%;
    }

    &.show {
        box-shadow: 0 3px 5px 5px rgba(0, 0, 0, 0.3);
        transform: translateX(0);
    }
`;

export const MenuListStyle = styled.ul`
    width: 80%;
    margin-left: auto;
`;

export const MenuItemStyle = styled.li`
    padding-top: 0.6rem;
    list-style: disc;
    cursor: pointer;
    user-select: none;

    p {
        font-size: 1.6rem;
        padding-left: 0.4rem;
    }

    .menu-item-container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .menu-icon {
            span {
                display: flex;
                width: 1.2rem;
                height: 2px;
                background-color: #fff;
                transition: transform 0.2s;

                &:last-child {
                    transform: rotate(90deg);
                    margin-top: -2px;
                }
            }
        }

        &.active {
            .menu-icon span:last-child {
                transform: rotate(180deg);
            }
        }
    }
`;
