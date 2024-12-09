import Image from "next/image";
import Herosection from "@/components/herosection";
import Productone from "@/components/productone";
import FourColumnList from "@/components/fourcols";
export default function Home() {
  return (
    <>
    <Herosection/>
    <Productone/>
    <FourColumnList/>
    </>
  );
}
