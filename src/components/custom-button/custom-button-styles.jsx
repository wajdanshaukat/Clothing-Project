import styled, { css } from "styled-components";

export const buttonStyles = css`
    background-color: black;
    color: white;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`;


export const invertedButtonStyles = css`
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;


export const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: auto;
  line-height: 50px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: lighter;
  cursor: pointer;
  display: flex;
  justify-content: center;


  ${getButtonStyles}
`;
