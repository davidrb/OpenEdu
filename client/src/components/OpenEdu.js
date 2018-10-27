import React from 'react';

let OpenEdu = (props) => {
  let emailfield;
  let passwordfield;

  return (
    <div className="App">
      <p>{props.username ? "hello, " + props.username : "not logged in"}</p>
      <form action="#">
        <input ref={node => (emailfield = node)} />
        <input ref={node => (passwordfield = node)} />
        <button onClick={() => props.login(emailfield.value, passwordfield.value)}>Log In</button>
        <button onClick={() => props.logout()}>Logout</button>
      </form>
      { props.error ? <p>{props.error}</p> : null }
    </div>
  );
}

export default OpenEdu;
