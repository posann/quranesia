import { Quran } from "@/lib/types";

export const GetSurat = async ({ id }: { id: number }) => {
  const res = await fetch(`${process.env.BASE_URL_QURAN}/v2/surat/${id}`);
  return res.json();
};
