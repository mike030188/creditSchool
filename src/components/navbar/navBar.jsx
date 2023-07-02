import React from 'react';
import { Logo, Navbar, Menu, Button, Body, Container1, Wrapper1, Frame, Container2, Container3, Wrapper2, Wrapper3, Title, Mainwrap, Footer, Wrapper5, Wrapper4, Wrapper6, ImgWrapper} from '../styled';
import logo from '../../assets/images/Logo.png';
import smile from '../../assets/images/smile.png';
import support from '../../assets/images/support.png';
import payment from '../../assets/images/payment.png';
import compscience from "../../assets/images/Rectangle6.svg";
import chemEng from '../../assets/images/chemEng.png';
import busEcon from '../../assets/images/busEcon.png';
import icons from '../../assets/images/icons.png';






const NavBar = () => {
  return (
    <Body>
      <Navbar>
      <Container1 left>
        <Logo src={logo}/>
      </Container1>
      <Container1 mid style={{justifyContent:"center"}}>
        <Menu black>Home</Menu>
        <Menu>Campus</Menu>
        <Menu>Education</Menu>
        <Menu>Alumni</Menu>
        <Menu>About</Menu>
      </Container1>
      <Container1 right>
        <Menu black>Login</Menu>
        <Button register>Register</Button>
      </Container1>           
      </Navbar>
      <Wrapper1>
        <h1>A virtual university,<br />
          with real degrees</h1>
        <p>Credischool is an accredited virtual university built<br />
         by top professors from Harvard, Stanford, MIT, and<br />
         many more. The students at Credischool are<br />
         welcome to study at their own pace.</p>
        <Button>Learn more</Button>
        <Frame blue style={{marginLeft:"790px"}}>
          <Container2 left>
            <img src={smile} alt="smile icon"/>
          </Container2>
          <Container2 right>
            <p>Total stipends given</p>
            <h1>$10.508.305</h1>
          </Container2>          
        </Frame>
      </Wrapper1>
      <Wrapper2>
        <Container1 style={{flexDirection:"column"}}>
          <img src={support} alt="support" />
          <h1>24/7 Support</h1>
          <p>Always online to help you</p>
        </Container1>
        <Container1 style={{flexDirection:"column"}}>
          <img src={payment} alt="payment" />
          <h1>Secure Payments</h1>
          <p>Pay your semesters fast & secure</p>
        </Container1>
        <Container1 style={{flexDirection:"column"}}>
          {/* <img src={onlinelect} alt="online lect" /> */}
          <h1>Online Lectures</h1>
          <p>Study in real time, review later</p>
        </Container1>
      </Wrapper2>
      <Title>Explore the departments</Title>
      <Mainwrap>
        <Wrapper3 top>
          <ImgWrapper scr={compscience} alt="Computer Science"/>
          <Container3>
            <h1>Computer Science</h1>
            <p>Our computer science department has<br />
                  multiple learning paths, from Mobile<br />
                  and Web development, to Machine<br />
                  Learning and Data Science.</p>
            <Button>Learn more</Button>
          </Container3>
        </Wrapper3>
        <Wrapper3>
          <Container3>
            <h1>Chemical Engineering</h1>
            <p>All of the students that are enrolled in<br />
              the Chemical Engineering program receive<br />
              a Chemist’s Kit to practice while<br />
              learning from home.</p>
            <Button>Learn more</Button>
          </Container3>
          <img scr={chemEng} alt="Chemical Engineering"/>          
        </Wrapper3>
        <Wrapper3>
          <img scr={busEcon} alt="Business & Economics"/>
          <Container3>
            <h1>Business & Economics</h1>
            <p>The future CEOs and Entrepreneurs have an<br />
                pportunity to study the business climate and<br />
                analyize real world case studies of business<br />
                success stories.</p>
            <Button>Learn more</Button>
          </Container3>
        </Wrapper3>
      </Mainwrap>
      <Title>More than 50.000 students <br /> has enrolled this year</Title>
      <Wrapper4></Wrapper4>
      <Wrapper5>
        <Frame blue >
          <Container2 left>
            <img src={smile} alt="smile icon"/>
          </Container2>
          <Container2 right>
            <p>Students</p>
            <h1>150.000+</h1>
          </Container2>          
        </Frame>
        <Frame red  style={{marginLeft:"150px"}}>
          <Container2 left>
            <img src={smile} alt="smile icon"/>
          </Container2>
          <Container2 right>
            <p>Time Zones</p>
            <h1>10+</h1>
          </Container2>          
        </Frame>
      </Wrapper5>
      <Wrapper6></Wrapper6>
      <Footer>
      <Container1 left>
        <Logo src={logo}/>
      </Container1>
      <Container1 mid style={{paddingLeft:"200px"}}>
        <Menu black>Home</Menu>
        <Menu>Campus</Menu>
        <Menu>Education</Menu>
        <Menu>Alumni</Menu>
        <Menu>About</Menu>
      </Container1>
      <Container1 right style={{marginRight:"320px"}}>
        <img src={icons} alt="icons"/>
      </Container1>           
      </Footer>
    </Body>
     
    
    
  )
}

export default NavBar