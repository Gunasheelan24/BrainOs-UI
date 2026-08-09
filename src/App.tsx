import React from "react";

export interface AppProps {
  isLanding?: boolean;
}

const App: React.FC<AppProps> = ({ isLanding }) => {
  return (
    <>
      <h1>Welcome to React Project {isLanding}</h1>
    </>
  );
};

export default App;
