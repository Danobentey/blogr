import styled from 'styled-components'
import BG from '../../Assets/images/bg-pattern-intro-desktop.svg'



export const FirstSection = styled.section`
margin-top: 5%;
background-image: url(${BG});
background-repeat: no-repeat;
height: 90vh;
display: flex;
justify-content: space-between;

h1 {
    text-align: center;
}

@media screen and (max-width: 768px) {
    display: none;
}
`;



export const SecondSection = styled.section`
margin-top: 5%;
background-image: linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%)), url();
border-top-right-radius: 80px;
border-bottom-left-radius: 80px;
display: flex;
justify-content: space-between;
color: white;
height: 90vh;

div {
    margin-top: 13%;
}

@media screen and (max-width: 768px) {
    display: none;
}
`;

// export const SecondSectionText = styled.div`
// background-image: linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%));
// border-top-right-radius: 50px;
// border-bottom-left-radius: 50px;
// `;



export const ThirdSection = styled.section`
margin-top: 5%;
display: flex;
justify-content: space-between;
height: 90vh;

@media screen and (max-width: 768px) {
    display: none;
}
`;