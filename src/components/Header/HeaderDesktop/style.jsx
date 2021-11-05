import styled from "styled-components";
import variableStyles from "styles/variable-styles";

export const HeaderDes = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

export const LogoDes = styled.div`
  img {
    width: 50px;
  }
`;

export const ListDes = styled.div`
  margin-top: 15px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      margin-right: 20px;
      cursor: pointer;
      color: ${variableStyles.textBlack};
      font-family: "SF Regular";
      &:hover {
        color: ${variableStyles.primaryRed};
      }
    }
  }
`;

export const ButtonsDes = styled.div`
  .btn__signin {
    margin-top: 15px;
  }
`;
