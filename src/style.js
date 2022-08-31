import styled from "styled-components";

let Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: red;
  div{
    display: flex;
    background-color: white;
    border-radius: 10px;
    padding: 0 1rem;
    h1{
      font-weight: 600;
    }
  }
  input{
    width: 30rem;
    height: 2.7rem;
    border: none;
    outline: none;
    border-radius: 7px;
  }
  button{
    width: 10rem;
    height: 2.5rem;
    border: none;
    border-radius: 7px;
  }
`
export {Container}