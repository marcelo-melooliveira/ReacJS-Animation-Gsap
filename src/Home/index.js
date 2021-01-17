import React, {useEffect, useRef, createRef} from 'react';
import { Container, Landing, Logo, NavLinks, BigText, Intro, IntroText, Hide, Slider } from './styles';
import { gsap } from 'gsap';


function Home() {
  const sliderRef = createRef();
  const introRef = createRef();
  const bigtextRef = createRef();

  

  useEffect(()=>{
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".text", { y: "0%", duration: 2, stagger: 0.25 });
    tl.to(sliderRef.current, { y: "-100%", duration: 1, delay: 0.5 });
    tl.to(introRef.current, { y: "-100%", duration: 1.5 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(bigtextRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  }, []);


  return (
    <Container>
      <main>
        <Landing>
          <nav>
            <Logo>Profundo</Logo>
              <NavLinks>
                <li>Home</li>
                <li>Contatos</li>
                <li>Sobre</li>
              </NavLinks>
              <BigText ref={bigtextRef}>Seja Ousado</BigText>
          </nav> 
        </Landing>        
      </main>
      <Intro ref={introRef}>
        <IntroText>
          <Hide>
            <span className="text">Seja inovador</span>
          </Hide>
          <Hide>
            <span className="text">Faça a diferença</span>
          </Hide>
          <Hide>
            <span className="text">Dê seu melhor</span>
          </Hide>
        </IntroText>
      </Intro>
      <Slider ref={sliderRef}/>
    </Container>
    
  );
}

export default Home;
