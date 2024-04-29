import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function LandingPage() {
  return (
    <Box p={5}>
      <Text fontSize="xl">Welcome to Our Application!</Text>
      <Text mt={2}>
        Discover the unique features and benefits of using our application to enhance your productivity and workflow.
      </Text>
    </Box>
  );
}

export default LandingPage;