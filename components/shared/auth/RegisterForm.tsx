'use client';
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
  import classes from './RegisterForm.module.css';
  
  export function RegisterForm() {
    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Create an Account
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Already have an account?{' '}
          <Anchor size="sm" component="button" 
          onClick={() => {
            window.location.href = "/login";
          }
          }
          >
            Login
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Full Name" placeholder="Your name" required />
          <TextInput label="Email" placeholder="you@mantine.dev" required mt="md" />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <PasswordInput label="Confirm Password" placeholder="Confirm password" required mt="md" />
          <Checkbox label="I agree to the terms and conditions" mt="lg" />
          <Button fullWidth mt="xl">
            Register
          </Button>
        </Paper>
      </Container>
    );
  }
  