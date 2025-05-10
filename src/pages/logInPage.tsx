import { Link } from "react-router-dom";
import "../css/logInPage.css";
import { Box, Button, TextField } from "@mui/material";

function LogInPage() {
  return (
    <section className="container">
      <div className="login-container">
        <div className="form-container">
          <img
            src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
            alt="illustration"
            className="illustration"
          />
          <h1 className="opacity">LOGIN</h1>
          <form>
            {/* <input type="text" placeholder="USERNAME" /> */}
            {/* <input type="password" placeholder="PASSWORD" /> */}
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "40ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="USERNAME"
                variant="standard"
                sx={{ m: 0, p: 0 }}
              />
              <TextField
                id="standard-basic"
                label="PASSWORD"
                variant="standard"
                type="password"
                sx={{ m: 0, p: 0 }}
              />
            </Box>

            <Link to={"/home"}>
              {/* <button className="opacity">SUBMIT</button> */}
              <Button className="opacity" variant="contained" sx={{ my: 2 }}>
                Submit
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LogInPage;
