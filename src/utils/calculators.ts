import {
    TaxBracket,
    federalTaxBrackets,
    stateTaxBrackets,
} from "./taxBrackets";

/**
 * Calculates the progressive tax based on the given income and tax brackets.
 *
 * @param income - Yearly income.
 * @param brackets - The tax brackets to calculate the tax.
 * @returns The calculated progressive tax.
 */
function calculateProgressiveTax(
    income: number,
    brackets: TaxBracket[]
): number {
    let tax = 0;
    const remainingIncome = income;

    // Calculate Tax, more progessivelier
    for (const bracket of brackets) {
        if (remainingIncome > bracket.threshold) {
            const nextThreshold =
                brackets[brackets.indexOf(bracket) + 1]?.threshold || income;
            const taxableIncome = Math.min(
                remainingIncome - bracket.threshold,
                nextThreshold - bracket.threshold
            );
            tax += taxableIncome * bracket.rate;
            if (remainingIncome <= bracket.threshold) break;
        }
    }

    return tax;
}

/**
 * Calculates the net income based on the given yearly income and tax rates.
 *
 * @param stateCode - The state code to calculate the state tax.
 * @param yearlyIncome - Yearly income.
 * @param otherTaxesRate - Other taxes rate.
 * @returns Object containing the net income and the taxes/withholdings.
 */
function calculateNetIncome(
    stateCode = "",
    yearlyIncome = 0,
    otherTaxesRate = 0
) {
    const ret = {
        error: "",
        netIncome: 0,
        stateTax: 0,
        federalTax: 0,
        socialSecurityTax: 0,
        medicareTax: 0,
        otherTaxes: 0,
    };

    if (!stateCode) {
        ret.error = `No state code provided`;
        return ret;
    }
    if (!stateTaxBrackets[stateCode]) {
        ret.error = `State doesn't exist`;
        return ret;
    }

    if (yearlyIncome < 1) {
        ret.error = `Yearly income must be positive`;
        return ret;
    }

    // FICA Tax Rates
    const socialSecurityRate = 0.062;
    const medicareRate = 0.0145;
    const additionalMedicareTaxRate = 0.009;
    const socialSecurityCap = 147000;

    // Calculate Federal Tax
    const federalTax = calculateProgressiveTax(
        yearlyIncome,
        federalTaxBrackets
    );

    // Calculate State Tax
    const stateTax = stateTaxBrackets[stateCode]
        ? calculateProgressiveTax(yearlyIncome, stateTaxBrackets[stateCode])
        : 0;

    // Calculate Social Security Tax (capped)
    const socialSecurityTax =
        Math.min(yearlyIncome, socialSecurityCap) * socialSecurityRate;

    // Calculate Medicare Tax (additional tax for high earners)
    const basicMedicareTax = yearlyIncome * medicareRate;
    const additionalMedicareTax =
        yearlyIncome > 200000
            ? (yearlyIncome - 200000) * additionalMedicareTaxRate
            : 0;
    const medicareTax = basicMedicareTax + additionalMedicareTax;

    // Calculate Other Taxes
    const otherTaxes = yearlyIncome * otherTaxesRate;

    // Calculate Total Taxes and Net Income
    const totalTaxes =
        federalTax + stateTax + socialSecurityTax + medicareTax + otherTaxes;
    const netIncome = yearlyIncome - totalTaxes;

    return {
        ...ret,
        netIncome,
        stateTax,
        federalTax,
        socialSecurityTax,
        medicareTax,
        otherTaxes,
    };
}

export { calculateNetIncome };
