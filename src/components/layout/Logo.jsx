import styled from "styled-components";
const Figure = styled.figure`
  text-align: center;
`;
const Img = styled.img`
  height: 10rem;
  width: auto;
`;
export default function Logo() {
  return (
    <Figure>
      <Img src={"/title.svg"} alt="logo" />
    </Figure>
  );
}
