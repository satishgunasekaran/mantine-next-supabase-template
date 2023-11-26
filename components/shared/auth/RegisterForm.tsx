'use client';
import React, { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from '@mantine/core';
import classes from './RegisterForm.module.css';
import axios from 'axios';
import { getSupabaseUIClient } from '@/app/utils/supabase';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [error, setError] = useState('');

  const supabase = getSupabaseUIClient();

  const handleInputChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password, confirmPassword, agreeToTerms } = formData;

    if (password === confirmPassword && agreeToTerms) {
      
      try {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });

        if (error) {
          setError(error.message); // Set error message if there's an error
        } else {
          setError(''); // Clear error if there's no error
          console.log(data);
          alert('Check your email for confirmation');
        }
      } catch (error: any) {
        setError(error.message); // Set error message for any unexpected error
      }
    } else {
      setError('Passwords do not match or terms are not agreed'); // Set error for password mismatch or terms not agreed
    }
  };

  const { email, password, confirmPassword, agreeToTerms } = formData;

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Create an Account
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{' '}
        <Anchor
          size="sm"
          component="button"
          onClick={() => {
            window.location.href = '/login';
          }}
        >
          Login
        </Anchor>
      </Text>

      <form onSubmit={handleSubmit}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            mt="md"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            required
            mt="md"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
          />
          <Checkbox
            label="I agree to the terms and conditions"
            mt="lg"
            name="agreeToTerms"
            checked={agreeToTerms}
            onChange={handleInputChange}
          />
          {error && (
            <Text color="red" mt={10} ta="center">
              {error}
            </Text>
          )}
          <Button type="submit" fullWidth mt="xl">
            Register
          </Button>
        </Paper>
      </form>
    </Container>
  );
};

export default RegisterForm;
