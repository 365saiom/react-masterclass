import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div``;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={props.bgColor} />;
}

export default Circle;
