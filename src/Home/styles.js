import styled from 'styled-components';
import photo from './davi_golias.jpg';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  main {
  font-family: "Heebo", sans-serif;
}
`;

export const Landing = styled.section`
  min-height: 100vh;
  background-image: url(${photo});
  background-size: cover;
  padding: 0rem 5rem;

  nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10vh;
}
`;

export const Logo = styled.h1`
  font-family: "Lobster", cursive;
  font-weight: lighter;
  font-size: 2rem;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  
  li{
    padding-left: 10rem;
    font-size: 1.2rem;
  }
`;

export const BigText = styled.h2`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  font-size: 5rem;
  font-family: "Lobster", cursive;
  color: rgb(61, 61, 61);
`;

export const Intro = styled.div`
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroText = styled.div`
  color: rgb(233, 233, 233);
  font-family: "Heebo", sans-serif;
  font-size: 3rem;
`;

export const Hide = styled.h1`
  background: black;
  overflow: hidden;

  span{
    transform: translateY(100%);
    display: inline-block;
  }
`;

export const Slider = styled.div`
  background: rgb(97, 105, 109);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
`;