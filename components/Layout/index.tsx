import NavMenu from "./NavMenu";
import Container from "./Container";
import { ReactElement } from "react";
// import Top from "./Top";
export default function Layout(props: {children: ReactElement}) {
  return (
    <div>
      {/* <Top /> */}
      <NavMenu />
      <Container>{props.children}</Container>
    </div>
  );
}
