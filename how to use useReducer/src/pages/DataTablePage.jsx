import Table from "../components/Table";
import SortTable from "../components/SortTable";

const DataTablePage = () => {
  const data = [
    {
      label: "",
      name: "Orange",
      color: "bg-orange-500",
      score: 5,
    },
    {
      name: "Appel",
      color: "bg-red-500",
      score: 3,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 1,
    },
    {
      name: "Lime",
      color: "bg-green-500",
      score: 4,
    },
  ];
  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Score squared",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];
  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div className="flex justify-between">
      <SortTable data={data} config={config} keyFn={keyFn} />
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default DataTablePage;
