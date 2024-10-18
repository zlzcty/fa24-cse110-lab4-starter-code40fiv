import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContextExpenses";
import { MyBudgetTracker } from "./views/MyBudgetTracker";

const App = () => {
  return (
    <AppProvider>
      <MyBudgetTracker />
    </AppProvider>
  );
};

export default App;
