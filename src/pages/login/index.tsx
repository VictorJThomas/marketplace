import {
  Button,
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { useState } from "react";

type LoginType ={
  username: string,
  password: string,
}

export const LoginPage: React.FC<{}> = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  })

  const dataLogin = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setLoginData({...loginData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e:React.FormEvent<HTMLInputElement>) =>{
    e.preventDefault()
    console.log(dataLogin);
  }

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "90vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">Iniciar Sesión</Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                required
                type="text"
                name="username"
                onChange={dataLogin}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                type="password"
                name="password"
                onChange={dataLogin}
              />
              <Button fullWidth type="submit" variant="contained" sx={{ mt: 1.5, mb: 3 }}>
                Iniciar Sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
