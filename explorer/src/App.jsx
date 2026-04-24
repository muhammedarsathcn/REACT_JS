import Navbar from "./components/Navbar/Navbar";
import Routings from "./routes/Routings";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Toaster />
      <Routings />
    </>
  );
};

export default App;
