// #region  H E A D E R
// <copyright file="card.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  P R E A M B L E
// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Card component for Bad Bank React App
 *      Module:   Modules (./context.js)
 *      Project:  MicroCODE Common Code
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
 *      This module implements the MicroCODE's Common React Component Template.
 *      This file is copied to start all MicroCODE React Component files.
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
 *  02-Jun-2022   TJM-MCODE  {0001}    New module for common reusable React Components.
 *
 *
 */

// #endregion
// #endregion
// #endregion

// #region  I M P O R T S

import React from 'react';

// #endregion

// #region  J A V A S C R I P T
// #region  F U N C T I O N S

// #region  C O N S T A N T S

// #endregion

// #region  P R I V A T E   F I E L D S

// #endregion

// #region  E N U M E R A T I O N S

// #endregion

// #region  C O M P O N E N T – P U B L I C

/**
 * Card() – a common App 'Card' definitions for all derived Components.
 *
 * @api public
 *
 * @param {type} props component properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      Card(props);
 *
 */
function Card(props)
{
    // validate PROPS input(s)

    // initialize STATE and define accessors...

    // access CONTEXT for reference...

    // #region  P R I V A T E   F U N C T I O N S

    /*
     * bootstrapCard() - builds a Bootstrap Card Class name from passed properties.
     */
    function bootstrapCard()
    {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    }

    // #endregion

    // #region  E V E N T   H A N D L E R S
    /*
     * *_Click() - 'on click' event handlers for UI elements.
     */

    // #endregion

    // perform component COMPUTATION to generate output

    // OUTPUT the Component's JavaScript Extension (JSX) code...
    return (
        <div className={bootstrapCard()} style={{maxWidth: props.width}}>

            <div className="card-header">{props.header}</div>

            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>

        </div>
    );
}

// #endregion

// #region  C O M P O N E N T - E X P O R T S

export default Card;

// #endregion

// #endregion
// #endregion