import React from "react";
import Inputbox from "../Input/InputBox";
import Custbutton from "../Button/Custbutton";

function Loginbox() {
    return (
        <div className="loginbox">
            <h2>Login</h2>
            <div className="inputchild">
                <Inputbox label={'Email'} type={'email'} placeholder={'Enter email'} />
                <Inputbox  label={'Password'} type={"password"} placeholder={'Enter password'} />
                <Custbutton value={'Login'} />
            </div>
        </div>
    )
}

export default Loginbox