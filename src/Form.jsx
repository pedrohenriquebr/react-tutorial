import { useState } from "react";

const Form = ({handleSubmit}) => {
  
  const initState = {
    name: "",
    job: "",
  };

  const [state,setState] = useState(initState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log({name, value});
    setState({...state,
      [name]: value,
    });
  };


  const submitForm = () => {
    handleSubmit(state);
    setState(initState);
  };

  const { name, job } = state;

  return (
    <form>
     <div className="input-field">
     <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}
      />
     </div>
      <div className="input-field">
        <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={job}
        onChange={handleChange}
      /></div>
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
}

export default Form;
