import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomButton from "../../atom/Button";
import InputText from "../../atom/InputText";
import NavBar from "../../molecules/NavigationBar";
import Axios from "axios";

const RegisterPage = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const data = {
      email: email,
      first_name: first_name,
      last_name: last_name,
      avatar: `https://ui-avatars.com/api/?name=${first_name} ${last_name}`,
    };
    Axios.post("http://localhost:3005/users", data);
  };

  return (
    <div class="container-sm mb-4">
      <NavBar />
      <br />
      <h3>Register User Baru</h3>
      <p>Email</p>
      <InputText
        class="form-control"
        placeholder="Masukkan email anda"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />

      <p>First Name</p>
      <InputText
        class="form-control"
        placeholder="Masukkan first name anda"
        value={first_name}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <br />

      <p>Last Name</p>
      <InputText
        class="form-control"
        placeholder="Masukkan last name anda "
        value={last_name}
        onChange={(event) => setLastName(event.target.value)}
      />
      <br />

      <CustomButton handle={handleSubmit} labelButton="Register" />
    </div>
  );
};

export default RegisterPage;
