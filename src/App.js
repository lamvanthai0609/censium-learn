import CreateViewer from "./Component/createViewer";
import SelectBox from "./Component/SelectBox";
import ViewerProvider from "./Context/ViewContext";

function App() {
  return (
    <ViewerProvider>
      <div
        className="App"
        style={{
          position: "relative",
        }}
      >
        <CreateViewer />
        <SelectBox />
      </div>
    </ViewerProvider>
  );
}

export default App;
