import styled from 'styled-components';
import { chrisPainting } from '../images/index'

const Navigation = styled.nav`
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    min-height: 50vh;
    padding: 2rem;`

const NavigationC = styled.nav`
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    padding: 2rem;
    border-radius: 0.6rem;`

const HeroSection = styled.div`
     background-image: url(${ chrisPainting });
     background-size: cover;
     background-position: bottom;
     background-color: #cccccc;
     min-height: 50vh;
`

export { Navigation, HeroSection, NavigationC }