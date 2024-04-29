import { useState, useEffect } from "react";
import { Box, Container, Heading, VStack, Text, Link, Button, IconButton, useToast } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Index = () => {
  const [stories, setStories] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const toast = useToast();

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=LLMs")
      .then((response) => response.json())
      .then((data) => setStories(data.hits))
      .catch((error) => console.error("Error fetching stories:", error));
  }, []);

  const handleFavoriteToggle = (story) => {
    if (favorites.some((fav) => fav.objectID === story.objectID)) {
      setFavorites(favorites.filter((fav) => fav.objectID !== story.objectID));
      toast({
        title: "Removed from favorites.",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setFavorites([...favorites, story]);
      toast({
        title: "Added to favorites!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const isFavorite = (story) => {
    return favorites.some((fav) => fav.objectID === story.objectID);
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          LLM Stories
        </Heading>
        {stories.map((story) => (
          <Box key={story.objectID} p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">{story.title}</Heading>
            <Text mt={4}>{story.author}</Text>
            <Link href={story.url} isExternal color="teal.500">
              Read more
            </Link>
            <IconButton aria-label={isFavorite(story) ? "Remove from favorites" : "Add to favorites"} icon={isFavorite(story) ? <FaHeart /> : <FaRegHeart />} onClick={() => handleFavoriteToggle(story)} colorScheme={isFavorite(story) ? "red" : "gray"} variant="outline" ml={2} />
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
