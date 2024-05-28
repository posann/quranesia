"use client";

import { useState } from "react";
import { Ayat, DataSurat } from "@/lib/types";
import {
  Button,
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
import { Reem_Kufi } from "next/font/google";
import Link from "next/link";
import parse from "html-react-parser";
import { CardSurat } from "@/components/card-surat";

const noto = Reem_Kufi({ subsets: ["arabic"] });

export default function PageClient({
  initialData,
}: {
  initialData: DataSurat;
}) {
  const [data] = useState<DataSurat>(initialData);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const ayatPerPage = 5;

  const colorHead = useColorModeValue("blue.600", "blue.100");
  const bgColor = useColorModeValue("white", "blue.700");

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const dataAyat: Ayat[] = data.ayat;
  const currentAyat = dataAyat.slice(
    currentStartIndex,
    currentStartIndex + ayatPerPage
  );

  const handleNext = () => {
    if (currentStartIndex + ayatPerPage < dataAyat.length) {
      setCurrentStartIndex(currentStartIndex + ayatPerPage);
    }
  };

  const handlePrev = () => {
    if (currentStartIndex - ayatPerPage >= 0) {
      setCurrentStartIndex(currentStartIndex - ayatPerPage);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <Stack spacing="3">
        <Card bg={bgColor} m={2} maxW="4xl" boxShadow={"lg"} rounded={"xl"}>
          <CardBody>
            <Stack spacing="3">
              <HStack justify="space-between" alignItems={"center"} gap={4}>
                <HStack>
                  <Button
                    size={"xs"}
                    rounded={"full"}
                    colorScheme={"blue"}
                    variant={"solid"}
                  >
                    <Text rounded={"full"}>{data.nomor}</Text>
                  </Button>
                  <Text
                    ml={2}
                    color={colorHead}
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight={"bold"}
                  >
                    {data.namaLatin}
                  </Text>
                </HStack>
                <div className={noto.className}>
                  <Text
                    color={colorHead}
                    fontSize={{ base: "xl", md: "3xl" }}
                    fontWeight={"reguler"}
                  >
                    {data.nama}
                  </Text>
                </div>
              </HStack>
              <div className="text-body">
                {parse(`<p>${data.deskripsi}</p>`)}
              </div>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Flex
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"100%"}
            >
              <Link
                href={`/surat/${
                  data.nomor == 1 ? "1" : data.suratSebelumnya.nomor
                }`}
              >
                <Button size="sm" variant="outline" colorScheme="blue">
                  {data.nomor === 1
                    ? "Data Tidak Ada"
                    : `${data.suratSebelumnya.nomor}. ${data.suratSebelumnya.namaLatin}`}
                </Button>
              </Link>
              <Link href={`/surat/${data.suratSelanjutnya.nomor}`}>
                <Button size="sm" variant="outline" colorScheme="blue">
                  {data.suratSelanjutnya.nomor}
                  {". "}
                  {data.suratSelanjutnya.namaLatin}
                </Button>
              </Link>
            </Flex>
          </CardFooter>
        </Card>
        {currentAyat.map((item) => (
          <CardSurat
            key={item.nomorAyat}
            nomorAyat={item.nomorAyat}
            teksArab={item.teksArab}
            teksIndonesia={item.teksIndonesia}
            teksLatin={item.teksLatin}
          />
        ))}
        <Flex justifyContent="space-between" p={6} mb={8} width="100%" gap={2}>
          <Button
            size="sm"
            colorScheme="blue"
            onClick={handlePrev}
            isDisabled={currentStartIndex === 0}
          >
            Previous
          </Button>
          <Button
            size="sm"
            colorScheme="blue"
            onClick={handleNext}
            isDisabled={currentStartIndex + ayatPerPage >= dataAyat.length}
          >
            Next
          </Button>
        </Flex>
      </Stack>
    </main>
  );
}
