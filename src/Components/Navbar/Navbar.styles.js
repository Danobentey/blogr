import styled, {css} from 'styled-components'


export const Wrapper = styled.div`
// background: hsl(353, 100%, 62%);
background-image: url(../../Assets/images/bg-pattern-intro-desktop.svg);
height: 90vh;
`;



export const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const LogoAccordion = styled.div`
display: flex;
flex-directiom: row;
justify-content: space-between;
align-items: center;
`;



export const NavLogo = styled.div`

& > img {
    margin-left: 18px;
}
`;



export const NavAccordion = styled.div`
display: flex;
max-width: 600px;
`;

export const CTA = styled.div`
display: flex;
flex-direction: row;
`;


export const Button = styled.button`
display: inline-block;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 7rem;
background: transparent;
color: white;
border: transparent;
cursor: pointer;

${props => props.primary && css`
    background: white;
    color: hsl(355, 100%, 74%);
    border-radius: 15px;

    :hover {
        background: hsl(355, 100%, 74%);
        color: hsl(0, 0%, 100%);
    }
  `}
`;

export const Intro = styled.div`
display: block;
align-items: center;
`


export const Title = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
cursor: pointer;
padding: 1rem;
color: #fff;
`

export const Content = styled.div`
padding: 1rem;
color: #fff;
display: block;
text-align: center;
max-width: 50px;
`

