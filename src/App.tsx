import React from "react";
import ConvertForm from "./components/convert-form";
import ConvertResult from "./components/covert-result";
import { useConvert } from "./hooks/convert.hook";
import { useCurrencies } from "./hooks/currency.hook";

function App() {
  const { isLoading, formJson, result, handleConvert } = useConvert();
  const { data } = useCurrencies();

  return (
    <div className="background-wave">
      <div className="container mx-auto max-w-4xl">
        <div className="shadow p-14 rounded-xl bg-gray-50">
          <div className="mb-8">
            <ConvertForm isLoading={isLoading} onSubmit={handleConvert} />
          </div>

          <ConvertResult
            fromCurrency={data && formJson.from ? data[formJson.from] : ""}
            fromCurrencyCode={formJson.from}
            toCurrency={data && formJson.to ? data[formJson.to] : ""}
            toCurrencyCode={formJson.to}
            amount={formJson.amount}
            result={result[formJson.to] ?? 0}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
