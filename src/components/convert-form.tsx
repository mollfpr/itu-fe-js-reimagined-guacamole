import React from "react";
import { useForm } from "react-hook-form";
import { convertFormErrors } from "../constants/error-messages.constant";
import { ConvertDataType } from "../contexts/convert.context";
import { useCurrencies } from "../hooks/currency.hook";

export interface ConvertFormProps {
  isLoading?: boolean;
  onSubmit: (data: ConvertDataType) => Promise<void>;
}

const ConvertForm = ({ isLoading, onSubmit }: ConvertFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data } = useCurrencies();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex -mx-4 mb-4">
        <div className="px-4 w-1/3 flex flex-col">
          <label htmlFor="amount" className="mb-1">
            Amount
          </label>
          <input
            {...register("amount", {
              valueAsNumber: true,
              required: convertFormErrors.amount.required,
              min: 1,
            })}
            aria-label="amount"
            type="number"
            placeholder="Amount"
            className="border border-gray-200 shadow p-2 rounded-md"
          />
          <p
            className="text-red-500 text-sm"
            data-testid="amount-error-message"
          >
            {errors.amount && errors.amount.message}
          </p>
        </div>

        <div className="px-4 w-1/3 flex flex-col">
          <label htmlFor="from" className="mb-1">
            From
          </label>
          <select
            {...register("from", {
              required: convertFormErrors.from.required,
            })}
            data-testid="from-select"
            className="h-full border border-gray-200 shadow p-2 rounded-md"
          >
            <option value="">-- From --</option>
            {data &&
              Object.keys(data).map((key: string) => (
                <option
                  key={`from_${key}`}
                  value={key}
                  data-testid="from-select-option"
                >
                  {data[key]}
                </option>
              ))}
          </select>
          <p className="text-red-500 text-sm" data-testid="from-error-message">
            {errors.from && errors.from.message}
          </p>
        </div>

        <div className="px-4 w-1/3 flex flex-col">
          <label htmlFor="to" className="mb-1">
            To
          </label>
          <select
            data-testid="to-select"
            {...register("to", {
              required: convertFormErrors.to.required,
            })}
            className="h-full border border-gray-200 shadow p-2 rounded-md"
          >
            <option value="">-- To --</option>
            {data &&
              Object.keys(data).map((key: string) => (
                <option
                  key={`to_${key}`}
                  value={key}
                  data-testid="to-select-option"
                >
                  {data[key]}
                </option>
              ))}
          </select>
          <p className="text-red-500 text-sm" data-testid="to-error-message">
            {errors.to && errors.to.message}
          </p>
        </div>
      </div>

      <button
        type="submit"
        className={`w-full justify-center inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          isLoading ? "bg-blue-300 hover:bg-blue-300" : ""
        }`}
        disabled={isLoading}
        data-testid="button-submit"
      >
        Convert
      </button>
    </form>
  );
};

export default ConvertForm;
