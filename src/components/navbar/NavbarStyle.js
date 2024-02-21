import styled from "styled-components";
import { Theme } from "../../style/Them";

export const NavbarStyle = styled.div`
  Header {
    color: ${Theme.color.black};
    background-color: ${Theme.color.white};

    .ant-menu {
      &.ant-menu-dark {
        background-color: ${Theme.color.white};

        .ant-menu-item {
          color: ${Theme.color.black};
          background-color: ${Theme.color.white};

          &:hover {
            color: #dadada;
          }
        }
      }
    }
  }
`;
