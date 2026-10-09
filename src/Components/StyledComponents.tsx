import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(245, 15, 15, 0.1);`;

  const Title = styled.h2`
    font-size: 24px;
    color: #083ce6;
    margin-bottom: 10px;
    `;

  function StyledComponents() {
    return (
      <Container>
        <Title>Styled Components Example</Title>
        <p>This is a simple example of using styled-components in React.</p>
      </Container>
    );
  }

  export default StyledComponents;