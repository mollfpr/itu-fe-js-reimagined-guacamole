import React from "react";

interface ConvertResultProps {
  fromCurrency: string;
  fromCurrencyCode: string;
  toCurrency: string;
  toCurrencyCode: string;
  amount?: number;
  result?: number;
}

const ConvertResult = ({
  amount = 0,
  result = 0,
  fromCurrency,
  fromCurrencyCode,
  toCurrency,
  toCurrencyCode,
}: ConvertResultProps) => {
  return (
    <div className="">
      <p className="font-semibold text-gray-500">
        {amount ?? 0}.00 {fromCurrency} =
      </p>
      <h2 className="text-3xl font-bold text-gray-700 mb-4">
        {amount * result} {toCurrency}
      </h2>
      <p className="text-sm text-gray-500 uppercase">
        1 {fromCurrencyCode} = {result} {toCurrencyCode}
      </p>
    </div>
  );
};

export default ConvertResult;
