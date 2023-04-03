import NavItem from "@/components/navItem";
import data from "@/data";
import { useRouter } from "next/router";

export default function Page() {
  const { tab } = useRouter().query;

  const navData = data.navData.find((item) => item.id === tab);

  return (
    <div className="my-nav">
      <NavItem data={navData}></NavItem>
    </div>
  );
}
