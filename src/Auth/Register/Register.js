import React, { useState } from 'react';
import {
  Row, Col, Form, FormGroup,
  Label, Input,
  Button, Spinner,
} from 'reactstrap';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { registerUserRequest } from '../../reducers/auth/AuthAction';

import './register.css';

export const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    type: 'customer'
  });
  const [loading, setLoading] = useState(false);
  console.log('formDataValue', formData);

  const onSubmit = async () => {
    console.log('checkSubmit');
    setLoading(true);
    try {
      await dispatch(registerUserRequest(formData)).$promise;
    } catch (error) {
      //
    } finally {
      setLoading(false);
      history.push('/auth');
    }
  };

  return (
    <div className="register-container">
      <Row>
        <Col xs={8} style={{ textAlign: 'left' }}>
          <Form style={{ marginBottom: '10px' }}>
            <FormGroup style={{ marginBottom: '10px' }}>
              <Label for="name-register">
                Name
              </Label>
              <Input
                id="name-register"
                name="name"
                placeholder="Enter your name"
                type="name"
                onChange={(e) => setFormData({
                  ...formData,
                  name: e?.target?.value
                })}
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: '10px' }}>
              <Label for="email-register">
                Email
              </Label>
              <Input
                id="email-register"
                name="email"
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setFormData({
                  ...formData,
                  email: e?.target?.value
                })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="type-select">
                Type
              </Label>
              <Input
                id="type-select"
                name="select"
                type="select"
                onChange={(e) => setFormData({
                  ...formData,
                  type: e.target.value
                })}

              >
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Password
              </Label>
              <Input
                id="email-login"
                name="email"
                placeholder="Enter your password"
                type="password"
                onChange={(e) => setFormData({
                  ...formData,
                  password: e?.target?.value
                })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Confirm Password
              </Label>
              <Input
                id="email-login"
                name="email"
                placeholder="Enter your password"
                type="password"
                onChange={(e) => setFormData({
                  ...formData,
                  password_confirmation: e?.target?.value
                })}
              />
            </FormGroup>
          </Form>
          <div>
            <Button
              onClick={onSubmit}
              disabled={loading}
            >
              {loading ? <Spinner size="sm" /> : ''} Register
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;