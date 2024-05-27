import { Quran } from "@/lib/types";

export const GetQuran = async (): Promise<Quran> => {
  const res = await fetch(`${process.env.BASE_URL_QURAN}/v2/surat`);
  const data = await res.json();
  return data;
};
