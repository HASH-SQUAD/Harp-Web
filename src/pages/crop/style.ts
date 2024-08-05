import styled from "styled-components";

/* export const Crop_Container = styled.div `
  padding: 0 20px;  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
` */
// pages/crop/style.ts

export const Crop_Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Crop_Container = styled.div`
  flex: 1;
  position: relative;
  background: #000;
`;

export const Crop_Footer = styled.div`
  padding: 16px;
  background-color: #6200ea;
  text-align: center;

  button {
    padding: 12px 24px;
    background-color: #ffffff;
    border: none;
    border-radius: 8px;
    color: #6200ea;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
`;
