import { useSearchParams } from "next/navigation";

export default function getSearchParams() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  return search;
}
