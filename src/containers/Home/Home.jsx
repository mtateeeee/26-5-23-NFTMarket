import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import { PrimaryLayout } from "components/Layout";
import Rectangle13 from "assets/Rectangle13.svg"
import { Button } from "components/Button";
import TopUser from "components/TopUser";
import Ellipse61 from "assets/Ellipse6(1).svg"
import Ellipse62 from "assets/Ellipse6(2).svg"
import Ellipse63 from "assets/Ellipse6(3).svg"
import Ellipse64 from "assets/Ellipse6(4).svg"
import Ellipse65 from "assets/Ellipse6(5).svg"
import Ellipse66 from "assets/Ellipse6(6).svg"
import CardNFT from "components/CardNFT"
import Rectangle8 from "assets/Rectangle8.svg"
import Frame42 from "assets/Frame42.svg"
import Rectangle9 from "assets/Rectangle9.svg"
import Rectangle81 from "assets/Rectangle8(1).svg"


const AppWrapper = styled.div`
  text-align: center;
  height: 470px;
  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262e;
  }
  .card-wrapper {
    width: 350px;
    padding-top: 0px; 
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .card-wrapper1 {
    width: 350px;
    padding-top: 60px;
    display: flex;
    gap: 20px;
    /* flex-wrap: wrap; */
  }

  .App-header{
    display: flex;
  }
  
  .card-wrapper{
    display: flex;
  }

  .userinfor{
    display: flex;
    flex-direction: column;
    width: 315px;
    height: 450px;
    margin-top: 30px;
    background-color: white;
    border-radius: 16px;
    align-items: center;
  }
  .toptxt{
    display: flex;
    padding-top: 15px;
    gap: 90px;
  }
  .rectangle{
    
  }
`;

const Rectangle = styled.div`
  width: 684px;
  height:354px;
  margin-left: 32px;
  border-radius: 12px;
  background-image:url(${Rectangle13});
`
const Rectangletxt = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  width: 536px;
  height: 130px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  text-align: left;
  .p{
    padding-top: 77px;
    
  }
  
`
const Rectanglebtn = styled.div`
  display: flex;
  gap:12px;
`
const IMGNFT = styled.div`
  display: flex;
  width: 735px;
  flex-wrap: wrap;
  flex-direction: row;

`
const TREND = styled.div`
  display: flex;
  padding-left: 32px;
  padding-bottom: 30px;
  gap: 160px;
`
const TREND1 = styled.div`
  display: flex;
  gap: 15px;
`
const P1 = styled.div`
  font-family: 'DM Sans';
  width: 211px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  font-feature-settings: 'salt' on;
  color: #27262E;
  
`
const P2 = styled.div`
display: flex;
width: 50px;
height: 28px;
background: rgba(84, 41, 255, 0.1);
border-radius: 30px;
padding-left: 30px;
align-items: center;
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #5429FF;

  
`
const P3=styled.div`
display: flex;
text-align: center;
padding-top: 5px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #7A797D;
align-items: center;

  
`
const P4=styled.div`
height: 31px;
left: 1084px;
top: 538px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 31px;
font-feature-settings: 'salt' on;
color: #27262E;
  
`

const P5=styled.div`
  left: 1333px;
top: 546px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
text-align: right;
font-feature-settings: 'salt' on;
color: #747475;
`
const Home = () => {
  return (
    <PrimaryLayout>
      <div className="Layout">
        <div>
          <AppWrapper>
            <header className="App-header">
              {/* <div className="card-wrapper"> */}
                <div className="card-wrapper1">
                <div>
                
                <Rectangle>
                  <Rectangletxt>
                    <p>
                    Discover, Create and Sell Your Own NFT.
                    </p>
                    <Rectanglebtn>
                    <Button>Discover</Button>
                    {/* <Button textColor="white" borderColor="#5429FF" border="10px" borderStyle="solid">Click me</Button> */}
                    <Button>Create</Button>
                    </Rectanglebtn>
                  </Rectangletxt>
                </Rectangle>
                
                </div>
                <div>
                  
                  <div className="card-wrapper">
                  <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
                  <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
                  <Card title={"Revenue"} amount="4.02" percent={12.3}></Card>
                  <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
                  
                  <div className="userinfor">
                  <div className="toptxt">
                    <P4>
                    Top Creator

                    </P4>
                    <P5>
                    See All

                    </P5>
                  </div>
                  <TopUser index={"1."} name="Michael Jordan" imageUrl={Ellipse61} username="@jordan_"></TopUser>
                  <TopUser index={"2."} name="John Tibao" imageUrl={Ellipse62} username="@johnti60"></TopUser>
                  <TopUser index={"3."} name="Teressa" imageUrl={Ellipse63} username="@teressa Jordan"></TopUser>
                  <TopUser index={"4."} name="Johan Hawn" imageUrl={Ellipse64} username="@j_hawn"></TopUser>
                  <TopUser index={"5."} name="Maria Alisson" imageUrl={Ellipse65} username="@m_alisson"></TopUser>
                  <TopUser index={"6."} name="Sam Erricson" imageUrl={Ellipse66} username="@erricsonsam"></TopUser>
                  </div>
                  
                  </div>
                </div>
                </div>
              {/* </div> */}
              
              
            </header>
            
            
          </AppWrapper>
          <TREND>
            <P1>
            Trending Auctions

            </P1>

            <TREND1>
              <div>
                <P2>Art</P2> 

              </div>
              <div>
                <P3>Music</P3>
                

              </div>
              <div>
                <P3>Collectibles</P3>
              </div>
              <div>
                <P3>Utility</P3>


              </div>
            </TREND1>
          </TREND>

          <IMGNFT>
          <CardNFT img ={Rectangle8}  time={Frame42}  namecard="Ape In Love"  like="21,5K Likes"  avt={Ellipse61} username="@jordan_"  brand="Current Bid"  price="9.12" ></CardNFT>
          <CardNFT img ={Rectangle9}  time={Frame42}  namecard="Smilling Ape"  like="21,5K Likes"  avt={Ellipse63} username="@teressa Jordan"  brand="Current Bid"  price="8.4" ></CardNFT>
          <CardNFT img ={Rectangle9}  time={Frame42}  namecard="Ape In Love"  like="21,5K Likes"  avt={Ellipse66} username="@erricsonsam"  brand="Current Bid"  price="7.5" ></CardNFT>
          <CardNFT img ={Rectangle8}  time={Frame42}  namecard="Smilling Ape"  like="21,5K Likes"  avt={Ellipse65} username="@erricsonsam"  brand="Current Bid"  price="5.6" ></CardNFT>
      
          </IMGNFT>
          
        </div>
        
      </div>
    </PrimaryLayout>
  );
};
export default Home;
