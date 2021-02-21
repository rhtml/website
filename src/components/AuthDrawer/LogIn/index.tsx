import React, { Fragment, useCallback } from 'react';
import { useAuthentication } from '../../../wrappers/Authentication';
import Submit from '../../../forms/fields/Submit';
import Input from '../../../forms/fields/Input';
import useStyles from '../css';
import Form from '../../../forms/Form';
import Errors from '../../../forms/Errors';
import { Props } from './types';
import Anchor from '../../Anchor';

const Login: React.FC<Props> = (props) => {
  const { setContent } = props;
  const { setUser } = useAuthentication();
  const authDrawerClasses = useStyles();
  // const { closeAll: closeAllModals } = useModal();

  const onResponse = useCallback((response) => {
    const { status } = response;
    if (status === 200) {
      const { json: { user: incomingUser } } = response;
      if (incomingUser) setUser(incomingUser);
      // closeAllModals();
    }
  }, [setUser]);

  return (
    <Fragment>
      <h3>
        Log in
      </h3>
      <Form
        onResponse={onResponse}
        method="post"
        action={`${process.env.NEXT_PUBLIC_CMS_URL}/api/users/login`}
        className={authDrawerClasses.form}
        defaultValues={{
          email: {
            value: '',
            validation: (incomingValue) => ({
              isValid: Boolean(incomingValue),
              message: 'Email is required',
            }),
          },
          password: {
            value: '',
            validation: (incomingValue) => ({
              isValid: Boolean(incomingValue),
              message: 'Password is required',
            }),
          },
        }}
        htmlAttributes={{
          autoComplete: 'on',
        }}
      >
        <div>
          <b>
            {'Don\'t have an an account yet? '}
          </b>
          <Anchor
            onClick={() => setContent('signUp')}
            label="Sign up"
          />
          .
        </div>
        <Errors />
        <Input
          {...{
            type: 'email',
            name: 'email',
            id: 'LogInEmail',
            label: 'Email Address',
            required: true,
          }}
        />
        <Input
          {...{
            type: 'password',
            name: 'password',
            id: 'LogInPassword',
            label: 'Password',
            required: true,
          }}
        />
        <div>
          <Anchor
            onClick={() => setContent('resetPassword')}
            label="Forgot your password?"
          />
        </div>
        <Submit label="Log in" />
      </Form>
    </Fragment>
  );
};

export default Login;
