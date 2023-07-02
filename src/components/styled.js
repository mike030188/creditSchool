import styled from 'styled-components';
import backimg1 from '../assets/images/Photo1.png';
import backimg2 from '../assets/images/Photo.png';

export const Body = styled.div`
background-color: #FCFCFF;
background-image: url(${backimg2});
background-repeat: no-repeat;
background-position: right top;


`

export const Navbar = styled.div`
display: flex;
background-color:transparent;
height: 104px;
align-items: center;


`
export const Container1 = styled.div`
display: flex;
align-items: center;
flex: ${props=>props.left || props.right ? "1" : "2" };
justify-content: ${props=>props.right ? "right" : "left"};

`
export const Logo = styled.img`
height:40px;
width: 203px;
margin-left:320px;

`
export const Menu = styled.div`
color: ${props=>props.black ? "#030F4B" : "#808396"};
font-size: 18px;
font-weight: ${props=>props.black ? "bold" : "500"};
line-height: normal;
margin:30px;

`

export const Button = styled.button`

border-radius: 8px;
border:none;
font-size: 18px;
font-weight: 700;
color: #FCFCFF;
height: 52px;
width: ${props=>props.register ? "154px" : "180px"};
background-color: ${props=>props.register ? "#FD4455" : "#335DFF"};
margin-right: ${props=>props.register ? "320px" : "0"};

`

export const Wrapper1 = styled.div`
background-image: url(${backimg1});
background-repeat: no-repeat;
background-position: right bottom;


height: 920px;

`

export const Backimg = styled.img`

`