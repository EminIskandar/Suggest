import styled from "styled-components";
import colors from 'color'

export const Content = styled.div`
    width: 275px;
    transform: translateX(275px);
    transition: transform .5s ease-in-out;
    background-color: ${colors.ghostWhite};
    padding: 24px;
`

export const Container = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100vw;
    height: 100vh;
    display: none;
    justify-content: flex-end;
    padding-top: 72px;

    &.open{
        display: flex;

        & ${Content}{
            transform: translateX(0px);
        }
    }

`