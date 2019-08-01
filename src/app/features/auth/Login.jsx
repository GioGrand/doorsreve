import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "../../../utils/hooks";

import { AuthContext } from "./../../../context/auth";

function LoginForm(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
    password: ""
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      console.log(result.data.login);
      context.login(result.data.login);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <section class='min-vh-100 py-5'>
      <div class='container'>
        <div class='row justify-content-center pt-6'>
          <div class='col-xl-4 col-lg-5 col-md-6'>
            <div class='text-center mb-4'>
              <h1 class='mb-1'>Welcome back</h1>
              <span>Enter your account details below</span>
            </div>
            <form onSubmit={onSubmit}>
              <div class='form-group'>
                <input
                  placeholder='email'
                  name='email'
                  value={values.email}
                  onChange={onChange}
                  type='email'
                  class='form-control form-control-lg'
                />
              </div>
              <div class='form-group'>
                <input
                  placeholder='password'
                  name='password'
                  value={values.password}
                  onChange={onChange}
                  type='password'
                  class='form-control form-control-lg'
                />
                {Object.keys(errors).length > 0 && (
                  <ul className='list-group list-group-flush mt-2'>
                    {Object.values(errors).map(value => (
                      <li class='list-group-item' key={value}>
                        {value}
                      </li>
                    ))}
                  </ul>
                )}
                <small class='mt-2'>
                  <a href='#'>Forgot your password?</a>
                </small>
              </div>
              <div class='form-group'>
                <button
                  class='d-flex justify-content-center align-items-center btn-block text-center btn btn-lg btn-primary'
                  type='submit'
                >
                  {loading ? (
                    <ReactLoading
                      type='spin'
                      color='#ffffff'
                      height={30}
                      width={30}
                    />
                  ) : (
                    "Sign in"
                  )}
                </button>
              </div>
              <div class='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='login-remember'
                />
                <label
                  class='custom-control-label text-small text-muted'
                  for='login-remember'
                >
                  Keep me signed in
                </label>
              </div>
              <hr />
              <div class='text-center text-small text-muted'>
                <span>
                  Don't have an account yet? <a href='#'>Create one</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      firstName
      lastName
      createdAt
      token
    }
  }
`;

export default LoginForm;
