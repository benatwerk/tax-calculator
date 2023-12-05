type TaxBracket = {
    threshold: number;
    rate: number;
};

type StateTaxBrackets = {
    [stateCode: string]: TaxBracket[];
};

const federalTaxBrackets: TaxBracket[] = [
    { threshold: 0, rate: 0.1 },
    { threshold: 11225, rate: 0.12 },
    { threshold: 45925, rate: 0.22 },
    { threshold: 99525, rate: 0.24 },
    { threshold: 172525, rate: 0.32 },
    { threshold: 228525, rate: 0.35 },
    { threshold: 539900, rate: 0.37 },
];

const stateTaxBrackets: StateTaxBrackets = {
    AL: [
        // Alabama
        { threshold: 0, rate: 0.02 },
        { threshold: 500, rate: 0.04 },
        { threshold: 3000, rate: 0.05 },
    ],
    AK: [
        // Alaska (none)
    ],
    AZ: [
        // Arizona
        { threshold: 0, rate: 0.0259 },
        { threshold: 26500, rate: 0.0334 },
        { threshold: 53000, rate: 0.0417 },
        { threshold: 159000, rate: 0.045 },
    ],
    AR: [
        // Arkansas
        { threshold: 0, rate: 0.02 },
        { threshold: 4000, rate: 0.04 },
        { threshold: 8000, rate: 0.059 },
    ],
    CA: [
        // California
        { threshold: 0, rate: 0.01 },
        { threshold: 9325, rate: 0.02 },
        { threshold: 22107, rate: 0.04 },
        { threshold: 34892, rate: 0.06 },
        { threshold: 48435, rate: 0.08 },
        { threshold: 61214, rate: 0.093 },
        { threshold: 312686, rate: 0.103 },
        { threshold: 375221, rate: 0.113 },
        { threshold: 625369, rate: 0.123 },
        { threshold: 1000000, rate: 0.133 },
        { threshold: 1250000, rate: 0.143 },
        { threshold: 1500000, rate: 0.153 },
    ],
    CO: [
        // Colorado (Flat tax rate)
        { threshold: 0, rate: 0.0463 },
    ],
    CT: [
        // Connecticut
        { threshold: 0, rate: 0.03 },
        { threshold: 10000, rate: 0.05 },
        { threshold: 50000, rate: 0.055 },
        { threshold: 100000, rate: 0.06 },
        { threshold: 200000, rate: 0.065 },
        { threshold: 250000, rate: 0.069 },
        { threshold: 500000, rate: 0.0699 },
    ],
    DE: [
        // Delaware
        { threshold: 0, rate: 0.022 },
        { threshold: 2000, rate: 0.039 },
        { threshold: 5000, rate: 0.048 },
        { threshold: 10000, rate: 0.052 },
        { threshold: 20000, rate: 0.0555 },
        { threshold: 25000, rate: 0.066 },
        { threshold: 60000, rate: 0.0685 },
    ],
    FL: [
        // Florida (None)
    ],
    GA: [
        // Georgia
        { threshold: 0, rate: 0.01 },
        { threshold: 750, rate: 0.02 },
        { threshold: 2250, rate: 0.03 },
        { threshold: 3750, rate: 0.04 },
        { threshold: 5250, rate: 0.05 },
        { threshold: 7000, rate: 0.0575 },
    ],
    HI: [
        // Hawaii
        { threshold: 0, rate: 0.014 },
        { threshold: 2400, rate: 0.032 },
        { threshold: 4800, rate: 0.055 },
        { threshold: 9600, rate: 0.064 },
        { threshold: 14400, rate: 0.068 },
        { threshold: 19200, rate: 0.072 },
        { threshold: 24000, rate: 0.076 },
        { threshold: 36000, rate: 0.079 },
        { threshold: 48000, rate: 0.0825 },
        { threshold: 150000, rate: 0.09 },
        { threshold: 175000, rate: 0.1 },
        { threshold: 200000, rate: 0.11 },
    ],
    ID: [
        // Idaho
        { threshold: 0, rate: 0.01 },
        { threshold: 1588, rate: 0.03 },
        { threshold: 4762, rate: 0.045 },
        { threshold: 7936, rate: 0.06 },
        { threshold: 11912, rate: 0.065 },
        { threshold: 11913, rate: 0.069 },
    ],
    IL: [
        // Illinois (Flat tax rate)
        { threshold: 0, rate: 0.0495 },
    ],
    IN: [
        // Indiana (Flat tax rate)
        { threshold: 0, rate: 0.0323 },
    ],
    IA: [
        // Iowa
        { threshold: 0, rate: 0.0036 },
        { threshold: 1688, rate: 0.0072 },
        { threshold: 3376, rate: 0.0243 },
        { threshold: 6752, rate: 0.045 },
        { threshold: 15096, rate: 0.0612 },
        { threshold: 25160, rate: 0.0648 },
        { threshold: 33552, rate: 0.068 },
        { threshold: 50352, rate: 0.0792 },
        { threshold: 75528, rate: 0.0898 },
    ],
    KS: [
        // Kansas
        { threshold: 0, rate: 0.031 },
        { threshold: 15000, rate: 0.0525 },
        { threshold: 30000, rate: 0.057 },
    ],
    KY: [
        // Kentucky (Flat tax rate)
        { threshold: 0, rate: 0.05 },
    ],
    LA: [
        // Louisiana
        { threshold: 0, rate: 0.02 },
        { threshold: 12500, rate: 0.04 },
        { threshold: 50000, rate: 0.06 },
    ],
    ME: [
        // Maine
        { threshold: 0, rate: 0.058 },
        { threshold: 22200, rate: 0.0675 },
        { threshold: 52600, rate: 0.0715 },
    ],
    MD: [
        // Maryland
        { threshold: 0, rate: 0.02 },
        { threshold: 1000, rate: 0.03 },
        { threshold: 2000, rate: 0.04 },
        { threshold: 3000, rate: 0.0475 },
        { threshold: 100000, rate: 0.05 },
        { threshold: 125000, rate: 0.0525 },
        { threshold: 150000, rate: 0.055 },
        { threshold: 250000, rate: 0.0575 },
    ],
    MA: [
        // Massachusetts (Flat tax rate)
        { threshold: 0, rate: 0.05 },
    ],
    MI: [
        // Michigan (Flat tax rate)
        { threshold: 0, rate: 0.0425 },
    ],
    MN: [
        // Minnesota
        { threshold: 0, rate: 0.0535 },
        { threshold: 27520, rate: 0.068 },
        { threshold: 88080, rate: 0.0785 },
        { threshold: 164400, rate: 0.0985 },
    ],
    MS: [
        // Mississippi
        { threshold: 0, rate: 0.0 },
        { threshold: 5000, rate: 0.03 },
        { threshold: 10000, rate: 0.04 },
        { threshold: 15000, rate: 0.05 },
    ],
    MO: [
        // Missouri
        { threshold: 0, rate: 0.015 },
        { threshold: 1088, rate: 0.02 },
        { threshold: 2176, rate: 0.025 },
        { threshold: 3264, rate: 0.03 },
        { threshold: 4352, rate: 0.035 },
        { threshold: 5440, rate: 0.04 },
        { threshold: 6528, rate: 0.045 },
        { threshold: 7616, rate: 0.05 },
        { threshold: 8704, rate: 0.055 },
        { threshold: 9792, rate: 0.06 },
    ],
    MT: [
        // Montana
        { threshold: 0, rate: 0.01 },
        { threshold: 3100, rate: 0.02 },
        { threshold: 5400, rate: 0.03 },
        { threshold: 8200, rate: 0.04 },
        { threshold: 11300, rate: 0.05 },
        { threshold: 14500, rate: 0.06 },
        { threshold: 18600, rate: 0.069 },
    ],
    NE: [
        // Nebraska
        { threshold: 0, rate: 0.0246 },
        { threshold: 3480, rate: 0.0351 },
        { threshold: 20790, rate: 0.0501 },
        { threshold: 33360, rate: 0.0684 },
    ],
    NV: [
        // Nevada (Note: Nevada does not have a state income tax)
    ],
    NH: [
        // New Hampshire (Note: New Hampshire only taxes interest and dividends)
    ],
    NJ: [
        // New Jersey
        { threshold: 0, rate: 0.014 },
        { threshold: 20000, rate: 0.0175 },
        { threshold: 35000, rate: 0.035 },
        { threshold: 40000, rate: 0.05525 },
        { threshold: 75000, rate: 0.0637 },
        { threshold: 500000, rate: 0.0897 },
        { threshold: 1000000, rate: 0.1075 },
    ],
    NM: [
        // New Mexico
        { threshold: 0, rate: 0.017 },
        { threshold: 5500, rate: 0.032 },
        { threshold: 11000, rate: 0.047 },
        { threshold: 16000, rate: 0.049 },
        { threshold: 210000, rate: 0.059 },
    ],
    NY: [
        // New York
        { threshold: 0, rate: 0.04 },
        { threshold: 8500, rate: 0.045 },
        { threshold: 11700, rate: 0.0525 },
        { threshold: 13900, rate: 0.059 },
        { threshold: 21400, rate: 0.0621 },
        { threshold: 80650, rate: 0.0649 },
        { threshold: 215400, rate: 0.0685 },
        { threshold: 1077550, rate: 0.0882 },
    ],
    NC: [
        // North Carolina (Flat tax rate)
        { threshold: 0, rate: 0.0525 },
    ],
    ND: [
        // North Dakota
        { threshold: 0, rate: 0.011 },
        { threshold: 40925, rate: 0.0204 },
        { threshold: 98100, rate: 0.0227 },
        { threshold: 204675, rate: 0.0264 },
        { threshold: 445000, rate: 0.029 },
    ],
    OH: [
        // Ohio
        { threshold: 0, rate: 0.0 },
        { threshold: 25000, rate: 0.02765 },
        { threshold: 44250, rate: 0.03226 },
        { threshold: 88450, rate: 0.03688 },
        { threshold: 110650, rate: 0.03997 },
        { threshold: 221300, rate: 0.04246 },
        { threshold: 221300, rate: 0.04597 },
        { threshold: 221300, rate: 0.04997 },
    ],
    OK: [
        // Oklahoma
        { threshold: 0, rate: 0.005 },
        { threshold: 1000, rate: 0.01 },
        { threshold: 2500, rate: 0.02 },
        { threshold: 3750, rate: 0.03 },
        { threshold: 4900, rate: 0.04 },
        { threshold: 7200, rate: 0.05 },
    ],
    OR: [
        // Oregon
        { threshold: 0, rate: 0.045 },
        { threshold: 3650, rate: 0.0675 },
        { threshold: 9200, rate: 0.0875 },
        { threshold: 125000, rate: 0.099 },
    ],
    PA: [
        // Pennsylvania (Flat tax rate)
        { threshold: 0, rate: 0.0307 },
    ],
    RI: [
        // Rhode Island
        { threshold: 0, rate: 0.0375 },
        { threshold: 65250, rate: 0.0475 },
        { threshold: 148350, rate: 0.0599 },
    ],
    SC: [
        // South Carolina
        { threshold: 0, rate: 0.0 },
        { threshold: 3070, rate: 0.03 },
        { threshold: 6150, rate: 0.04 },
        { threshold: 9230, rate: 0.05 },
        { threshold: 12310, rate: 0.06 },
        { threshold: 15400, rate: 0.07 },
    ],
    SD: [
        // South Dakota (None)
    ],
    TN: [
        // Tennessee (None)
    ],
    TX: [
        // Texas (None)
    ],
    UT: [
        // Utah (Flat tax)
        { threshold: 0, rate: 0.0495 },
    ],
    VT: [
        // Vermont
        { threshold: 0, rate: 0.0335 },
        { threshold: 41650, rate: 0.066 },
        { threshold: 100000, rate: 0.076 },
        { threshold: 204000, rate: 0.0875 },
    ],
    VA: [
        // Virginia
        { threshold: 0, rate: 0.02 },
        { threshold: 3000, rate: 0.03 },
        { threshold: 5000, rate: 0.05 },
        { threshold: 17000, rate: 0.0575 },
    ],
    WA: [
        // Washington (None)
    ],
    WV: [
        // West Virginia
        { threshold: 0, rate: 0.03 },
        { threshold: 10000, rate: 0.04 },
        { threshold: 25000, rate: 0.045 },
        { threshold: 40000, rate: 0.06 },
        { threshold: 60000, rate: 0.065 },
    ],
    WI: [
        // Wisconsin
        { threshold: 0, rate: 0.0354 },
        { threshold: 12760, rate: 0.0465 },
        { threshold: 25520, rate: 0.0534 },
        { threshold: 280950, rate: 0.0627 },
    ],
    WY: [
        // Wyoming (None)
    ],
};

const stateCodes: { [key: string]: string } = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
};

export type { StateTaxBrackets, TaxBracket };
export { federalTaxBrackets, stateTaxBrackets, stateCodes };
