import React, { useState } from 'react';
import {
  Row, Col, Form, FormGroup,
  Label, Input,
  Button, Spinner,
} from 'reactstrap';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loginRequest } from '../../reducers/auth/AuthAction';

import './login.css';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  console.log('formDataValue', formData);

  const onSubmit = async () => {
    console.log('checkSubmit');
    setLoading(true);
    try {
      await dispatch(loginRequest(formData)).$promise;
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Row>
        <Col xs={8} style={{ textAlign: 'left' }}>
          <Form style={{ marginBottom: '10px' }}>
            <FormGroup className="position-relative" style={{ marginBottom: '10px' }}>
              <Label for="email-login">
                Email
              </Label>
              <Input
                id="email-login"
                name="email"
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setFormData({
                  ...formData,
                  email: e?.target?.value
                })}
              />
            </FormGroup>
            <FormGroup className="position-relative">
              <Label for="password-login">
                Password
              </Label>
              <Input
                id="password-login"
                name="password"
                placeholder="Enter your password"
                type="password"
                onChange={(e) => setFormData({
                  ...formData,
                  password: e?.target?.value
                })}
              />
            </FormGroup>
          </Form>
          <div>
            <Button
              onClick={onSubmit}
              disabled={loading}
            >
              {loading ? <Spinner size="sm" /> : ''} Login
            </Button>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <Col>
          <span>Don't have an account?
            <a
              href="javascript:;"
              onClick={() => history.push('/auth/register')}
              style={{ cursor: 'pointer', marginLeft: '5px' }}
            >
              Register
            </a>
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default Login;