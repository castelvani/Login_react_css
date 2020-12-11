import React, { useState } from 'react';


const Login = () => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [validoLogin, setValidoLogin] = useState('');
    const [validoSenha, setValidoSenha] = useState('');

    const valida_Login = (e) => {
        setLogin(e.target.value);
    }

    const valida_senha = (e) => {
        setSenha(e.target.value);
    }

    const validar_form = (e) => {
        e.preventDefault();
        if (login === '') {
            setValidoLogin('valido_login');
        } else {
            setValidoLogin('');
        }
        if (senha === '') {
            setValidoSenha('valido_senha');
        } else {
            setValidoSenha('');
        }
    }

    return (
        <>
            <form className="formulario">
                <div className="acesso">
                </div>
                <input onChange={valida_Login} className={"input_login " + validoLogin} placeholder="Login" type="text" required/>
                <input onChange={valida_senha} className={"input_login " + validoSenha} placeholder="Senha" type="password" required/>
                <input type="submit" onClick={validar_form} value="Login" />
                <div className="cadastro">
                    <a onClick={validar_form} href="">Criar conta</a>
                </div>
            </form>
        </>
    )

}



export default Login;