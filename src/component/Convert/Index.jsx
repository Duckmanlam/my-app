import Menu from "../menu";
import Convert from "./Convert";

export default function Index() {
  return (
    <div>
    <>
    <div className="flex mt-[4.7rem] md:mt-0">
        <Menu/>
      <div className="content">
        <Convert/>
      </div>
    </div>
  </>
</div>
  )
}
