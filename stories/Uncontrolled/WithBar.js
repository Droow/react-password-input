import React from 'react';

import PasswordInput from '../../src/react-password-indicator';
import Code from '../utils/Code';

const Basic = () => (
  <div>
    <h2>Progress Bar</h2>
    <PasswordInput
      minLen={5}
      digits={2}
      specialChars={2}
      uppercaseChars={2}
      maxLen={12}
      mustMatch="mYsUp3rp4$$"
      defaultMessages={{ mustMatch: (val) => `Password must be exactly ${val}`}}
    >
      {({ getInputProps, getProgressProps, valid, hasRulePassed, rules, errors, touched }) => (
        <React.Fragment>
          <p>
            Enter password:
            <input {...getInputProps()} className={touched ? (valid ? 'success' : 'error') : ''} />
          </p>
          {touched && (
            <div>
              <progress {...getProgressProps()} />
              <p>Password is {!valid && 'in'}valid!</p>
            </div>
          )}
          <p>
            Password rules:
            <ul>
              {rules.map((r) => (
                <li key={r.key} className={touched ? (hasRulePassed(r.key) ? 'success' : 'error') : ''}>{r.message}</li>
              ))}
            </ul>
          </p>
        </React.Fragment>
      )}
    </PasswordInput>
    <Code language="language-jsx">
      {`<PasswordInput
  minLen={5}
  digits={2}
  specialChars={2}
  uppercaseChars={2}
  maxLen={12}
  mustMatch="mYsUp3rp4$$"
  defaultMessages={{ mustMatch: (val) => \`Password must be exactly \${val}\`}}
>
  {({ getInputProps, getProgressProps, valid, hasRulePassed, rules, errors, touched }) => (
    <React.Fragment>
      <p>
        Enter password:
        <input {...getInputProps()} className={touched ? (valid ? 'success' : 'error') : ''} />
      </p>
      {touched && (
        <div>
          <progress {...getProgressProps()} />
          <p>Password is {!valid && 'in'}valid!</p>
        </div>
      )}
      <p>
        Password rules:
        <ul>
          {rules.map((r) => (
            <li
              key={r.key}
              className={touched ? (hasRulePassed(r.key) ? 'success' : 'error') : ''}
            >
              {r.message}
            </li>
          ))}
        </ul>
      </p>
    </React.Fragment>
  )}
</PasswordInput>`}
    </Code>
  </div>
);

export default Basic;