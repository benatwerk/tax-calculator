import React, { createContext, useState } from "react";

export type CalculatorContextType = {
    yearlyIncome: number;
    setYearlyIncome: React.Dispatch<React.SetStateAction<number>>;
    stateCode: string;
    setStateCode: React.Dispatch<React.SetStateAction<string>>;
    otherTaxes: number;
    setOtherTaxes: React.Dispatch<React.SetStateAction<number>>;
};

const CalculatorContext = createContext<CalculatorContextType | null>(null);

const CalculatorProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [yearlyIncome, setYearlyIncome] = useState<number>(0);
    const [stateCode, setStateCode] = useState<string>("");
    const [otherTaxes, setOtherTaxes] = useState<number>(0);

    return (
        <CalculatorContext.Provider
            value={{
                yearlyIncome,
                setYearlyIncome,
                stateCode,
                setStateCode,
                otherTaxes,
                setOtherTaxes,
            }}
        >
            {children}
        </CalculatorContext.Provider>
    );
};

export { CalculatorProvider, CalculatorContext };
