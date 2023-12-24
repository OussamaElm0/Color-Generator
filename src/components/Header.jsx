import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const Container = styled.div`
    background-color: #2d9596;
  `;

  const StyledLink = styled(Link)`
    color: #f9f7f7;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0 20px;
    &:hover {
      color: #9ad0c2;
    }
  `;

  return (
    <Container className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <StyledLink to="/" className="navbar-brand">
          Color Generator
        </StyledLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <StyledLink to="/generate" className="nav-link">
              Generate
            </StyledLink>
            <StyledLink to="/my-colors" className="nav-link">
              MyColors
            </StyledLink>
          </div>
        </div>
      </div>
    </Container>
  );
}
