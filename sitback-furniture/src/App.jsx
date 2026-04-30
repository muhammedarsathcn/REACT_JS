import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import RoutePage from "./routes/RoutePage";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Toaster />
        <RoutePage />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
