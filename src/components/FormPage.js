import {React} from 'react'
import PersonalInfo from './PersonalInfo'
import ResidencyInfo from './ResidencyInfo'
import Success from './Success'
import FormHead from './FormHead'
import { useStep } from '../context/FormContext';
import BankVerify from './BankVerify'
const FormPage = ({type}) => {
  const {step,onStepChange,setData,handleSubmit}=useStep();
  const onSubmit= (data) => {
    // console.log(data);//all data come inside "data" variable
    setData({[type]:data});
    onStepChange(step<4?step+1:step);
  }
  
  return (
    <div className='main-form'>
        {step<4 && <FormHead/>}{/*component for common header*/}
        <form onSubmit={handleSubmit(onSubmit)} className='input-group'>
            {/*break it into three  different components*/}
           
            {
              step===1 && <PersonalInfo/>
            }
            {
              step===2 && <ResidencyInfo/>
            }
            {
              step===3 && <BankVerify/>
            }
            </form>
            {
              step===4 && <Success/>
            }

        </div>
  )
}

export default FormPage
