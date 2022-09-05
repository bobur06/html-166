import styled from "styled-components";

const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  .carousel-root{
    margin-top: 30px;
    width: 80%
    ;
    height: fit-content;

    .control-arrow{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 50px;
      border-radius: 27px;
      margin-top: 50%;
      ::before{
        margin: 0;
      }
    }
    .thumbs-wrapper{
      display: none;
    }
  }
`
const ImgWrapper = styled.div`
  img{
    width: 200px;
    height: 650px;
  }
`
export { Main, ImgWrapper }