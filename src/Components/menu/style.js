import styled from "styled-components";

export const PopUp = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  background-color: #f3dbcf;
  margin-top: 8.2vw;
  box-shadow: 0 0 10px #e0c3b9;
  position: absolute;
  z-index: 3;
  margin-left: 50%;
  overflow: hidden;
  @media (min-width: 1000px) {
    display: none;
  }
`;
