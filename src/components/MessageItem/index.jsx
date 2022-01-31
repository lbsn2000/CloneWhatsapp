import React, { useState } from "react";
import * as S from './styles';
import { BiCheck, BiCheckDouble, BiTimeFive, BiDownload } from "react-icons/bi";

export default ({ data, user }) => {

    const messagereadstatus = data.messagereadstatus
    const primeiraMensagemDia = data.primeiraMensagemDia

    const [showModalImage, setShowModalImage] = useState(false);

    return (

        <>
            {showModalImage &&
                <div style={{ backgroundColor: '#000', position: 'absolute' }}>
                    <img src={data.body} alt="" />
                </div>
            }

            {primeiraMensagemDia &&
                <>
                    <S.Line />
                    <S.FirstMessageDate >
                        Hoje
                    </S.FirstMessageDate>
                </>
            }

            <S.MessageLine
                style={{ justifyContent: user.id === data.author ? 'flex-end' : 'flex-start' }}
            >
                <S.MessageItem
                    style={{ backgroundColor: user.id === data.author ? '#16a34a' : '#e5e5e5' }}
                >
                    {data.tipo === 'normal' &&
                        <S.Message
                            style={{
                                color: user.id === data.author ? '#FFF' : '#000',
                                margin: user.id === data.author ? '10px 65px 5px 10px' : '10px 50px 5px 10px'
                            }}
                        >
                            {data.body}
                        </S.Message>
                    }
                    {data.tipo === 'arquivo' &&
                        <S.MessageFile href={data.body}
                            style={{
                                backgroundColor: user.id === data.author ? '#15803d' : '#d4d4d4',
                            }}
                        >
                            <S.Message
                                style={{
                                    color: user.id === data.author ? '#FFF' : '#000',
                                    margin: '5px'
                                }}
                            >
                                {data.body}
                            </S.Message>

                            <BiDownload style={{
                                color: user.id === data.author ? '#FFF' : '#000',
                                width: '30px', height: '30px', margin: '5px'
                            }} />

                        </S.MessageFile>
                    }
                    {data.tipo === 'imagem' &&
                        <div onClick={() => setShowModalImage(true)} style={{ cursor: 'pointer' }}>
                            <S.MessageImage src={data.body} />
                        </div>
                    }

                    <S.MessageInfoArea>

                        <S.MessageDate
                            style={{ color: user.id === data.author ? '#FFF' : '#000' }}
                        >
                            19:00
                        </S.MessageDate>

                        {user.id === data.author &&
                            <S.CheckReadIconArea>
                                {messagereadstatus === 0 &&
                                    <BiTimeFive style={{ width: '12px', height: '12px', margin: '0 2px ', color: '#737373' }} />
                                }
                                {messagereadstatus === 1 &&
                                    <BiCheck style={{ width: '20px', height: '20px', color: '#16a34a' }} />
                                }
                                {messagereadstatus === 2 &&
                                    <BiCheckDouble style={{ width: '20px', height: '20px', color: '#16a34a' }} />
                                }
                                {messagereadstatus === 3 &&
                                    <BiCheckDouble style={{ width: '20px', height: '20px', color: '#2563eb' }} />
                                }

                            </S.CheckReadIconArea>}
                    </S.MessageInfoArea>

                </S.MessageItem>
            </S.MessageLine>
        </>

    )
}