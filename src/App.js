import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
function App() {
  return (
    <div className="App">
      <Button>Normal</Button>
      <Button icon={<DashboardIcon />}>With Icon</Button>
    </div>
  );
}

const ButtonBase = css`
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  position: relative;
`;

const overlayStates = ({ selected = false } = {}) => css`
  &:after {
    content: "";
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background: currentColor;
    opacity: 0;
  }

  &:hover {
    &:after {
      opacity: 0.08;
    }
  }

  &:focus {
    &:after {
      opacity: 0.16;
    }
  }

  &:active {
    &:after {
      opacity: 0.16;
    }
  }

  ${selected &&
    css`
      &:after {
        opacity: 0.5;
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonBase};
  background: black;
  color: lightblue;

  ${overlayStates({
    selected: p => p.happy
  })};

  > span {
    color: hotpink;
  }
`;

const Button = ({ icon, children }) => {
  return (
    <StyledButton happy>
      <span>{children}</span>
      {icon && icon}
    </StyledButton>
  );
};

export default App;
