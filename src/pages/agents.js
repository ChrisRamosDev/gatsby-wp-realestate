import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "normalize.css"

import Agent from "../components/Agent/agent"

const agents = ({ data }) => {
  return (
    <Layout>
      <SEO title="Agents" />
      <Agent props={data} />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    wordPress {
      realEstateAgents {
        nodes {
          title
          agentFields {
            bio
            email
            facebook
            phone
            title
            twitter
            photo {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export default agents
