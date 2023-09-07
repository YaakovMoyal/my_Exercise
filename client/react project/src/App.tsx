import "./App.css";
import Router from "./Components/Router";
import IDProvider from "./providers/ID_Provider";
function App() {
  return (
    <>
      <IDProvider>
        <Router />
      </IDProvider>
    </>
  );
}

export default App;
