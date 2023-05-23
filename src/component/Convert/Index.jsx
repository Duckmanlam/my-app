import Menu from "../Menu";
import Product_list from "./Product-list";
import ConvertProduct from "./ConvertProduct";

export default function Scan() {
  return (
    <div>
      <>
        <div className="flex mt-[4.7rem] md:mt-0">
          <Menu />
          <div className="content">
            <ConvertProduct />
            <Product_list />
          </div>
        </div>
      </>
    </div>
  )
}
