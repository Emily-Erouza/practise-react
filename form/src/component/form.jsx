import React from 'react';
// import Display from './Display';

function Form({email,password,handlesubmit,list,setPassword,setEmail}) {
  return (
    <div className='container'>
<form onSubmit={handlesubmit}>
<label for='email'>Email</label>
<input  className='form-control' type='email'  onChange={(e)=> setEmail(e.target.value) }/>


<input className='form-control' type = 'password' placeholder='password' onChange={(e)=> setPassword(e.target.value) }/>

<input className="btn btn-info" type="submit" value="send" />

</form>
</div>
  )
}

export default Form
