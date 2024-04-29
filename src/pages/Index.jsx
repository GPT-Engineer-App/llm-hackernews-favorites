import { useState, useEffect } from "react";
import { Box, Container, Heading, VStack, Text, Link, Button, IconButton, useToast, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
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
    <Container maxW="container.xl" py={8}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Author</Th>
            <Th>Read More</Th>
            <Th>Favorites</Th>
          </Tr>
        </Thead>
        <Tbody>
          {stories.map((story) => (
            <Tr key={story.objectID}>
              <Td>{story.title}</Td>
              <Td>{story.author}</Td>
              <Td>
                <Link href={story.url} isExternal color="teal.500">
                  Read more
                </Link>
              </Td>
              <Td>
                <IconButton aria-label={isFavorite(story) ? "Remove from favorites" : "Add to favorites"} icon={isFavorite(story) ? <FaHeart /> : <FaRegHeart />} onClick={() => handleFavoriteToggle(story)} colorScheme={isFavorite(story) ? "red" : "gray"} variant="outline" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Index;
