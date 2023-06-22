import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>

      <Logo src ='/images/logo.svg' />
      <NavMenu>
        <a>
          <img src='/images/home-icon.svg'/> 
           <span>HOME</span>
        </a>
        <a>
          <img src='/images/search-icon.svg'/> 
           <span>SEARCH</span>
        </a>
        <a>
          <img src='/images/watchlist-icon.svg'/> 
           <span>WATCHLIST</span>
        </a>
        <a>
          <img src='/images/original-icon.svg'/> 
           <span>ORIGINALS</span>
        </a>
        <a>
          <img src='/images/movie-icon.svg'/> 
           <span>MOVIES</span>
        </a>
        <a>
          <img src='/images/series-icon.svg'/> 
           <span>SERIES</span>
        </a>
      </NavMenu>
       <UserImg src='/images/profilePic.png' />
    </Nav>
  )
}

export default Header;

 //we are creating a div using js and styled component
const Nav=styled.nav` 
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding: 0 36px;
overflow-x:hidden;

`          
const Logo= styled.img`
width:80px;

`

const NavMenu= styled.div`
display:flex;
flex: 1;
margin-left:24px;
align-items:center;
a {
  display:flex;
  padding:0 12px;
  cursor:pointer;

// we can do nesting of styling of elements in styled components
img {
  height:20px;
}
span {
font-size:13px;
letter-spacing:1.42px;
position:relative;

//&after created a div just after the span 
&:after{
  content:"";
  height: 2px;
  background:white;
  position:absolute;
  left:0;
  right:0;
  bottom: -6px;
  opacity:0;
  transform-origin: left center;
  transform : scaleX(0);
  transition:all 250ms cubic-bezier(.17,.67,.87,.46) 0s;
}
}
&:hover{
  span:after{
    transform: scaleX(1);
    opacity:1;
  }
}
}
`
const UserImg=styled.img`
height :40px;
width:40px;
cursor:pointer;

`