import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { useCurrencies } from "../hooks/currency.hook";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: any }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("ConvertForm", () => {
  it("should submit form and return object", () => {});
});
