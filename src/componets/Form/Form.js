import '../Form/Form.css'

const Form = ( { children, handleSubmit})=>{
return(
    <form onSubmit={handleSubmit}>
       {children}
       <button type="submit">
           SEND
       </button>
    </form>
)
};
export default Form;
 