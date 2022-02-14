import Card from "../layout/Card";
function FactCards() {
  return (
    <div className="flex h-4/6 gap-x-24 flex-row mx-auto mt-8 p-8">
      <Card title="ello" description="Sample description" />
      <Card title="Wiele uczelni" description="Sample description" />
      <Card title="Profesjonalne notatki" description="Sample description" />
    </div>
  );
}

export default FactCards;
