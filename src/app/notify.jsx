"use client";

import "./global.css";
import TextField from "@mui/material/TextField";
import { IntlProvider, FormattedMessage } from "react-intl";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import Button from "@mui/material/Button";


const Notify=(props)=> {
 



  return (
    <IntlProvider messages={props.language} locale="en" defaultLocale="en">
      <Dialog
        data-aos="slide-up"
        className="dialogs"
        open={props.open}
        onClose={props.click}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            props.click();
          },
        }}
      >
        <div className="alert">
          <DialogTitle className="subscribe">
            <FormattedMessage id={props.subscribe} />
          </DialogTitle>
          <DialogContent className="dialog">
            <DialogContentText className="dialog">
              <FormattedMessage id={props.subnote} />
            </DialogContentText>

            <TextField
              data-aos="fade"
              className="dialogss"
              autoFocus
              required
            //   margin="dense"
              id="name"
              name="email"
            //   label={props.email}
              type="email"
              fullWidth
              variant="standard"
              // value={email}
              onChange={props.inputchange}

              // value={email}
            />
          </DialogContent>
          <DialogActions className="dialogo">
            <Button onClick={props.handleclick} variant="outlined" type="submit">
              <FormattedMessage id={props.notify} />
            </Button>

            {/* <Button onClick={}>Open Snackbar</Button> */}
          </DialogActions>
        </div>
      </Dialog>
    </IntlProvider>
  );
}

export default Notify;