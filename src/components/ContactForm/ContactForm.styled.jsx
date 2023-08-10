import { styled } from 'styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 25px;
margin-top: 50px;

input {
   font-family: var(--family);
   border: none;
   outline: none;
   border-bottom: 1px solid #5C5A5D;
   background-color: transparent;
   width: 250px;
   padding-top: 8px;
   font-size: 16px;
   color: #5C5A5D;
   }

   button {
      padding: 10px 8px;
      border-radius: 13px;
      border: none;
      cursor: pointer;
      font-family: var(--family);
font-weight: 400;
font-size: 15px;
transition: background-color 1s; 
   }

   button:hover, button:focus {
      background-color: #8846A4;
      color: #fff;
   }
}
`;
