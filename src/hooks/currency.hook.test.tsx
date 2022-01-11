import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { useCurrencies } from "./currency.hook";

describe("useCurrencies", () => {
  it("should fetch currencies data", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: any }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useCurrencies(), {
      wrapper,
    });

    await waitFor(() => {
      return result.current.isSuccess;
    });

    expect(result.current.data).toHaveProperty("usd");
  });
});
