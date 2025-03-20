import Button from "../components/Button";
import { GoCheck, GoAlert, GoTrash } from "react-icons/go";
const ButtonPage = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div>
      <div>
        <Button success rounded outline onClick={handleClick}>
          <GoCheck />
          click me!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoTrash />
          click me2!
        </Button>
      </div>
      <div>
        <Button warning className="mb-3">
          <GoAlert />
          click me3!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          click me4!
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
