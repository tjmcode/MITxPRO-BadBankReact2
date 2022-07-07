// #region  H E A D E R
// <copyright file="login.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  P R E A M B L E
// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Bad Bank React Login
 *      Module:   Modules (./login.js)
 *      Project:  MicroCODE Bad Bank React App
 *      Customer: Internal
 *      Creator:  MicroCODE Incorporated
 *      Date:     June 2022
 *      Author:   Timothy J McGuire
 *
 *      Designed and Coded: 2022 MicroCODE Incorporated
 *
 *      This software and related materials are the property of
 *      MicroCODE Incorporated and contain confidential and proprietary
 *      information. This software and related materials shall not be
 *      duplicated, disclosed to others, or used in any way without the
 *      written of MicroCODE Incorported.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *
 *      This module implements the MicroCODE's Bad Bank React Login.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MicroCODE JavaScript Style Guide
 *         Local File: MCX-S02 (Internal JS Style Guide).docx
 *         https://github.com/MicroCODEIncorporated/JavaScriptSG
 *
 *
 *
 *      DEMONSTRATION VIDEOS:
 *      ---------------------
 *
 *      1. ...
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *
 *  Date:         By-Group:   Rev:     Description:
 *
 *  02-Jun-2022   TJM-MCODE  {0001}    New module implementing the Bad Bank Account Login.
 *
 *
 */

// #endregion
// #endregion
// #endregion

// #region  I M P O R T S

import React, {useContext, useState} from 'react';
import {AppContext} from './context';
import Card from './card';

// #endregion

// #region  J A V A S C R I P T
// #region  F U N C T I O N S

// #region  C O N S T A N T S

const TIMEOUT_MSEC = 3000;

// #endregion

// #region  P R I V A T E   F I E L D S

// #endregion

// #region  E N U M E R A T I O N S

// #endregion

// #region  C O M P O N E N T – P U B L I C

/**
 * Login() – controls a user logging into their Bad Bank Account.
 *
 * @api public
 *
 * @param {nil} no properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      Login();
 *
 */
function Login()
{
    // validate PROPS input(s)

    // initialize STATE and define accessors...
    const [cleared, setCleared] = useState(false);
    const [needInput, setNeedInput] = useState(true);
    const [status, setStatus] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // access CONTEXT for reference...
    const ctx = useContext(AppContext);

    // #region  P R I V A T E   F U N C T I O N S

    // field validation...
    function validate(field, label)
    {
        if (!field)
        {
            setStatus(`Error: ${label} is required`);
            setTimeout(() => setStatus(''), TIMEOUT_MSEC);
            setSubmitDisabled('Disabled');
            return false;
        }

        if (label === "email")
        {
            // make sure this email is not already in use
            var emailExists = false;
            for (let i = 0; i < ctx.Users.length; i++)
            {
                if (ctx.Users[i].email === field)
                {
                    emailExists = true;
                    break;
                }
            }
            if (!emailExists)
            {
                setStatus(`Error: The supplied email has no Account.`);
                setTimeout(() => setStatus(''), TIMEOUT_MSEC);
                setSubmitDisabled('Disabled');
                return false;
            }
        }

        return true;
    }

    // checks all form fields
    function checkFields()
    {
        setSubmitDisabled('Disabled');

        if (!validate(email, 'email')) return false;
        if (!validate(password, 'password')) return false;

        setSubmitDisabled('');

        return true;
    }

    // empties form of all data, resets 'need input' to get form opened up
    function clearForm()
    {
        setEmail('');
        setPassword('');

        setSubmitDisabled('Disabled');
        setNeedInput(true);
    };

    // #endregion

    // #region  E V E N T   H A N D L E R S
    /*
     * *_Click() - 'on click' event handlers for UI elements.
     */

    // clears the UI fields for Account creation unconditionally
    function clearForm_Click()
    {
        clearForm();
        setNeedInput(true);
    }

    // logs into the selected User Account
    function logIn_Click()
    {
        console.log("Login:", email, password);

        if (!checkFields())
        {
            return;
        }

        // make sure this email Account exists
        var loginSuccess = false;
        for (let i = 0; i < ctx.Users.length; i++)
        {
            if (ctx.Users[i].email === email)
            {
                if (ctx.Users[i].password === password)
                {
                    loginSuccess = true;

                    ctx.LoggedIn = true;
                    ctx.CurrentUser = email;
                    ctx.UserIndex = i;
                    ctx.NavBarUp = false;

                    break;
                }
            }
        }
        if (!loginSuccess)
        {
            setStatus(`Error: Login failed, check email and password.`);
            setTimeout(() => setStatus(''), TIMEOUT_MSEC);
            setSubmitDisabled('Disabled');
            return false;
        }

        setNeedInput(false);
    }

    // logs out of the current User Account
    function logOut_Click()
    {
        console.log("Logout:", email, password);

        ctx.LoggedIn = false;
        ctx.CurrentUser = 'You must log in...';
        ctx.UserIndex = 0;
        ctx.NavBarUp = false;

        setNeedInput(true);
    }

    // #endregion

    // perform component COMPUTATION to generate output
    if (!cleared)
    {
        clearForm();
        setCleared(true);

        setNeedInput(!ctx.LoggedIn);
    }

    // OUTPUT the Component's JavaScript Extension (JSX) code...
    return (
        <Card
            bgcolor="secondary"
            header="Login"
            width="30rem"
            status={status}
            body={needInput ? (
                <form>
                    Email Address<br />
                    <input type="email" autoComplete="new-password" required={true} className="form-control" id="email"
                        placeholder="Enter email" value={email} onChange={e =>
                        {
                            setSubmitDisabled('');
                            setEmail(e.currentTarget.value);
                            validate(e.currentTarget.value, 'email');
                        }} /><br />

                    Password<br />
                    <input type="password" autoComplete="new-password" required={true} className="form-control" id="password"
                        placeholder="Enter password" value={password} onChange={e =>
                        {
                            setSubmitDisabled('');
                            setPassword(e.currentTarget.value);
                            validate(e.currentTarget.value, 'password');
                        }} /><br />

                    <button type="clear" className="btn btn-light" onClick={clearForm_Click}>Clear</button>
                    <> </>
                    <button type="submit" className="btn btn-light" onClick={logIn_Click} disabled={submitDisabled}>Log In</button>
                    <br />
                </form>
            ) : (
                <>
                    <h5>{ctx.CurrentUser} is logged in.</h5>
                    <br />
                    <button type="submit" className="btn btn-light" onClick={logOut_Click}>Log Out</button>
                </>
            )}
        />
    );
}

// #endregion

// #region  C O M P O N E N T - E X P O R T S

export default Login;

// #endregion

// #endregion
// #endregion