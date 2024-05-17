import Input from './../../Components/Input';
import logo from '../../assets/B2BitLogo.png';

import { Formik, Form, ErrorMessage } from 'formik';
import { loginUser } from '../../controllers/AuthController';
import { UserCredentials } from '../../types/apiResponse';

const SignInPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="shadow-2xl w-[438px] h-[534px] flex justify-around items-center flex-col">
        <img src={logo} alt="" className="w-[295px] h-[116px] mt-5" />
        <Formik
          initialValues={{ email: '', password: '', general: '' }}
          validate={(values) => {
            const errors: {
              email?: string;
              password?: string;
              general?: { error: string };
            } = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          onSubmit={async (
            values: UserCredentials,
            { setSubmitting, setErrors }
          ) => {
            try {
              await loginUser(values);
            } catch (error) {
              if (error instanceof Error) setErrors({ general: error });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ values, errors, handleChange, handleBlur, isSubmitting }) => (
            <Form>
              <Input
                type="email"
                name="email"
                placeholder="@gmail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="flex bg-[#f1f1f1] rounded-lg w-[385px] h-[54px] outline-none p-2"
              />
              <ErrorMessage
                className="text-red-400"
                name="email"
                component="div"
              />

              <Input
                type="password"
                name="password"
                placeholder="****************"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="flex bg-[#f1f1f1] rounded-lg w-[385px] h-[54px] outline-none p-2 mt-6"
              />
              <ErrorMessage
                className="text-red-400"
                name="password"
                component="div"
              />
              {errors.general && (
                <div className="text-red-400">{errors.general.message}</div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-[385px] h-[54px] bg-[#02274F] rounded-lg text-white mt-9"
              >
                Sign in
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInPage;
