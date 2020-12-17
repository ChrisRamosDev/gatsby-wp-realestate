import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const HeaderContainer = styled.header`
  margin-bottom: 1.45rem;
  background-color: #111;
`
const HeaderDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 1rem;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderDiv>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Hōm.
        </Link>
      </h1>
    </HeaderDiv>
  </HeaderContainer>
)

export default Header
