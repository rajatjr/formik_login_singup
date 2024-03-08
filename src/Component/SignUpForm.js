import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Component/Style.css';

const SignUpForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>

        <div className="form-group">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <Field type="text" id="fullName" name="fullName" />
          <ErrorMessage name="fullName" component="div" className="error" />
        </div>

        <br/>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <br/>

        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>

        <br/>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field type="password" id="confirmPassword" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" className="error" />
        </div>

        <br/>

        <button type="submit">Sign Up</button>
        <br/>
      </div>
      
      </Form>
    </Formik>
  );
};

export default SignUpForm;
