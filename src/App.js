import Sidebar from "./Components/Sidebar";
import MainContainer from "./Components/MainContainer";

import { useState } from "react"
function App() {
  const [showSidebar, setSidebar] = useState(false);

  return (
    <>
      <div className={`min-h-screen max-h-fit bg-[#FAFAFA] flex w-screen ${showSidebar ? "max-sm:h-screen max-sm:overflow-hidden" : ""}`}>
        <Sidebar showSidebar={showSidebar} />
        <MainContainer showSidebar={showSidebar} setSidebar={setSidebar} />
      </div>
    </>
  );
}

export default App;
