import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";

interface CharProps {
  coinId: string;
}
function Chart({ coinId }: CharProps) {
  const { isLoading, data } = useQuery(
    ["ohlcv", coinId],
    () => fetchCoinHistory
  );
  return <h1>Chart</h1>;
}

export default Chart;
