import { useQuery } from "react-query";

export const useCurrencies = () => {
  return useQuery<Record<string, string>>("useCurrencies", () =>
    fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
    ).then((res) => res.json())
  );
};
