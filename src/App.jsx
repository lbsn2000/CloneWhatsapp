import React, { useState } from "react";
import * as S from './AppStyles';
import './Global.css'
import { MdOutlineMoreVert, MdSearch } from "react-icons/md";
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";


// <------ Provisorio -------->

const avatarUnsplah = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
const unsplashRandom = 'https://source.unsplash.com/1080x1080/?people'

// <------ Provisorio -------->


export default () => {

    const [user, setUser] = useState({
        id: 1234,
        name: 'Lucas',
        avatar: avatarUnsplah
    });

    const [chatList, setChatList] = useState([
        {chatID: 1, title: 'Lucas', avatar: unsplashRandom },
        {chatID: 2, title: 'Guilerme', avatar: unsplashRandom },
        {chatID: 3, title: 'Emerson', avatar: unsplashRandom },
        {chatID: 4, title: 'Bruno', avatar: unsplashRandom },
        {chatID: 5, title: 'Adir', avatar: unsplashRandom },
        {chatID: 6, title: 'Kelly', avatar: unsplashRandom },
        {chatID: 7, title: 'Fulano', avatar: unsplashRandom },
        {chatID: 8, title: 'Sicrano', avatar: unsplashRandom },
        {chatID: 9, title: 'Beltrano', avatar: unsplashRandom },
        {chatID: 10, title: 'Marcano', avatar: unsplashRandom },
        {chatID: 11, title: 'Paulano', avatar: unsplashRandom },
        {chatID: 12, title: 'Predrano', avatar: unsplashRandom },
        {chatID: 13, title: 'Lucacu', avatar: unsplashRandom },
    ]);
    const [activeChat, setActiveChat] = useState({});

    return (
        <S.AppWindow id="windows">

            <S.HeaderArea id="header">

                <S.HeaderButton>
                    <MdOutlineMoreVert style={{ width: '25px', height: '25px', color: '#16a34a' }} />
                </S.HeaderButton>

                <S.HeaderAvatar src={user.avatar} />

            </S.HeaderArea>


            <S.Content id="content">

                <S.SideBar>

                    <S.SearchArea>
                        <MdSearch style={{ width: '25px', height: '25px', color: '#16a34a' }} />
                        <S.SearchInput placeholder={"Procurar uma conversa..."} />
                    </S.SearchArea>

                    <S.ChatList>
                        {chatList.map((item, index) => (
                            <ChatListItem
                                key={index}
                                data={item}
                                active={activeChat.chatID === chatList[index].chatID}
                                onClick={() => setActiveChat(chatList[index])}
                            />
                        ))}
                    </S.ChatList>

                </S.SideBar>

                <S.ChatArea>
                    {activeChat.chatID !== undefined &&
                        <ChatWindow data={activeChat} user={user} />
                    }
                    {activeChat.chatID === undefined &&
                        <ChatIntro />
                    }
                </S.ChatArea>
            </S.Content>
        </S.AppWindow>
    )
}