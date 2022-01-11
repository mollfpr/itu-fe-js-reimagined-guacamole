import React, { useState } from "react";

export interface ConvertDataType {
  amount: number;
  to: string;
  from: string;
}

export interface ConvertContextType {
  isLoading: boolean;
  result: Record<string, any>;
  formJson: ConvertDataType;
  handleConvert: (data: ConvertDataType) => Promise<void>;
}

export const CovertContext = React.createContext<ConvertContextType>(null!);

export const ConvertProvider = ({
  children,
}: {
  children: React.ReactChild;
}) => {
  const empty = {
    amount: 0,
    from: "",
    to: "",
  };
  const [formJson, setFormJson] = useState<ConvertDataType>(empty);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState({});

  async function handleConvert(data: ConvertDataType): Promise<void> {
    try {
      setIsLoading(true);
      setFormJson(empty);

      const res = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${data.from}/${data.to}.json`
      );
      const result = await res.json();

      setIsLoading(false);

      setResult(result);
      setFormJson(data);
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <CovertContext.Provider
      value={{
        isLoading,
        formJson,
        result,
        handleConvert,
      }}
    >
      {children}
    </CovertContext.Provider>
  );
};
