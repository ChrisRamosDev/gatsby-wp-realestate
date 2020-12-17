import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  max-width: 1100px;
  background-color: #111;
  color: #fff;
  display: flex;
  margin-bottom: 30px;
`
const ImageWrapper = styled.div`
  min-width: 300px;
  height: 100%;
  padding: 30px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://res.cloudinary.com/crdcloud/image/upload/v1600375078/ArchitecturePage/all-bong-unsplash_icepr2.jpg");
  background-size: contain;
`

const AgentImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: top;
`

const AgentInfo = styled.div`
  padding: 30px;
  max-height: 500px;
`

const Agent = ({ props }) => {
  const agentData = props.wordPress.realEstateAgents.nodes
  return (
    <>
      {agentData.map(agent => (
        <Container>
          <ImageWrapper>
            <AgentImg
              src={agent.agentFields.photo.sourceUrl}
              alt={agent.agentFields.photo.altText}
            />
          </ImageWrapper>
          <AgentInfo>
            <h1>{agent.title}</h1>
            <p>{agent.agentFields.title}</p>
            <p>{agent.agentFields.phone}</p>
            <p>{agent.agentFields.email}</p>
            <h4>{agent.agentFields.bio}</h4>
          </AgentInfo>
        </Container>
      ))}
    </>
  )
}

export default Agent
