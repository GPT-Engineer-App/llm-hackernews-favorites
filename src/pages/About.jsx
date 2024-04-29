import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={4}>
        About Us
      </Heading>
      <Text fontSize="lg">This application provides a curated list of recent stories about LLMs (Large Language Models) from Hacker News. Users can mark stories as favorites and revisit them easily.</Text>
    </Container>
  );
};

export default About;
