
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const LoginForm = () => {
    const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
      dispatch(logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
      }))
    form.reset();
  };

  return (
    <Box
          sx={{
              display: 'flex',
              alignItems: 'center',
              '& > :not(style)': { m: 1 },
          }}
    >
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">

          <TextField
                    helperText="Please enter your email"
                    id="demo-helper-text-aligned-no-helper"
                    label="Email" 
          type="email"
          name="email" />


          <TextField
                    helperText="Please enter your password"
                    id="demo-helper-text-aligned-no-helper"
                    label="Password" 
          type="password"
          name="password" />
      <br/>
      <Button variant="contained" type="submit">Log In</Button>
    </form>
      
    </Box>
  );
};
