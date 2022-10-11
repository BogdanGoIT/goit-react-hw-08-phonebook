import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
    const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
      dispatch(register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value
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
                    helperText="Please enter your name"
                    id="demo-helper-text-aligned"
                    label="Username"
            type="text"
            name="name" />
     
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
        
      <Button type="submit" variant="contained">Register</Button>
    </form>
    </Box>
  );
};
