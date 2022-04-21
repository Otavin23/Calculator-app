import styled from "styled-components"


export const MainFundo = styled.main`
   width: 450px;
   height: 550px;

` 
export const Container = styled.div`
   max-height: 100%;
   max-width: 385px;
   header{
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .text-logo{
         h1{
            color: white;
            letter-spacing: 1px;
            font-size: 24px;
         }
      }
   }
   .result{
      background:  hsl(224, 36%, 15%);
      width: 100%;
      height: 5rem;
      margin-top: 1rem;
      border-radius: 0.5rem;   
      .container-result{
         border-radius: 0.5rem;
         height: 100%;
         display: flex;
         align-items: center;
         justify-content: end;
         h2{
            margin-right: 2rem;
            color: white;
            font-size: 35px;
         }
      }
      
   }
   .context{
      margin-top: 1rem;
      background: hsl(223, 31%, 20%);
      height:340px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      .container-context{
         width: 350px;
         height: 85%;
         display: flex;
         flex-direction: column;
         div{
            display: flex;
            justify-content: space-between;
         }
      }
   }
`
export const ButtonCalc = styled.button`
   width: 75px;
   height: 45px;
   border: none;
   font-size: 1.7rem;
   margin-bottom: 1rem;
   color:  hsl(221, 14%, 31%);
   background-color: hsl(30, 25%, 89%);
   border-radius: 0.5rem;
   border-bottom: 2px solid  hsl(28, 16%, 65%);
   cursor: pointer;
   box-shadow: 0px 1px 3px solid hsl(28, 16%, 65%);
`
export const ButtonDelReset = styled.button`
   border: none;
   width: 75px;
   height: 45px;
   border-radius: 0.5rem;
   border-bottom: 2px solid  hsl(221, 14%, 31%);
   box-shadow: 0px 1px 3px solid hsl(221, 14%, 31%);
   background: hsl(225, 21%, 49%);
   color: white;
   font-size: 1rem;
   letter-spacing: 1px;
   cursor: pointer;
   text-transform: uppercase;
   `
export const buttonReset = styled.button`
   text-transform: uppercase;
   width: 170px;
   height: 2.8rem;
   border-radius: 0.5rem;
   border: none;
   border-bottom: 2px solid hsl(221,14%,31%);
   background: hsl(225, 21%, 49%);
   color: white;
   font-size: 1rem;
   letter-spacing: 1px;
`
export const ButtonResult = styled.button`
   width: 48%;
   background: hsl(6, 63%, 50%);
   height: 2.8rem;
   border: none;
   border-radius: 0.5rem;
   font-size: 1rem;
   color: white;
   border-bottom: 2px solid hsl(6, 70%, 34%);
`

