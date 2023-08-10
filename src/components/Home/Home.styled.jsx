import { styled } from "styled-components";

export const Title = styled.h1`
font-family: var(--family);
font-weight: 700;
font-size: 40px;
margin: 80px 0 40px 0;
color: #5C5A5D;
opacity: 0;
   animation: fadeIn 1s ease-in-out forwards;

@keyframes fadeIn {
   from {
     opacity: 0;
     transform: translateY(20px);
   }
   to {
     opacity: 1;
     transform: translateY(0);
   }
 }

   
}
`

export const Container = styled.div`
display: flex;
justify-content: center;
margin: 100px 0 0 0;
`