import React from "react";
import { allImages } from "../../helper/imageprovider";
import Container from "../commonComponent/Container";
const Navbar = () => {
  const { navbarImage } = allImages;
  return (
    <nav className="py-2">
      <Container>
        <figure>
          <img src={navbarImage} alt="nav-images" />
        </figure>
      </Container>
    </nav>
  );
};

export default Navbar;
