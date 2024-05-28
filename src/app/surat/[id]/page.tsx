import { GetSurat } from "@/network/get-surat";
import { DataSurat } from "@/lib/types";
import PageClient from "./pageClient";

export default async function Page({ params }: { params: { id: string } }) {
  const req = await GetSurat({ id: parseInt(params.id) });
  const data: DataSurat = req.data;

  return <PageClient initialData={data} />;
}
