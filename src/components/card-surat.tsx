"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Mirza } from "next/font/google";

interface CardSuratProps {
  nomorAyat: number;
  teksIndonesia: string;
  teksArab: string;
  teksLatin: string;
}

const noto = Mirza({ weight: "400", subsets: ["arabic"] });

export const CardSurat = ({
  nomorAyat,
  teksIndonesia,
  teksArab,
  teksLatin,
}: CardSuratProps) => {
  const bgCard = useColorModeValue("white", "blue.800");
  return (
    <div>
      <Card bg={bgCard} m={2} maxW="4xl" boxShadow={"xl"} rounded={"xl"} p={4}>
        <CardBody>
          <Stack spacing="3">
            <HStack justify="center" alignItems={"center"}>
              <Text fontSize={"sm"}>{nomorAyat}</Text>
            </HStack>
            <Text
              className={noto.className + ""}
              textAlign={"right"}
              fontSize={"3xl"}
              lineHeight={"large"}
              mt={4}
            >
              {teksArab}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Flex
            direction={"column"}
            justifyContent={"space-start"}
            alignItems={"start"}
            w={"100%"}
          >
            <Text opacity={0.5} fontSize={"lg"}>
              {teksLatin}
            </Text>
            <Text mt={2} fontSize={"lg"}>
              {teksIndonesia}
            </Text>
          </Flex>
        </CardFooter>
      </Card>
    </div>
  );
};
