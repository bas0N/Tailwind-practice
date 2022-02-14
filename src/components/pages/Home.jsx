import FactCards from "../figures/FactCards";
import Search_form from "../input/Search_form";
import Carousel from "../figures/Carousel";
function Home() {
  return (
    <div className="">
      <div className="  min-w-full  bg-black pt-24 pb-24 ">
        <div className="flex flex-row mx-auto max-w-6xl justify-between">
          <h1 className="font-bolder text-left text-6xl max-w-md mx-auto">
            Wszystko w jednym miejscu
          </h1>
          <div className="mx-auto w-3/6">
            <Search_form />
          </div>
        </div>
      </div>
      <div className="flex  min-w-full flex-col bg-black">
        <FactCards />
      </div>
      <Carousel />
    </div>
  );
}

export default Home;
