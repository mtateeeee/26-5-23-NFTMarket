import styled from "styled-components";
import Ethereum1 from "assets/Ethereum1.svg"

const CardNFTStyled=styled.div`
padding: 10px;
display: flex;

.Cardimg{
    width: 324px;
    height: 196px;
    //background-image : url(${props => props.img});
    
}
.time{
    //position: absolute;
    //top:1200px;

}
    
`

const Name=styled.div`
    display: flex;
    padding-top: 35px;
    padding-bottom: 15px;
    justify-content: space-between;
    align-items: center;
`

const P1=styled.div`

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 31px;
font-feature-settings: 'salt' on;
color: #27262E;
    
`

const P2=styled.div`

left: 247px;
top: 240px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
text-align: right;
font-feature-settings: 'salt' on;
    
`
const IMG=styled.div`
    display: flex;
    gap:10px;
    align-items: center;
    
`
const BRAND=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
`
const P3=styled.div`

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
font-feature-settings: 'salt' on;
color: #747475;
    
`
const P4=styled.div`
width: 89px;
height: 21px;
left: 24px;
top: 319px;
padding-left: 10px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;
/* identical to box height */

display: flex;
align-items: flex-end;
font-feature-settings: 'salt' on;
    
`
const PRICE=styled.div`
    display: flex;
    gap: 5px;
    
`
const P5=styled.div`

height: 21px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;

display: flex;
align-items: flex-end;
text-align: right;
font-feature-settings: 'salt' on;
color: black;

    
`
const P6=styled.div`

height: 21px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;

display: flex;
align-items: flex-end;
text-align: right;
font-feature-settings: 'salt' on;
color: #747475;
    
`

export const CardNFT = ({img,time,namecard,like,avt,username,brand,price}) =>{
    return(
        <div>
        <CardNFTStyled>
            
            <div>
            <div className="Cardimg">
            <img src={img}/>
            <div className="time"><img src={time}/></div>
            </div>
            <Name>
                <div><P1>{namecard}</P1></div>
                <div><P2>{like}</P2></div>
            </Name>
            <IMG>
            <P3><img src={avt}/></P3>
            <P3>{username}</P3>
            </IMG>
            <BRAND>
            <P4>{brand}</P4>
            <PRICE>
                <img src={Ethereum1}/>
                <P5>
                {price}
                </P5>
                <P6>ETH</P6>
            </PRICE>
            </BRAND>
            
            </div>
        
        </CardNFTStyled>
        </div>


    );
}