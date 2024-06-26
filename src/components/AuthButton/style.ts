import styled from "styled-components";

export const AuthButton_Container = styled.div<{ background?: string }>`
  display: flex;
  width: 100%;
  height: 52px;
  padding: 0px 12px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background: ${(props) => props.background};
`;

export const AuthButton_Content = styled.p`
  width: 100%;
  text-align: center;
`;
