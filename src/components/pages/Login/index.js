import React, { useState, useEffect } from "react";
import CustomButton from "../../atom/Button";
import InputText from "./../../atom/InputText/index";
import NavBar from "../../molecules/NavigationBar";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = {
      Username: Username,
      password: password,
    };
    console.log(data);
  };
  return (
    <div class="container-sm mb-4">
      <NavBar />
      <br />
      <h3>Login</h3>
      <p>Username</p>
      <InputText
        class="form-control"
        placeholder="Masukkan username anda"
        value={Username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <p>Password</p>
      <InputText
        class="form-control"
        placeholder="Masukkan password anda"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <br />

      <CustomButton handle={handleSubmit} labelButton="Login" />
    </div>
  );
};

export default Login;
