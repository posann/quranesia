"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Badge,
} from "@chakra-ui/react";
import Link from "next/link";

interface CardProps {
  nomor: number;
  name: string;
  tempatTurun: string;
  arti: string;
  ayat: number;
}

export default function CardUI({
  nomor,
  name,
  tempatTurun,
  arti,
  ayat,
}: CardProps) {
  return (
    <Link href={`/surat/${nomor}`} passHref>
      <Center
        p={8}
        w={{ base: "320px", md: "300px" }}
        h={"220px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"xl"}
        zIndex={1}
        alignItems={"center"}
        justifyContent={"center"}
        _hover={{ bg: useColorModeValue("red.100", "gray.900") }}
      >
        <Stack align={"center"} spacing={2}>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Badge variant="solid" colorScheme="red">
              <Text letterSpacing={1} fontSize="9px">
                {ayat} Ayat
              </Text>
            </Badge>
            <Badge variant="solid" colorScheme="orange">
              <Text letterSpacing={1} fontSize="9px">
                {tempatTurun}
              </Text>
            </Badge>
          </Stack>
          <Heading fontSize={"2xl"} fontWeight={"bold"}>
            {name}
          </Heading>
          <Text textAlign={"center"} fontSize={"sm"} letterSpacing={1}>
            {arti}
          </Text>
        </Stack>
      </Center>
    </Link>
  );
}