import { styled } from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.h1`
font-family: var(--family);
font-weight: 700;
margin: 80px 0 40px 0;
color: #5C5A5D;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

label {
   display: flex;
flex-direction: column;
gap: 3px;
font-family: var(--family);
font-weight: 400;
font-size: 14px;
}

input {
   border: none;
   outline: none;
   border-bottom: 1px solid #5C5A5D;
   background-color: transparent;
   width: 350px;
   padding-top: 10px;
   font-size: 18px;
   color: #5C5A5D;
   }

   button {
      padding: 15px 13px;
      border-radius: 20px;
      border: none;
      cursor: pointer;
      font-family: var(--family);
font-weight: 400;
font-size: 17px;
transition: background-color 1s; 
   }

   button:hover, button:focus {
      background-color: #8846A4;
      color: #fff;
   }
}
`