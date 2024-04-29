import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box p="4" bg="gray.100">
      <Link as={RouterLink} to="/" mr="4">
        Home
      </Link>
      <Link as={RouterLink} to="/index" mr="4">
        Stories
      </Link>
      <Link as={RouterLink} to="/about">
        About
      </Link>
    </Box>
  );
}

export default Navigation;
