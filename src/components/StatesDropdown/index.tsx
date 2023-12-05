import React, { useContext } from "react";
import { CalculatorContext } from "@/CalculatorContext";
import { stateTaxBrackets, stateCodes } from "@/utils/taxBrackets";
import styles from "./StatesDropdown.module.scss";

const StatesDropdown: React.FC = () => {
    const { stateCode, setStateCode } = useContext(CalculatorContext) || {};

    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStateCode?.(event.target.value);
    };

    const states = Object.keys(stateTaxBrackets);

    return (
        <fieldset className={styles.stateDropdown}>
            <label htmlFor="state">Select State</label>
            <select id="state" value={stateCode} onChange={handleStateChange}>
                <option value="" disabled>
                    Select State
                </option>
                {states.map((state) => (
                    <option key={state} value={state}>
                        {stateCodes[state]}
                    </option>
                ))}
            </select>
        </fieldset>
    );
};

export default StatesDropdown;
