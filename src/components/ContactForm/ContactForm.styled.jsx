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
   border-bottom: 1px solid var(--text-color);
   background-color: transparent;
   width: 250px;
   padding-top: 8px;
   font-size: 16px;
   color: var(--text-color);
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
      background-color: var(--hover-button);
      color: #fff;
   }
}
`;
