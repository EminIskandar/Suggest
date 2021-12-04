import styled from "styled-components";

export const Container = styled.div`
    background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);
    height: 137px;
    width: 255px; 
    border-radius: 10px; 
    padding: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    @media (max-width:996px){  
        width: calc(100% / 3 - 6.5px); 
        height: 178px; 
    }

    @media (max-width:596px){   
        width: 100%;
        border-radius: 0;
        height: 72px;
        align-items: center;
    }
`
export const Text = styled.div`

`