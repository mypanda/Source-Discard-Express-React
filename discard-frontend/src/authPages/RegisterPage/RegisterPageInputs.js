import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const LoginPageInputs = (props) => {
  const {mail, setMail,username, setUsername, password, setPassword} = props
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label='E-mail'
        type='text'
        placeholder='Enter e-mail addres'>
      </InputWithLabel>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label='Username'
        type='text'
        placeholder='Enter a username'>
      </InputWithLabel>
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label='Password'
        type='password'
        placeholder='Enter password'>
      </InputWithLabel>
    </>
  )
}

export default LoginPageInputs