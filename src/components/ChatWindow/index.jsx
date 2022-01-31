import React, { useEffect, useRef, useState } from "react";
import * as S from './styles';
import { MdOutlineMoreVert, MdSend, MdEmojiEmotions, MdOutlineClose } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import MessageItem from "../MessageItem";

export default ({ data, user }) => {

    const body = useRef()

    const [showEmoji, setShowEmoji] = useState(false);
    const [textMessage, setTextMessage] = useState('')
    const [showScrollEndButton, setShowScrollEndButton] = useState(false);

    const [messageList, setMessageList] = useState([
        {primeiraMensagemDia: false,tipo: 'normal', author: 1234, body: 'iai blz?', messagereadstatus: 0 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 1234, body: 'eu to joia!', messagereadstatus: 1 },
        {primeiraMensagemDia: true,tipo: 'normal', author: 1234, body: 'e tu mano?', messagereadstatus: 2 },
        {primeiraMensagemDia: false,tipo: 'arquivo', author: 123, body: 'erosoft.exe', messagereadstatus: 3 },
        {primeiraMensagemDia: false,tipo: 'arquivo', author: 1234, body: 'anydeskanydeskanydeskanydeskanydeskanydeskanydeskanydeskanydeskanydeskanydeskanydesk.exe', messagereadstatus: 3 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 123, body: 'iai blz?', messagereadstatus: 0 },
        {primeiraMensagemDia: false,tipo: 'imagem', author: 123, body: 'https://images.unsplash.com/photo-1640622304896-2af07ccb1c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', messagereadstatus: 1 },
        {primeiraMensagemDia: false,tipo: 'imagem', author: 1234, body: 'https://images.unsplash.com/photo-1640622304896-2af07ccb1c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', messagereadstatus: 1 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 123, body: 'e tu mano?', messagereadstatus: 2 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 1234, body: 'e tu mano?', messagereadstatus: 2 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 1234, body: 'to bão', messagereadstatus: 3 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 1234, body: 'to bão to bãoto bãoto bãoto bãoto bãoto bãoto bãovto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bão', messagereadstatus: 3 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 123, body: 'iai blz?', messagereadstatus: 0 },
        {primeiraMensagemDia: false,tipo: 'imagem', author: 123, body: 'https://images.unsplash.com/photo-1640622304896-2af07ccb1c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', messagereadstatus: 1 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 123, body: 'e tu mano?', messagereadstatus: 2 },
        {primeiraMensagemDia: true,tipo: 'normal', author: 1234, body: 'e tu mano?', messagereadstatus: 2 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 1234, body: 'to bão', messagereadstatus: 3 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 1234, body: 'to bão to bãoto bãoto bãoto bãoto bãoto bãoto bãovto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bão', messagereadstatus: 3 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 123, body: 'iai blz?', messagereadstatus: 0 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 123, body: 'eu to joia!', messagereadstatus: 1 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 123, body: 'e tu mano?', messagereadstatus: 2 },
        {primeiraMensagemDia: false,tipo: 'imagem', author: 123, body: 'https://images.unsplash.com/photo-1643474810817-a16085336cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', messagereadstatus: 3 },
        {primeiraMensagemDia: false,tipo: 'imagem', author: 1234, body: 'https://images.unsplash.com/photo-1643474810817-a16085336cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', messagereadstatus: 3 },
        {primeiraMensagemDia: false,tipo: 'normal', author: 123, body: 'to bão to bãoto bãoto bãoto bãoto bãoto bãoto bãovto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bãoto bão', messagereadstatus: 3 }

    ]);

    const handleEmojiClick = (event, emojiObjetc) => {
        setTextMessage(textMessage + emojiObjetc.emoji)
    }

    const handleSendClick = () => {

    }

    useEffect(() => {
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
            setShowScrollEndButton(true)
        }
    }, [messageList, showEmoji]);


    return (
        <S.Container>

            <S.ChatHeader>
                <S.HeaderAvatar src={`${data.avatar}/?${data.title}`} />

                <S.HeaderTextArea>

                    <S.HeaderName>
                        {data.title}
                    </S.HeaderName>
                    <S.HeaderStatus>
                        online
                    </S.HeaderStatus>

                </S.HeaderTextArea>

                <S.HeaderButton>
                    <MdOutlineMoreVert style={{ width: '25px', height: '25px', color: '#16a34a' }} />
                </S.HeaderButton>

            </S.ChatHeader>

            <S.ChatContent ref={body}>
                <S.ChatMessages>
                    {messageList.map((item, index) => (
                        <MessageItem
                            key={index}
                            data={item}
                            user={user}
                            index={index}
                        />
                    ))
                    }
                </S.ChatMessages>

                <S.EmojiPickerArea style={{ height: showEmoji ? '250px' : 0 }}>
                    <EmojiPicker
                        disableSearchBar={true}
                        onEmojiClick={handleEmojiClick}

                    />
                </S.EmojiPickerArea>
            </S.ChatContent>


            <S.ChatFooter>

                {showEmoji &&
                    <S.FooterButton onClick={() => setShowEmoji(false)}>
                        <MdOutlineClose style={{ width: '30px', height: '30px', color: '#16a34a' }} />
                    </S.FooterButton>
                }

                {!showEmoji &&
                    <S.FooterButton onClick={() => setShowEmoji(true)}>
                        <MdEmojiEmotions style={{ width: '30px', height: '30px', color: '#16a34a' }} />
                    </S.FooterButton>
                }


                <S.FooterInput
                    placeholder="Digite a mensagem aqui..."
                    type={'text'}
                    value={textMessage}
                    onChange={(event) => setTextMessage(event.target.value)}
                />

                <S.SendButton onClick={handleSendClick}>
                    <MdSend style={{ width: '30px', height: '30px', marginLeft: '2px', color: '#FFFFFF' }} />
                </S.SendButton>

            </S.ChatFooter>
        </S.Container>
    )
}