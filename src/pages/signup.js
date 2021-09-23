import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "../components/Button";

const Wrapper = styled.div`
    border: 1px solid f5f4f0;
    max-width: 500px;
    padding: 1em;
    margin: 0 auto;
`;

const Form = styled.form`
    label,
    input {
        display: block;
        line-height: 2em;
    }
    input {
        width: 100%;
        margin-bottom: 1em;
    }
`;

// include the props passed to the component for later use
const SignUp = (props) => {
    // set the default state of the form
    const[values, setValues] = useState();

    // update the statet when a user types in the form
    const onChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

  useEffect(() => {
    //update the document title
    document.title = "Sign Up - Bincast";
  });

  return (
    <Wrapper>
    <h2>Sign Up</h2>
      <Form
        onSubmit={event => {
            event.preventDefault();
            console.log(values);
        }}
      >
          <label htmlFor="username">Username:</label>
          <input 
            required
            type="text"
            id="username"
            name="username"
            placeholder="username"
            onChange={onChange}
          />
          <label htmlFor="email">Email:</label> 
          <input 
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          />
          <label htmlFor="password">Password:</label>
          <input 
            required
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
