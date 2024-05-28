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
import { Reem_Kufi } from "next/font/google";
import Link from "next/link";

interface CardProps {
  nomor: number;
  name: string;
  latin: string;
  tempatTurun: string;
  arti: string;
  ayat: number;
}

const noto = Reem_Kufi({ subsets: ["arabic"] });

export default function CardUI({
  nomor,
  name,
  latin,
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
        _hover={{ bg: useColorModeValue("blue.100", "gray.900") }}
      >
        <Stack align={"center"} spacing={3}>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Badge variant="outline" colorScheme="blue">
              <Text letterSpacing={1} fontSize="9px">
                {ayat} Ayat
              </Text>
            </Badge>
            <Badge variant="subtle" colorScheme="blue">
              <Text letterSpacing={1} fontSize="9px">
                {tempatTurun}
              </Text>
            </Badge>
          </Stack>
          <Heading fontSize={"2xl"} fontWeight={"bold"}>
            {latin}
          </Heading>
          <Text
            className={noto.className}
            textAlign={"center"}
            fontSize={"2xl"}
          >
            {name}
          </Text>
          <Text mt={2} textAlign={"center"} fontSize={"md"} letterSpacing={0.8}>
            {arti}
          </Text>
        </Stack>
      </Center>
    </Link>
  );
}
