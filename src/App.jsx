import NavScrollExample from "./components/Navbar";

import SidebarContainer from "./components/SidebarContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTasks from "./pages/AllTaks";
import { Container } from "react-bootstrap";
import ImportantTasks from "./pages/ImportantTasks";
import CompletedTasks from "./pages/CompletedTasks";
import UncompletedTasks from "./pages/UncompletedTasks";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex ">
          <SidebarContainer />
          <Container className="flex flex-col w-9/12 justify-end absolute right-0">
            <NavScrollExample />
            <Routes>
              <Route path="/" element={<AllTasks />} />
              <Route path="/important" element={<ImportantTasks />} />
              <Route path="/completed" element={<CompletedTasks />} />
              <Route path="/uncompleted" element={<UncompletedTasks />} />
              <Route path="/main" element={<MainPage />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
