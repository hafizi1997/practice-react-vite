import "./App.css";
import Accordion from "../components/Accordion";

function AccordianPage() {
  const items = [
    {
      id: 1,
      label: "title 1",
      content: "content of title 1",
    },
    {
      id: 2,
      label: "title 2",
      content: "content of title 2",
    },
    {
      id: 3,
      label: "title 3",
      content: "content of title 3",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordianPage;
