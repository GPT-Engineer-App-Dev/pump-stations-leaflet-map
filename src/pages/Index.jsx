import React from "react";
import { Container, Text, VStack, Box, Icon, HStack } from "@chakra-ui/react";
import { FaBicycle, FaMapMarkerAlt } from "react-icons/fa";

const bikePumpStations = [
  { id: 1, name: "Station 1", address: "Street 1, Stockholm" },
  { id: 2, name: "Station 2", address: "Street 2, Stockholm" },
  { id: 3, name: "Station 3", address: "Street 3, Stockholm" },
  { id: 4, name: "Station 4", address: "Street 4, Stockholm" },
  { id: 5, name: "Station 5", address: "Street 5, Stockholm" },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="3xl" fontWeight="bold">
          Bike Pump Stations in Stockholm
        </Text>
        {bikePumpStations.map((station) => (
          <Box key={station.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <HStack spacing={4}>
              <Icon as={FaMapMarkerAlt} w={6} h={6} color="red.500" />
              <VStack align="start">
                <Text fontSize="xl" fontWeight="bold">
                  {station.name}
                </Text>
                <Text>{station.address}</Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
