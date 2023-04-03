import NavItem from "@/components/navItem";
import data from "@/data";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { tab } = useRouter().query;

  const navData = data.navData.find((item) => item.id === tab);

  return (
    <div className='my-nav'>
      <NavItem data={navData?.sub || []}></NavItem>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { tab: "study" } },
      { params: { tab: "films" } },
      { params: { tab: "life" } },
      { params: { tab: "tools" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
