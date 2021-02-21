import React, { useState, useCallback } from 'react';
import Submit from '../../../forms/fields/Submit';
import useStyles from '../css';
import Input from '../../../forms/fields/Input';
import Form from '../../../forms/Form';
import Errors from '../../../forms/Errors';
import { Props } from './types';
import Anchor from '../../Anchor';

const ResetPassword:React.FC<Props> = (props) => {
  const { setContent } = props;
  const authDrawerClasses = useStyles();
  const [success, setSuccess] = useState(false);

  const onResponse = useCallback((response) => {
    const { status } = response;
    if (status === 200) {
      setSuccess(true);
    }
  }, [setSuccess]);

  return (
    <div>
      <h3>
        Reset password
      </h3>
      <Form
        method="post"
        action={`${process.env.NEXT_PUBLIC_CMS_URL}/api/users/forgot-password`}
        onResponse={onResponse}
        className={authDrawerClasses.form}
        defaultValues={{
          email: {
            value: '',
            validation: (incomingValue) => ({
              isValid: Boolean(incomingValue),
              message: 'Email is required',
            }),
          },
        }}
        htmlAttributes={{
          autoComplete: 'on',
        }}
      >
        <div>
          <b>
            Can’t remember your password? No worries. Enter your email to reset it securely.
          </b>
        </div>
        <Errors />
        {success && (
          <p>Email sent! Please check your inbox for instructions on how to reset your password.</p>
        )}
        <Input
          {...{
            type: 'email',
            name: 'email',
            id: 'resetPasswordEmail',
            label: 'Email Address',
            required: true,
          }}
        />
        <div>
          <Submit label="Send reset instructions" />
        </div>
        <div>
          {'You can also '}
          <Anchor
            onClick={() => setContent('logIn')}
            label="try again"
          />
          {' or create a '}
          <Anchor
            onClick={() => setContent('signUp')}
            label="new account"
          />
          .
        </div>
      </Form>
    </div>
  );
};

export default ResetPassword;
