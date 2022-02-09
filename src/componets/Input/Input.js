

const Input = (props) =>{
    const {name,placeholder,type,label,handleChange, handleBlur,isChecked,handleCheckbox,errorMsg} = props;
   
    return(
      <label htmlFor={name}>
          {label}
           <input onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder={placeholder}
                  name={name}
                  type={type} 
                  checked={isChecked}
                  onClick={handleCheckbox}
               />
                {!!errorMsg && <span>{errorMsg}</span>}
      </label>
           
       )
}

export default Input;