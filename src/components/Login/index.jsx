import React from "react";
import * as S from './styles';

export default () => {
    
    const handleLogin = () => {
        
    }
    
    return(
        <S.Container>
            <S.LoginButton onClick={handleLogin}>Login com Google!</S.LoginButton>
        </S.Container>
    )
}