import styles from "./styles.module.css";
import { useState } from "react";

const LengvesnesPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAllInputsFilled = name && email && password;

  const displayUserData = () => {
    if (isAllInputsFilled) {
      console.log(name);
      console.log(email);
      console.log(password);
    } else {
      console.log("Please insert all necessary fields");
    }
  };

  return (
    <>
      <div>Lengvesnes uzd:</div>

      <div className={styles.form}>
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="name"
        />
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="email"
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="password"
        />
        <button
          disabled={!isAllInputsFilled}
          className={isAllInputsFilled ? styles.buttonOk : styles.buttonNotOk}
          onClick={() => displayUserData()}
        >
          Click me
        </button>
        {/* <button onClick={() => setName("Robertas")}>Click me</button> */}
      </div>

      <div className={styles.userInfo}>
        <div>{name}</div>
        <div>{email}</div>
        <div>{password}</div>
        <div>{password.length}</div>
        <div>{name.length + email.length}</div>
      </div>
    </>
  );
};

export default LengvesnesPage;
