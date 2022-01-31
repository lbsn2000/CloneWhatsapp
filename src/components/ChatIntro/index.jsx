import React, { useState } from "react";
import * as S from './styles';
import { } from "react-icons/md";

// <------ Provisorio -------->

const imagem = 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

// <------ Provisorio -------->

export default () => {
    return (
        <S.Container>
            <S.Imagem src={imagem} alt="" />
            <S.Title>Escolha uma conversa e inicie um chat!</S.Title>
        </S.Container>
    )
}