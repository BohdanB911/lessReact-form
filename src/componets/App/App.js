import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { validation  } from '../../utils/validation';
// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';



const  App = () =>  {
    const[data,setData] = useState(
        {
          name:{
              value:'',
              error:null
          },
          username:{
            value:'',
            error:null
        },
          email:{
            value:'',
            error:null
        },
          phone:{
            value:'',
            error:null
        },
          password:{
            value:'',
            error:null
        },
          confirmpassword:{
            value:'',
            error:null
        }
        }
    )

const [isChecked, setIsChecked] = useState(false);
// console.log(isChecked)
    
const handleCheckbox = ()=> {
    setIsChecked(!isChecked)
}

const handleSubmit = (e)=>{
    e.preventDefault()
};

const handleChange = (e) =>{
    e.preventDefault();
      if (e.target.type !== 'checkbox') {
        setData({ ...data, [e.target.name]: { value: e.target.value, error: null } });
      }
};

console.log(data)
const handleBlur = (e) =>{
    e.preventDefault();
    if(e.target.value){
      setData({ ...data, [e.target.name]: { value: e.target.value, error: validation([e.target.name], e.target.value) } });
    }
}


return(
    <div className='App'>
      <Form
         handleSubmit={handleSubmit}
      >
         <Input
            name="name"
            placeholder='Enter your name'
            label='Name'
            type='text'
            handleChange={handleChange}
            handleBlur={handleBlur}
            errorMsg={data.name.error}
         />
         <Input
            name='username'
            placeholder='Enter your nickname'
            label='User Name'
            type='text'
            handleChange={handleChange}
            handleBlur={handleBlur}
            errorMsg={data.username.error}
         />
         <Input
            name="email"
            placeholder='email'
            label='Email'
            type='email'
            handleChange={handleChange}
            handleBlur={handleBlur}
            errorMsg={data.email.error}
         />
         <Input
            name="phone"
            placeholder='+380 (67)-995-33-65'
            label='Your Phone'
            type='tel'
            handleChange={handleChange}
            handleBlur={handleBlur}
            errorMsg={data.phone.error}
         />
        <Input
              name="password"
              placeholder='Enter your passord'
              label='Your Pass'
              type='password'
              handleChange={handleChange}
              handleBlur={handleBlur}
              errorMsg={data.password.error}
        />
        <Input
            name="confirmpassord"
            placeholder='Enter your password'
            label='Pass'
            type='password'
            handleChange={handleChange}
            handleBlur={handleBlur}
            errorMsg={data.password.error}
        />
         <Checkbox
            name="terms"
            label='Ознакомлен с правилами'
            isChecked={isChecked}
            handleCheckbox={handleCheckbox}
            errorMsg={data.confirmpassword.error}
        />
      </Form>
    </div>
)



}

export default App;