import NavMenu from "./NavMenu";
import Container from "./Container";
// import Top from "./Top";
export default function Layout(props) {
  return (
    <div>
      {/* <Top /> */}
      <NavMenu />
      <Container>{props.children}</Container>
    </div>
  );
}
