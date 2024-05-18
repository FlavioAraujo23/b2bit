import Input from './../../Components/Input';
import logo from '../../assets/B2BitLogo.png';

import { Formik, Form, ErrorMessage } from 'formik';
import { loginUser } from '../../controllers/AuthController';
import { UserCredentials } from '../../types/apiResponse';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#FAFAFA]">
      <div className="shadow-2xl w-[438px] h-[534px] flex justify-around items-center flex-col rounded-[18px]">
        <img src={logo} alt="" className="w-[295px] h-[116px] mt-5" />
        <Formik
          initialValues={{ email: '', password: '', general: '' || undefined }}
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
              navigate('/profile');
            } catch (error) {
              if (typeof error === 'string') {
                // Se for uma string, provavelmente é a mensagem de erro
                setErrors({ general: error });
              } else if (error instanceof Error) {
                // Se for um objeto de erro, capturar a mensagem de erro
                setErrors({ general: error.message });
              } else {
                // Se for de outro tipo, definir uma mensagem de erro genérica
                setErrors({ general: 'An unexpected error occurred' });
              }
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
                label="E-mail"
                labelStyle="font-bold text-lg text-[#262626]"
                placeholder="@gmail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="flex bg-[#f1f1f1] rounded-lg w-[385px] h-[54px] outline-none p-2 mb-4"
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
                label="Password"
                labelStyle="font-bold text-lg text-[#262626]"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="flex bg-[#f1f1f1] rounded-lg w-[385px] h-[54px] outline-none p-2"
              />
              <ErrorMessage
                className="text-red-400"
                name="password"
                component="div"
              />
              {errors.general !== undefined && (
                <div className="text-red-400 error-message">
                  {typeof errors.general === 'string'
                    ? errors.general
                    : (errors.general as Error).message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-[385px] h-[54px] bg-[#02274F] rounded-lg text-white font-bold mt-9"
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
