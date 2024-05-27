import CardUI from "@/components/chakra/card-ui";
import { DataQuran } from "@/lib/types";
import { GetQuran } from "@/network/get-quran";
import { Button, SimpleGrid, Text, VStack, HStack } from "@chakra-ui/react";
import Link from "next/link";

interface HomeProps {
  initialData: DataQuran[];
  currentPage: number;
  totalPages: number;
}

const Home: React.FC<HomeProps> = ({
  initialData,
  currentPage,
  totalPages,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <main className="flex flex-col items-center justify-between">
      <VStack mt={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          {initialData.length > 0 ? (
            initialData.map((item) => (
              <div key={item.nomor}>
                <CardUI
                  nomor={item.nomor}
                  name={item.nama}
                  latin={item.namaLatin}
                  tempatTurun={item.tempatTurun}
                  arti={item.arti}
                  ayat={item.jumlahAyat}
                />
              </div>
            ))
          ) : (
            <Text>No data available</Text>
          )}
        </SimpleGrid>
        <HStack mt={8}>
          <Link
            hidden={currentPage === 1}
            href={`/?page=${currentPage - 1}`}
            passHref
          >
            <Button colorScheme="red" size={"xs"}>
              Previous
            </Button>
          </Link>
          {pageNumbers.map(
            (pageNumber) =>
              (pageNumber === currentPage - 1 ||
                pageNumber === currentPage ||
                pageNumber === currentPage + 1) && (
                <Link key={pageNumber} href={`/?page=${pageNumber}`} passHref>
                  <Button
                    colorScheme="red"
                    size={"xs"}
                    isActive={currentPage === pageNumber}
                  >
                    {pageNumber}
                  </Button>
                </Link>
              )
          )}
          <Link
            hidden={currentPage === totalPages}
            href={`/?page=${currentPage + 1}`}
            passHref
          >
            <Button colorScheme="red" size={"xs"}>
              Next
            </Button>
          </Link>
        </HStack>
      </VStack>
    </main>
  );
};

export default async function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = parseInt(searchParams.page || "1");
  const req = await GetQuran();
  const data = await req.data;
  const itemsPerPage = 6;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = data.slice(start, end);

  return (
    <Home
      initialData={currentData}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
