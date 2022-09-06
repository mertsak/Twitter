import Siderbar from "./components/Siderbar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="app">
      {/* SideBar */}
      <Siderbar></Siderbar>

      {/* Feed */}
      <Feed></Feed>

      {/* Widgets */}
      <Widgets></Widgets>
    </div>
  );
}

export default App;
