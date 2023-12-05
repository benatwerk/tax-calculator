import React, { useContext } from "react";
import { CalculatorContext } from "@/CalculatorContext";
import classNames from "classnames";
import styles from "./IncomeInput.module.scss";

const IncomeInput: React.FC = () => {
    const { yearlyIncome, setYearlyIncome, stateCode } =
        useContext(CalculatorContext) || {};

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (Number(value) < 0) return;
        setYearlyIncome?.(Number(value));
    };

    return (
        <fieldset
            className={classNames(styles.incomeInput, {
                [styles.disabled]: !stateCode,
            })}
        >
            <label htmlFor="incomeInput">Yearly Income</label>
            <input
                id="incomeInput"
                type="number"
                value={yearlyIncome}
                onChange={handleInputChange}
                disabled={!stateCode}
            />
        </fieldset>
    );
};

export default IncomeInput;
