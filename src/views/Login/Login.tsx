import React, { useContext, useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
//redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';
import { observer } from "mobx-react";
import { LoginStoreContext } from "../../Stores/loginStore";
const Login = observer(()=>{
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const loginStore = useContext(LoginStoreContext)
  const [errors, setErrors] = useState({} as any);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   if (props.UI.errors) {
  //     setErrors(props.UI.errors);
  //   }
  //   setLoading(props.UI.loading);
  // }, [props.UI])
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const userData = {
  //     email: values.email,
  //     password: values.password,
  //   };
  //   debugger;
  //   props.loginUser(userData, props.history);
  // }
  const handleChange = (e: any) => {
    e.persist();
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <>
      <Box>
        <Container
          component="main"
          maxWidth="md">
          <CssBaseline />
          <Grid
            container
            alignContent="center"
            alignItems="center"
            justify="center"

            spacing={3}>
            <Grid item md={9}>
              <Paper>
                <Box>
                  <TextField
                    variant="outlined"
                    margin="none"
                    value={values.email}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    helperText={errors.email}
                    error={errors.email ? true : false}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    value={values.password}
                    fullWidth
                    name="password"
                    label="password"
                    type="password"
                    onChange={handleChange}
                    helperText={errors.password}
                    error={errors.password ? true : false}
                  />
                  {errors.message && (
                    <Typography variant="body2">
                      {errors.message}
                    </Typography>
                  )}
                  <Button
                    type="submit"
                    onClick={() => {
                      localStorage.setItem("isLogin", "true")
                      console.log(loginStore.login)
                    }}
                    variant="contained"
                    color="primary"
                    disabled={loading}>
                    Login
 {loading && (<CircularProgress size={30} color="secondary" />)}
                  </Button>
                </Box>
              </Paper >
            </Grid >
          </Grid >
        </Container >
      </Box >
    </>
  )
})

export default Login;