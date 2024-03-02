import styled from "styled-components";
import useTheme from "../../hooks/useTheme";
const Figure = styled.figure`
  text-align: center;
`;
const Img = styled.img`
  height: 10rem;
  width: auto;
`;
export default function Logo() {
  const { isDark } = useTheme();
  // const src = isDark ? "/dark.svg" : "/light.svg";
  const src = "/logo.png";
  return (
    <Figure>
      <Img src={src} alt="logo" />
    </Figure>
  );
}
