/* eslint-disable indent */
import styled from "styled-components";
import { Button } from "antd";
import variableStyles from "styles/variable-styles";

export const StyledButton = styled(Button)`
  transition: 0.8s;
  &.nonanimating-btn {
    &[ant-click-animating-without-extra-node]:after {
      animation: 0s;
    }
  }
  &.custom-ant-button {
    font-size: ${(props) => (props.size === "small" ? "12px" : "16px")};
    font-weight: ${variableStyles.fwStrongBold};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    line-height: ${variableStyles.lineHeight_24};
    padding: ${(props) => {
      switch (props.size) {
        case "large":
          return "0px 24px";
        case "small":
          return "0px 8px";
        default:
          return "16px 24px";
      }
    }};
    text-shadow: none;
    padding-top: ${(props) => props.size === "small" && "1px"};
    border: 1px solid;
    height: ${(props) => {
      switch (props.size) {
        case "large":
          return "36px";
        case "small":
          return "32px";
        default:
          return "56px";
      }
    }};
    color: ${(props) => {
      switch (props.type) {
        case "outlineRed":
          return variableStyles.primaryRed;
        case "primaryRed":
          return variableStyles.primaryWhite;

        default:
          return variableStyles.backgroundWhite;
      }
    }};
    border-color: ${(props) => {
      switch (props.type) {
        case "outlineRed":
          return variableStyles.primaryRed;

        default:
          return "transparent";
      }
    }};
    background: ${(props) => {
      switch (props.type) {
        case "outlineRed":
          return `transparent`;
        case "primaryRed":
          return variableStyles.primaryRed;
        default:
          return `transparent`;
      }
    }};

    &:hover {
      color: ${(props) => {
        switch (props.type) {
          case "outlineRed":
            return variableStyles.textWhite;
          case "primaryRed":
            return variableStyles.primaryWhite;

          default:
            return variableStyles.textWhite;
        }
      }};

      background: ${(props) => {
        switch (props.type) {
          case "outlineRed":
            return variableStyles.primaryRed;
          case "primaryRed":
            return variableStyles.primaryRed;

          default:
            return "transparent";
        }
      }};
    }
    &:focus {
      transform: scale(95%);
    }
  }
`;
