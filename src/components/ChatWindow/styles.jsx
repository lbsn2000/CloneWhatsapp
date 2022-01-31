import styled from "styled-components/";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23F5F5F4' stroke-width='4.5'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23F5F5F4'%3E%3Ccircle cx='769' cy='229' r='6'/%3E%3Ccircle cx='539' cy='269' r='6'/%3E%3Ccircle cx='603' cy='493' r='6'/%3E%3Ccircle cx='731' cy='737' r='6'/%3E%3Ccircle cx='520' cy='660' r='6'/%3E%3Ccircle cx='309' cy='538' r='6'/%3E%3Ccircle cx='295' cy='764' r='6'/%3E%3Ccircle cx='40' cy='599' r='6'/%3E%3Ccircle cx='102' cy='382' r='6'/%3E%3Ccircle cx='127' cy='80' r='6'/%3E%3Ccircle cx='370' cy='105' r='6'/%3E%3Ccircle cx='578' cy='42' r='6'/%3E%3Ccircle cx='237' cy='261' r='6'/%3E%3Ccircle cx='390' cy='382' r='6'/%3E%3C/g%3E%3C/svg%3E");
`

export const ChatHeader = styled.div`
    width: 100%;
    height: 70px;
    
    display: flex;
    align-items: center;

    border-bottom: 1px solid #d4d4d4;
    background-color: #FFFFFF;
`

export const HeaderTextArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    flex: 1;
`

export const HeaderName = styled.span`
    font-size: 20px;
    `

export const HeaderStatus = styled.span`
    font-size: 14px;
    color: #737373;
    `

export const HeaderButton = styled.div`
        width: 30px;
        height: 30px;
        border-radius: 50%;
        
        margin: 0 10px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        cursor: pointer;
        
        &:hover {
            background-color: #f0fdf4;
        }

        float: right;
        
    `

export const HeaderAvatar = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 20px;
    border-radius: 50%;

    -webkit-box-shadow: 1px 2px 2px 1px #00000045;
    -moz-box-shadow: 1px 1px 5px 1px #00000045;
    box-shadow: 1px 1px 5px 1px #00000045;
`

export const ChatMessages = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const ChatContent = styled.div`
    height: calc(100vh - 210px);
    overflow-y: scroll;
`

export const ChatFooter = styled.div`
      
     width: 100%;
    height: 70px;
    
    display: flex;
    align-items: center;

    border-top: 1px solid #d4d4d4;
    background-color: #FFFFFF;
`


export const FooterButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
    margin: 0 5vh;

    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    
    &:hover {
        background-color: #f0fdf4;
    }
`

export const FooterInput = styled.input`
    flex: 1;
    background-color: #f0fdf4;
    border: none;
    outline: none;
    height: 50px;
    border-radius: 10px;
    padding: 0 20px;
    font-size: 16px;
`

export const SendButton = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;

    background-color: #16a34a;
    cursor: pointer;

    margin: 0 5vh;

    -webkit-box-shadow: 1px 2px 2px 1px #00000045;
    -moz-box-shadow: 1px 1px 5px 1px #00000045;
    box-shadow: 1px 1px 5px 1px #00000045;
`

export const EmojiPickerArea = styled.div`
    overflow-y: hidden;
    transition: all ease 0.3;

    & > aside {
        width: auto;
        margin-bottom: 70px;
        border-radius: 0;
    } 

`