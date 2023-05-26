import styled from 'styled-components';
//import imageUrl from "assets/category.svg"

const StyledMenuItem = styled.div`
    display: flex;
    padding-left: 32px;
    gap: 16px;
    
    .menu-title{
        width: 178px;
        height: 21px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        font-feature-settings: 'salt' on;
        color: #7A797D;


    }

    .menu{
        
    }
    
`

export const MenuItem = ({ title, imageUrl }) => {
    return (
      <div className="menu">
        <StyledMenuItem>
        <img src={imageUrl} alt="Menu" />
        <div className="menu-content">
          <h1 className="menu-title">{title}</h1>
        </div>
        </StyledMenuItem>
      </div>
    );
  };
  
