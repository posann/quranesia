import { DataSurat } from "@/lib/types";
import { GetSurat } from "@/network/get-surat";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Reem_Kufi } from "next/font/google";
import Link from "next/link";

const noto = Reem_Kufi({ subsets: ["arabic"] });

export default async function Page({ params }: { params: { id: string } }) {
  const req = await GetSurat({ id: parseInt(params.id) });
  const data: DataSurat = req.data;
  return (
    <main className="flex flex-col items-center justify-center">
      <Stack spacing="8">
        <Card mt={8} maxW="4xl">
          <CardBody>
            <Stack spacing="3">
              <HStack justify="space-start" alignItems={"center"} gap={4}>
                <Button
                  size={"sm"}
                  rounded={"full"}
                  colorScheme={"red"}
                  variant={"solid"}
                >
                  <Text rounded={"full"}>{data.nomor}</Text>
                </Button>
                <Text color={"red.400"} fontSize={"2xl"} fontWeight={"bold"}>
                  {data.namaLatin}
                </Text>
                <div className={noto.className}>
                  <Text color={"red.400"} fontSize={"3xl"} fontWeight={"thin"}>
                    {data.nama}
                  </Text>
                </div>
              </HStack>
              <Text>{data.deskripsi}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Link
                href={`/surat/${
                  data.nomor == 1 ? "1" : data.suratSebelumnya.nomor
                }`}
              >
                <Button variant="solid" colorScheme="red">
                  {data.nomor == 1
                    ? "Data Tidak Ada"
                    : data.suratSebelumnya.namaLatin}
                </Button>
              </Link>
              <Link href={`/surat/${data.suratSelanjutnya.nomor}`}>
                <Button variant="solid" colorScheme="orange">
                  {data.suratSelanjutnya.namaLatin}
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Stack>
    </main>
  );
}
