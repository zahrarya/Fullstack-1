import { Button } from "./ui/button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchInput from "./SearchInput";
import SidebarContainer from "./SidebarContainer";
import BottomNav from "./BottomNav";

let today = new Date().toISOString().slice(0, 10);

function NavScrollExample() {
  return (
    <>
      <Container className="">
        <Navbar className=" z-10 bg-violet-100 mb-6 ml-0">
          <Container className=" w-full bg-transparent flex justify-between lg-max:flex-col lg-max:items-center p-5">
            <SearchInput />
            <p className="text-center">{today}</p>
            <Button className="w-32 mr-32">Add new task</Button>
          </Container>
        </Navbar>
        <BottomNav />
      </Container>
    </>
  );
}

export default NavScrollExample;
