import React, { useState } from "react";
import * as S from './styles';
import { } from "react-icons/md";

// <------ Provisorio -------->

const avatarUnsplah = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'

// <------ Provisorio -------->


export default ({onClick, active, data}) => {

    console.log(active)

    return (
        <S.Container onClick={onClick} active={active} >

            <S.Avatar src={`${data.avatar}/?${data.title}`} />

            <S.Content>

                <S.MensageContent>
                    <S.Name>{data.title}</S.Name>
                    <S.LastMessageDate>15:00</S.LastMessageDate>
                </S.MensageContent>

                <S.MensageContent>
                    <S.LastMessageArea>
                        <S.LastMessage>opa iai, tudo bom? iai cara blz? eu peguei covid, então não vou</S.LastMessage>
                    </S.LastMessageArea>
                </S.MensageContent>

            </S.Content>

        </S.Container>
    )
}
