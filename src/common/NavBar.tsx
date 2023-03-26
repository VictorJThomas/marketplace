import React from "react";
import { AppBar, Box, Toolbar, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const NavBar: React.FC<{}> = () => {
  return (
    <Box sx={{ FlexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              align-item="center"
            >
              <Grid item>
                <Typography>Codrr</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained">Login</Button>
                    <Button variant="outlined">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
