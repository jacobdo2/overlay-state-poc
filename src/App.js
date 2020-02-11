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
  outline: none;

  &:focus {
    outline: none;
  }
`;

const outlineState = (error = false) => css`
  &:before {
    box-sizing: border-box;
    content: "";
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background: transparent;
    border: 1px solid rgba(77, 78, 76, 0.7);
  }

  &:not([disabled]) {
    &:hover {
      &:before {
        border: 2px solid #1874bc;
      }
    }

    &:focus {
      &[data-focus-visible-added] {
        &:before {
          border: 2px solid #49a2df;
          box-shadow: 0 0 4px #49a2df;
        }
      }
    }

    &:active {
      &:before {
        border: 2px solid #49a2df;
      }
    }
  }

  ${error &&
    css`
      &:before {
        border: 2px solid #b21e2d;
      }
    `}

  &[disabled] {
    &:before {
      border: 1px solid rgba(77, 78, 76, 0.3);
    }
  }
`;

const overlayState = (selected = false) => css`
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
    &[data-focus-visible-added] {
      &:after {
        opacity: 0.16;
      }
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
        opacity: 0.12;
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonBase};
  background: black;
  color: red;
  border: none;
  ${p => overlayState(p.selected)};
  ${p => outlineState(p.error)};
`;

const Button = ({ icon, children }) => {
  return (
    <StyledButton selected>
      <span>{children}</span>
      {icon && icon}
    </StyledButton>
  );
};

export default App;
