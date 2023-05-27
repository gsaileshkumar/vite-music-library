import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { FlexColumn, MainContent } from "./components/FlexLayouts";

function App() {
  return (
    <div>
      <Header />
      <MainContent>
        <FlexColumn>
          <Outlet />
        </FlexColumn>
      </MainContent>
    </div>
  );
}

export default App;
