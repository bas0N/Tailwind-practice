import Card from "../layout/Card";
import img1 from "../layout/Assets/554.jpg";
import img2 from "../layout/Assets/564.jpg";
import img3 from "../layout/Assets/566.jpg";

function FactCards() {
  return (
    <div className="flex h-4/6 gap-x-24 flex-row mx-auto mt-8 p-8">
      <Card title="ello" description="Sample description" img={img1} />
      <Card title="Wiele uczelni" description="Sample description" img={img2} />
      <Card
        title="Profesjonalne notatki"
        description="Sample description"
        img={img3}
      />
    </div>
  );
}

export default FactCards;
