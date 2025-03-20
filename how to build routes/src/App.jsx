import Route from "./components/Route";
import AccordianPage from "./pages/AccordianPage";
import Dropdownpages from "./pages/Dropdownpages";
import SideBar from "./components/SideBar";
import ButtonPage from "./pages/ButtonPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordianPage />
        </Route>
        <Route path="/">
          <Dropdownpages />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
