import React, { useState } from "react";
import * as S from './styles';
import { } from "react-icons/md";


// <------ Provisorio -------->

const avatarUnsplah = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'

// <------ Provisorio -------->


export default () => {
    return (
        <S.Container>

            <S.Avatar src={avatarUnsplah} />

            <S.Content>

                <S.MensageContent>
                    <S.Name>Lucas Bernardo</S.Name>
                    <S.LastMessageDate>15:00</S.LastMessageDate>
                </S.MensageContent>

                <S.MensageContent>
                    <S.LastMessageArea>
                        <S.LastMessage>opa iai, tudo bom?</S.LastMessage>
                    </S.LastMessageArea>
                </S.MensageContent>

            </S.Content>

        </S.Container>
    )
}
