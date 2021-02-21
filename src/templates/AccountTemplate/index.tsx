import React, { useCallback } from 'react';
import { Props } from './types';
import useStyles from './css';
import MaxWidth from '../../components/MaxWidth';
import Form from '../../forms/Form';
import { useAuthentication } from '../../wrappers/Authentication';
import Input from '../../forms/fields/Input';

const AccountTemplate: React.FC<Props> = () => {
  const {
    setUser,
    user: {
      name,
      id: userID,
    },
  } = useAuthentication();

  const classes = useStyles();

  const handleResponse = useCallback((json) => {
    const {
      doc: incomingUser,
    } = json;

    setUser(incomingUser);
  }, [setUser]);

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <h1>
          Account
        </h1>
      </header>
      <div className={classes.priceBlock}>
        <MaxWidth className={classes.maxWidth}>
          <Form
            method="put"
            action={`${process.env.NEXT_PUBLIC_CMS_URL}/api/users/${userID}`}
            onResponse={handleResponse}
            className={classes.form}
            defaultValues={{
              name: {
                value: name,
              },
            }}
          >
            <Input
              name="name"
              type="text"
              label="Name"
            />
          </Form>
        </MaxWidth>
      </div>
    </div>
  );
};

export default AccountTemplate;
