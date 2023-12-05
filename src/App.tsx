import { CalculatorProvider } from "@/CalculatorContext";
import { StatesDropdown, IncomeInput, NetIncome } from "@/components";
import "./App.scss";

function App() {
    return (
        <CalculatorProvider>
            <div className="calculator">
                <StatesDropdown />
                <IncomeInput />
                <NetIncome />
            </div>
        </CalculatorProvider>
    );
}

export default App;
