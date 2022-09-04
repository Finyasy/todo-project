import React from 'react'

function Form() {
  const[formData, setFormData]=useState({title:'')

  function addTitle(){
    fetch('http://localhost:9292/lists',
    {method:'POST',
    headers: {
        'Content-type':'application/json',
    },
    body:JSON.stringify(formData),
    })
}
  return (
    <form>
        <label>Title</label>
        <br />
        <input
          className='input_type' 
          type="text" 
          placeholder="My_text_here" 
          // onChange= {e => createList (e.target.value)}
          />
        <button type="submit">Submit</button>
      </form>
  )
}

export default Form