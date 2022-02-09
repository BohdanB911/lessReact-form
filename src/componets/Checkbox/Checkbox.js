const Checkbox = ({name,label,isChecked,handleCheckbox})=> {
    return(
       <label htmlFor={name}>
          {label}
          <br/>
           <input 
                  onChange={handleCheckbox}
                  name={name}
                  type='checkbox' 
                  checked={isChecked}
                 
               />
      </label>
    )
};

export default Checkbox;