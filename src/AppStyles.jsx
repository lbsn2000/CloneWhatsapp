import styled from "styled-components/";

export const AppWindow = styled.div`
    height: 100%;
    min-height: 100%;
    min-width: 1000px;
	display: flex;
	flex-direction: column;
    background-color: #f5f5f5;
`

// <-------- Conten start ------->


export const Content = styled.div`
width: 100%;
display: flex;
`

export const ChatArea = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
`

// <-------- Conten end ------->

// <-------- SideBar start ------->

export const SideBar = styled.div`
    width: 35%;
    max-width: 415px;
    min-width: 300px;
    
    display: flex;  
    flex-direction: column;
    
    border-right: 1px solid #d4d4d4;
`

export const SearchArea = styled.div`
    padding: 10px 15px;
    height: 70px;
    
    background-color: #ffffff;
    border-bottom: 1px solid #d4d4d4;
    
    display: flex;
    align-items: center;
    `
export const SearchInput = styled.input`
    flex: 1;
    border: 0;
    outline: 0;
    background-color: transparent;
    margin-left: 10px;
    font-size: 16px;
    color: #262626;
    `
export const ChatList = styled.div`
    
    height: calc(100vh - 140px);
    background-color: #ffffff;
    overflow-y: auto;
`

// <-------- SideBar end ------->

// <-------- Header start ------->

export const HeaderArea = styled.div`
    height: 70px;
    width: 100%;
    flex: 1;

    display: flex;
    justify-content: end;
    align-items: center;
    
    border-bottom: 1px solid #d4d4d4;
    
    padding: 0 20px;
    `

export const HeaderAvatar = styled.img`
    width: 40px;    
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
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
    
`
// <-------- Header end ------->

