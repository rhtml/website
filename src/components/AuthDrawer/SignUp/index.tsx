import React, { Fragment, useCallback } from 'react';
import { useAuthentication } from '../../../wrappers/Authentication';
import Submit from '../../../forms/fields/Submit';
import Input from '../../../forms/fields/Input';
import useStyles from '../css';
import Form from '../../../forms/Form';
import Errors from '../../../forms/Errors';
import { Props } from './types';
import Anchor from '../../Anchor';

const SignUp: React.FC<Props> = (props) => {
  const { setContent } = props;
  const { setUser } = useAuthentication();
  const authDrawerClasses = useStyles();
  // const { closeAll: closeAllModals } = useModal();

  const onResponse = useCallback((response) => {
    const { status } = response;
    if (status === 201) {
      const { json: { doc: { user: incomingUser } } } = response;
      setUser(incomingUser);
      // if (incomingUser) closeAllModals();
    }
  }, [setUser]);


  return (
    <Fragment>
      <h3>
        Sign up
      </h3>
      <Form
        onResponse={onResponse}
        method="post"
        action={`${process.env.NEXT_PUBLIC_CMS_URL}/api/users`}
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
          passwordConfirm: {
            value: '',
            validation: (incomingValue) => ({
              isValid: Boolean(incomingValue),
              message: 'Confirm Password is required',
            }),
          },
        }}
        htmlAttributes={{
          autoComplete: 'on',
        }}
      >
        <div>
          <b>
            It's free to get started
          </b>
        </div>
        <Errors />
        <Input
          {...{
            type: 'email',
            name: 'email',
            id: 'SignUpDrawerEmail',
            label: 'Email Address',
            required: true,
          }}
        />
        <Input
          {...{
            type: 'password',
            name: 'password',
            id: 'SignUpDrawerPassword',
            label: 'Password',
            required: true,
          }}
        />
        <Input
          {...{
            type: 'password',
            name: 'passwordConfirm',
            id: 'SignUpDrawerPasswordConfirm',
            label: 'Confirm Password',
            required: true,
          }}
        />
        <div>
          <Submit label="Sign up" />
        </div>
        <div>
          Already have an account?
          {' '}
          <Anchor
            onClick={() => setContent('logIn')}
            label="Sign in here"
          />
          .
        </div>
      </Form>
    </Fragment>
  );
};

export default SignUp;
