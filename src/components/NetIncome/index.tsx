import { useContext } from "react";
import classNames from "classnames";
import { calculateNetIncome } from "@/utils/calculators";
import { CalculatorContext } from "@/CalculatorContext";
import { formatNumberAsDollar } from "@/utils/misc";
import { stateCodes } from "@/utils/taxBrackets";
import styles from "./NetIncome.module.scss";

const NetIncome: React.FC = () => {
    const { stateCode, yearlyIncome, otherTaxes } =
        useContext(CalculatorContext) || {};

    const netIncome = calculateNetIncome(stateCode, yearlyIncome, otherTaxes);
    const stateName = stateCodes[stateCode ?? ""];

    return (
        <>
            {netIncome.error ? <>Error: {netIncome.error}</> : null}
            <table
                className={classNames(styles.taxTable, {
                    [styles.disabled]: netIncome.error,
                })}
            >
                <thead>
                    <tr>
                        <th colSpan={2}>Taxes for {stateName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Yearly Gross Income</td>
                        <td>{formatNumberAsDollar(yearlyIncome)}</td>
                    </tr>
                    <tr>
                        <td>Yearly Net Income</td>
                        <td>{formatNumberAsDollar(netIncome.netIncome)}</td>
                    </tr>
                </tbody>
            </table>
            <table
                className={classNames(styles.taxTable, {
                    [styles.disabled]: netIncome.error,
                })}
            >
                <thead>
                    <tr>
                        <th colSpan={2}>Withholdings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Federal</td>
                        <td>{formatNumberAsDollar(netIncome.federalTax)}</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>{formatNumberAsDollar(netIncome.stateTax)}</td>
                    </tr>
                    <tr>
                        <td>Social Security</td>
                        <td>
                            {formatNumberAsDollar(netIncome.socialSecurityTax)}
                        </td>
                    </tr>
                    <tr>
                        <td>Medicare</td>
                        <td>{formatNumberAsDollar(netIncome.medicareTax)}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};
export default NetIncome;
