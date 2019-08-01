import React, { useContext, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "../utils/hooks";

import { AuthContext } from "./../context/auth";
import { ReactLoading } from "react-loading";

function Register(props) {
  const context = useContext(AuthContext);

  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result) {
      console.log(result);
      context.login(result.data.register);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });

  function registerUser() {
    addUser();
  }

  return (
    <div className='form-container'>
      <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ""}>
        <h1>Register</h1>
        <Form.Input
          label='username'
          placeholder='username'
          name='username'
          value={values.username}
          onChange={onChange}
          type='text'
        />
        <Form.Input
          label='email'
          placeholder='email'
          name='email'
          value={values.email}
          onChange={onChange}
          type='email'
        />
        <Form.Input
          label='password'
          placeholder='password'
          name='password'
          value={values.password}
          onChange={onChange}
          type='password'
        />
        <Form.Input
          label='confirm Password'
          placeholder='confirm Password'
          name='confirmPassword'
          value={values.confirmPassword}
          onChange={onChange}
          type='password'
        />
        <Button type='submit' primary>
          {loading ? (
            <ReactLoading type='spin' color='#ffffff' height={30} width={30} />
          ) : (
            "Register"
          )}
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className='ui error message'>
          <ul className='list'>
            {Object.values(errors).map(value => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
