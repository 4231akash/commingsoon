"use client";

import "../global.css";
import TextField from "@mui/material/TextField";
import { IntlProvider, FormattedMessage } from "react-intl";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const Notify = (props) => {
  const [open, setOpen] = useState("");

  var dialogopen = "slide-up";
  var dialogdown = "slide-down";

  useEffect(() => {
    return () => {
      if (props.open == true) {
        setOpen("slide-down");
      } else if (props.open == false) {
        setOpen("slide-up");
      }
    };
  }, []);

  return (
    <IntlProvider messages={props.language} locale="en" defaultLocale="en">
      <Dialog
        data-aos={props.open == true ? dialogopen : dialogdown}
        className="dialogs"
        open={props.open}
        // onClose={props.click}
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
          <div className="subflex">
            <DialogTitle className="subscribe">
              <FormattedMessage id={props.subscribe} />
            </DialogTitle>

            <button className="cancel" onClick={props.click}>
              back
            </button>
          </div>

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
            <Button
              onClick={props.handleclick}
              variant="outlined"
              type="submit"
            >
              <FormattedMessage id={props.notify} />
            </Button>

            {/* <Button onClick={}>Open Snackbar</Button> */}
          </DialogActions>
        </div>
      </Dialog>
    </IntlProvider>
  );
};

export default Notify;
