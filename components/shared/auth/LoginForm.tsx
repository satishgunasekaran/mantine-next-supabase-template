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
  Group,
  Button,
} from '@mantine/core';
import classes from './LoginForm.module.css';
import { getSupabaseUIClient } from '@/app/utils/supabase';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const supabase = getSupabaseUIClient();

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Your authentication logic here (for demonstration, we're logging in)
    try {
      
      const { error } = await supabase.auth.signInWithPassword ({
        email: email,
        password: password,
      });

      if (error) {
        setError(error.message); // Set error message if there's an error
      } else {
        setError(''); // Clear error if there's no error
        window.location.href = '/';
      }


    } catch (err) {
      setError('Authentication failed. Please try again.');
      // Handle other errors if needed
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor
          size="sm"
          component="button"
          onClick={() => {
            window.location.href = '/register';
          }}
        >
          Create account
        </Anchor>
      </Text>

      <form onSubmit={handleSignIn}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          {/* Error message display */}
          {error && (
            <Text color="red" mt={5} ta="center">
              {error}
            </Text>
          )}
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
}


