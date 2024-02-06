import "./App.css";
import { img1 } from "./components/Icon";
import FormPage from "./components/FormPage";
import FirstPage from "./components/FirstPage";
import { useStep } from "./context/FormContext";
import { useState } from "react";
function App() {
  const { step } = useStep();
  const [type,settype]=useState("");
  const handletype=(data)=>{
    settype(data);
  }
  return (
    <div className="app">
      <div className="wrapper">
        <div className="onboarding_left_image">
          <img src={img1} alt="img" />
        </div>
        <div className="onboarding_right">
          {step === 0 && <FirstPage onsubmit={handletype}/>}
          {step > 0 && <FormPage type={type}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
