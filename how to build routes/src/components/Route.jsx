import UseNavigation from "../hooks/UseNavigation";
const Route = ({ path, children }) => {
  const { currentPath } = UseNavigation();
  if (path === currentPath) {
    return children;
  }
  return null;
};

export default Route;
