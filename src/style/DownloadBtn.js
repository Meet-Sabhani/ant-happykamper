import styled from "styled-components";
import { Theme } from "./Them";

export const DownloadBtn = styled.button`
  color: ${Theme.color.white};
  background-color: ${Theme.color.pink};
  border: none;
  padding: 10px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: ${Theme.color.pinkHover};
  }
`;
