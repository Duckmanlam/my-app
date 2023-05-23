import Menu from "../menu";
import Quiz from "./Quiz";

export default function Index() {
  return (
    <div>
      <>
        <div className="flex mt-[4.7rem] md:mt-0">
          <Menu />
          <div className="content">
            <Quiz />
          </div>
        </div>
      </>
    </div>
  );
}
