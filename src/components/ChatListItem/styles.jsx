import styled from "styled-components/";

export const Container = styled.div`
    height: 70px;

    display: flex;
    align-items: center;

    border-bottom: 1px solid #d4d4d4;

    cursor: pointer;
`
export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 20px;
    border-radius: 50%;
`
export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 15px;
    margin-left: 15px;
`
export const MensageContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Name = styled.text`
    font-size: 18px;
    color: #262626;
`
export const LastMessageDate = styled.text`
    font-size: 12px;
    color: #737373;
`
export const LastMessageArea = styled.div`
    font-size: 14px;
    color: #737373;
    display: flex;
    width: 100%;
`
export const LastMessage = styled.p`
    margin: 0;
`
