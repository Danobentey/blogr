import styled, {css} from 'styled-components'


export const Wrapper = styled.div`
background-image: linear-gradient(to right, rgba(255, 143, 112, 0.9), rgba(255, 61, 84, 1));
border-bottom-left-radius: 50px;
height: 80vh;
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

${props => props.secondary && css`
    border: 1px solid white;
    border-radius: 15px;

    :hover {
        background: white;
        color: hsl(355, 100%, 74%);
    }
  `}
`;




export const Intro = styled.div`

h1, p {
    color: white;
    text-align: center;
}

h1 {
    margin-top: 10%;
    font-family: 'Overpass', sans-serif;
    font-weight: 700;
    font-size: 50px;
}

p {
    font-size: 16px;
}

& > div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 10%;
}

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

