import { PlaceProvider } from "./context/PlaceContext";
import Routings from "./routes/Routings";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Toaster />
      <PlaceProvider>
        <Routings />
      </PlaceProvider>
    </>
  );
};

export default App;
