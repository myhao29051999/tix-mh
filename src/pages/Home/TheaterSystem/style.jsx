import styled from "styled-components";
import { Row, Col } from "antd";
import { Image } from "antd-mobile";
import variableStyles from "styles/variable-styles";

export const TheaterContent = styled(Row)`
  border: 1px solid ${variableStyles.borderLightGray};
  .img-active {
    opacity: 1;
  }
  .theaterCard-active {
    opacity: 1;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ColImgTheater = styled(Col)`
  padding: 0 20px;
  border-left: 1px solid ${variableStyles.borderLightGray};
`;

export const ColInfoTheater = styled(Col)`
  padding: 0px 20px;
  max-height: 610px;
  overflow-y: scroll;
  border-left: 1px solid ${variableStyles.borderLightGray};
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #cccccc;
  }
`;

export const ImgTheater = styled(Image)`
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
  opacity: 0.6;
  cursor: pointer;
`;

export const DivCover = styled.div`
  border-bottom: 1px solid ${variableStyles.borderLightGray};
  padding: 25px 0;
`;
