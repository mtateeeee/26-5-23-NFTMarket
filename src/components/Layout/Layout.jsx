import Header from "components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "assets/Frame (1).svg"
import MenuItem from 'components/MenuItem';
import category from "assets/category.svg";
import shop from "assets/shop.svg";
import judge from "assets/judge.svg";
import buycrypto from "assets/buy-crypto.svg";
import Icon1 from "assets/Icon (1).svg";
import Icon2 from "assets/Icon (2).svg";
import Icon3 from "assets/Icon (3).svg";
import Icon4 from "assets/Icon (4).svg";
import Icon5 from "assets/Icon (5).svg";
import Frame21 from "assets/Frame 21.svg";
import Frame9 from "assets/Frame9.svg"; 


// import {SideBar} from "components/SideBar"

const LayoutStyled = styled.div`
  background-color: #1c233d;
  min-height: 100vh;
  .right {
    float: right;
    width: 75%;
  }
`;
const ContentStyled = styled.div`
  background-color: aqua;
  margin-top: 64px;
  height: 100%;
`;
const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color:white;
  float: left;
  padding-top: 34.5px;
  width: 25%;
  height: 100vh;
  align-items: center;
  
  
`;

const SlideBarLogo = styled.div`
  display: flex;
`
const SlideBarLogotxt = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
`
const Textt = styled.div`
    display: flex;
    float: left;
    padding-right: 140px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 46px;
    height: 16px;
    left: 32px;
    top: 598px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #27262E;

  
`

const SlideBarLogotxt1 = styled.div`
  width: 94px;
  height: 36px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  font-feature-settings: 'salt' on;
  color: #27262E;

  
`

const SlideBarLogotxt2 = styled.div`
  width: 82px;
  height: 13px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 13px;
  font-feature-settings: 'salt' on;
  color: #7A797D;



`
const Mode= styled.div`
  display: flex;
  justify-content: flex-start;
  
  
`

const Modetxt=styled.div`
  padding-left: 55px;
  width: 45%;
`

const SlideBarLogo1 = styled.div`
  padding-right: 13px;
  align-items: center;
`

const YourBalance = styled.div`
width: 228px;
height: 220px;
background-image:url(${Frame9});
margin-top: 150px;
  
`
const SPACE=styled.div`
  height: 20%;
`




const PrimaryLayout = ({ children }) => {
  const menuItems = [ { menuName: "Market", icon: shop },{ menuName: "Active Bids", icon: judge }];
  const menuItems1 = [{ menuName: "My Portfolio", icon: buycrypto }, { menuName: "Wallet", icon: Icon1 },{ menuName: "Favourites", icon: Icon2 },{ menuName: "History", icon: Icon3 },{ menuName: "Settings", icon: Icon4 }];
  const menuItems2 = [{ menuName: "Light Mode", icon: Icon5 }];
  return (
    <LayoutStyled>
      <SideBarStyled>
        <SlideBarLogo>
          <SlideBarLogo1><img src={logo}></img></SlideBarLogo1>

          <SlideBarLogotxt>
            <SlideBarLogotxt1>
              MyNFT
            </SlideBarLogotxt1>
            <SlideBarLogotxt2>
              NFT Marketplace
            </SlideBarLogotxt2>
          </SlideBarLogotxt>

        </SlideBarLogo>

        {/* <MenuItem title="Menu 1" imageUrl={category} />*/}
        <Link to="/" >
        <MenuItem title="Dashboard" imageUrl={category}/>
        </Link>
        {
          menuItems.map((item) => {
            return <MenuItem title={item.menuName} imageUrl={item.icon}></MenuItem>
          })
        }
        <Textt>
        Profile
        </Textt>
        {
          menuItems1.map((item) => {
            return <MenuItem title={item.menuName} imageUrl={item.icon}></MenuItem>
          })
        }
        <Textt>
        Other
        </Textt>
        <Mode>
        <Modetxt>
        {
          menuItems2.map((item) => {
            return <MenuItem title={item.menuName} imageUrl={item.icon}></MenuItem>
          })
        }
        </Modetxt>
        <img src={Frame21}></img>
        
        </Mode>
        <SPACE></SPACE>
        
        {/* <Link to="/" >
          Dashboard
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/login">
          Login
        </Link> */}
        {/* <SideBar></SideBar> */}
        <YourBalance>
          
        </YourBalance>
      </SideBarStyled>
      <div className="right">
        <Header />
        <ContentStyled>{children}</ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
