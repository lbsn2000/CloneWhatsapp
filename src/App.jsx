import React, { useState } from "react";
import * as S from './AppStyles';
import './Global.css'
import ChatListItem from "./components/ChatListItem";
import { MdOutlineMoreVert, MdSearch } from "react-icons/md";


// <------ Provisorio -------->

const avatarUnsplah = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'

// <------ Provisorio -------->


export default () => {

    const [chatList, setChatList] = useState([{}, {}, {}]);

    return (
        <S.AppWindow>

            <S.HeaderArea>

                <S.HeaderButton>
                    <MdOutlineMoreVert style={{ width: '25px', height: '25px', color: '#737373' }} />
                </S.HeaderButton>

                <S.HeaderAvatar src={avatarUnsplah} />

            </S.HeaderArea>


            <S.Content>

                <S.SideBar>

                    <S.SearchArea>
                        <MdSearch style={{ width: '25px', height: '25px', color: '#737373' }} />
                        <S.SearchInput placeholder={"Procurar uma conversa..."} />
                    </S.SearchArea>

                    <S.ChatList>
                        {chatList.map((item, index) => (
                            <ChatListItem key={index} />
                        ))}
                    </S.ChatList>

                </S.SideBar>

                <S.ChatArea>
                    123
                </S.ChatArea>


            </S.Content>
        </S.AppWindow>
    )
}