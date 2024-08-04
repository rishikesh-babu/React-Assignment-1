import React from "react";
import Inputbox from "../Input/InputBox";
import Custbutton from "../Button/Custbutton";

function Signup() {
    return (
        <div className="signupbox">
            <h2>Signup</h2>
            <div className="inputchild">
                <Inputbox label={'Name'} type={'text'} placeholder={'Enter name'} />
                <Inputbox label={'Email'} type={'email'} placeholder={'Enter email'} />
                <Inputbox label={'Number'} type={'number'} placeholder={'Enter number'} />
                <Inputbox label={'Password'} type={'password'} placeholder={'Enter password'} />
                <Inputbox label={'Confirm password'} type={'password'} placeholder={'Confirm password'} />
                <Custbutton value={'Signup'} />
            </div>
        </div>
    )
}

export default Signup