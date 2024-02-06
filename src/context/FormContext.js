import {useContext,createContext, useState} from "react"
import {useForm} from 'react-hook-form';

export const FormContext=createContext();

const FormProvider=({children})=>{
    const methods=useForm({mode:"all"});
    const [step,setStep]=useState(0);
    const [data,setData]=useState({});

    const onStepChange=(newStep)=>{
        setStep(newStep);
    }
    return(
        <FormContext.Provider value={{ step, onStepChange,data,setData,...methods}}>{/*spreading all the methods*/}
        {children}
       </FormContext.Provider>
    )
}
export const useStep = () => {
    return useContext(FormContext);
};
export default FormProvider;