import React from 'react';
import { styled } from 'styled-components';


const Name = styled.div`
    

`
const StyleinforUser = styled.div`
display: flex;
gap:15px;
align-items: center;
padding-top: 15px;
    
`
const P1=styled.div`
    width: 119px;
    height: 21px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    font-feature-settings: 'salt' on;
    color: #27262E;
`
const P2=styled.div`
    width: 55px;
    height: 16px;

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    font-feature-settings: 'salt' on;


    color: #747475;

    
`
const P3=styled.div`
    text-align: left;
`
const P4=styled.div`
    width: 20px;
    height: 21px;

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;

    display: flex;
    align-items: flex-end;
    font-feature-settings: 'salt' on;


    color: #27262E;

    
`


export const TopUser = ({ index,name, username,imageUrl }) => {
  return (
    <div>
    <StyleinforUser>
      
      <div><P4>{index}</P4></div> {/* Hiển thị số thứ tự */}
      <div><img src={imageUrl}/></div>
      <P3>
        <div><P1>{name}</P1></div>
        <div><P2>{username}</P2></div>
      </P3>
    </StyleinforUser>
    </div>
  );
}

