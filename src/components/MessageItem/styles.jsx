import styled from "styled-components/";

export const MessageLine = styled.div`
    margin: 5px;
    display: flex;
`
export const MessageItem = styled.div`
    background-color: #e5e5e5;
    max-width: 70%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`
export const Message = styled.span`
    font-size: 14px;
    font-weight: 500;
`

export const MessageFile = styled.a`
    border-radius: 10px;
    padding: 5px;
    margin: 5px 5px 15px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
`

export const MessageImage = styled.img`
    max-width: 500px;
    max-height: 250px;
    padding: 5px 5px 15px 5px;
    border-radius: 10px;
`

export const MessageInfoArea = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 5px;
    text-align: right;
    height: 15px;
    margin-top: -10px;
    margin-bottom: 4px;
`

export const MessageDate = styled.span`
    font-size: 12px;
    color: #737373;
    margin: 0 2px;
`

export const CheckReadIconArea = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px; 
    width: 18px;
    height: 18px;
    margin: 2px;
`

export const FirstMessage = styled.div`
    
`

export const FirstMessageDate = styled.div`
    align-self: center;
    margin-top: -20px;
    padding: 10px;
    background-color: #FFF;
    border-radius: 10px;   
    color: #a3a3a3;
`

export const Line = styled.div`
    width: 100%;
    border: solid 1px #e5e5e5;
    background-color: #e5e5e5;
    margin-top: 20px;
`