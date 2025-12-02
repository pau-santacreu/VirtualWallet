import { useState } from "react";
import TerminalIntro from "./components/TerminalIntro";
import BentoGrid from "./components/BentoGrid";
import { profileData } from "./config/profileData";

function App() {
  const [showTerminal, setShowTerminal] = useState(true);

  return (
    <>
      {showTerminal ? (
        <TerminalIntro 
          config={profileData.terminal} 
          onComplete={() => setShowTerminal(false)} 
        />
      ) : (
        <BentoGrid data={profileData} />
      )}
    </>
  );
}

export default App;