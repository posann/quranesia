import { GetSurat } from "@/network/get-surat";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await GetSurat({ id: parseInt(params.id) });
  const { id } = params;
  return <div>My Post: {id}</div>;
}
