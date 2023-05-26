import styled from "styled-components";
import search from "assets/search-normal.svg"
import icon from "assets/Icon.svg"
import img from "assets/Ellipse 3.svg"




const HeaderStyled = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 56px;
  display: flex;
  gap: 160px;
  //justify-content: space-between ;
  background-color: aqua ;
  padding:32px ;
`;

const SearchStyled = styled.div`
  width: 461px;
  height: 56px;
  background-color:white;
  display: flex;
  align-items: center;
  gap: 12px;
  `

const SearchStyled1 = styled.div`
  width: 461px;
  height: 56px;
  display: flex;
  align-items: center;
  `


const SearchStyled11 = styled.div`
  width: 461px;
  height: 56px;
  background-color:white;
  border-radius: 35px;
  display: flex;
  align-items: center;
  gap: 12px;`

const SearchStyled12 = styled.div`
  
  display: flex;
  justify-content: space-between;
  gap:24px;
  padding-right: 50px;
`

const SearchStyled12ico = styled.div`
  background-color: white;
  width : 56px ;
  height: 56px;
  border-radius: 50%;
  align-items: center;
  img{
    padding: 16px;
  }
`


const SearchIco = styled.div`
  padding-left: 16px;
`
const Searchtxt= styled.div`
  width: 280px;
  height: 21px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: flex-end;
  font-feature-settings: 'salt' on;
  color: #B9B8BC;
`

const Headerimg= styled.div`
background-color: white;
  
`
const Header = () => {
  return (
      <HeaderStyled>
        

          <SearchStyled1>
            <SearchStyled11>
              <SearchIco><img src={search}></img></SearchIco>
              <Searchtxt>
              Search Item, Collection and Account...
              </Searchtxt>
            </SearchStyled11>
          </SearchStyled1>

          <SearchStyled1>
            <SearchStyled12>
              <SearchStyled12ico>
                <img src={icon}></img>
              </SearchStyled12ico>
            <img src={img}></img>
            </SearchStyled12>
          </SearchStyled1>
        
      </HeaderStyled>
  );
};

export default Header;
