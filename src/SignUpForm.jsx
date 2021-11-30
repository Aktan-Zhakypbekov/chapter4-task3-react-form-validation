import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {
  const values = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const validate = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'First name should be at least 2 characters or more')
      .max(30, 'First name cannot be longer than 30 characters')
      .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
      .required('First name required'),
    lastName: Yup.string()
      .min(2, 'Last name should be at least 2 characters or more')
      .max(40, 'Last name cannot be longer than 40 characters')
      .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
      .required('Last name required'),
    email: Yup.string().email('Wrong email format').required('Email required'),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
        'Password must contain at least 1 number, 1 lowercase and 1 uppercase letter and must be between 6 and 20 characters'
      )
      .required('Password required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords do not match')
      .required('You need to confirm your password'),
  });
  return (
    <Formik
      initialValues={values}
      validationSchema={validate}
      onSubmit={() => {
        alert('Submitted!');
      }}
    >
      {(formik) => {
        const { errors, touched, dirty, isValid } = formik;
        return (
          <div className='form-cont'>
            <div className='form-title'>
              <h2>Sign Up Form</h2>
            </div>
            <Form className='form'>
              <div className='input-cont'>
                <div className='input-cont__inner'>
                  <label htmlFor='firstName'>First name</label>
                  <Field
                    type='text'
                    name='firstName'
                    className={
                      errors.firstName && touched.firstName
                        ? 'input-error'
                        : 'input-field'
                    }
                  />
                  <ErrorMessage
                    name='firstName'
                    component='div'
                    className='error-msg'
                  />
                </div>
              </div>
              <div className='input-cont'>
                <div className='input-cont__inner'>
                  <label htmlFor='lastName'>Last name</label>
                  <Field
                    type='text'
                    name='lastName'
                    className={
                      errors.lastName && touched.lastName
                        ? 'input-error'
                        : 'input-field'
                    }
                  />
                  <ErrorMessage
                    name='lastName'
                    component='div'
                    className='error-msg'
                  />
                </div>
              </div>
              <div className='input-cont'>
                <div className='input-cont__inner'>
                  <label htmlFor='email'>Email</label>
                  <Field
                    type='email'
                    name='email'
                    className={
                      errors.email && touched.email
                        ? 'input-error'
                        : 'input-field'
                    }
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className='error-msg'
                  />
                </div>
              </div>
              <div className='input-cont'>
                <div className='input-cont__inner'>
                  <label htmlFor='password'>Password</label>
                  <Field
                    type='password'
                    name='password'
                    className={
                      errors.password && touched.password
                        ? 'input-error'
                        : 'input-field'
                    }
                  />
                  <ErrorMessage
                    name='password'
                    component='div'
                    className='error-msg'
                  />
                </div>
              </div>
              <div className='input-cont'>
                <div className='input-cont__inner'>
                  <label htmlFor='confirmPassword'>Confirm password</label>
                  <Field
                    type='password'
                    name='confirmPassword'
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? 'input-error'
                        : 'input-field'
                    }
                  />
                  <ErrorMessage
                    name='confirmPassword'
                    component='div'
                    className='error-msg'
                  />
                </div>
              </div>
              <button type='submit' disabled={!(dirty && isValid)}>
                Sign Up
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
