import Menu from "../menu";
import Product_list from "./Product-list";

export default function Index() {
  return (
    <div>
    <>
    <div className="flex mt-[4.7rem] md:mt-0">
        <Menu/>
      <div className="content">
        <Product_list/>
      </div>
    </div>
  </>
</div>
  )
}
