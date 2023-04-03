import homeData from "@/data/often.json";
import NavItem from "@/components/navItem";
import Search from "@/components/Search";

export default function Home() {
  return (
    <div>
      <Search />
      <div className="often">
        <NavItem data={homeData}></NavItem>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
