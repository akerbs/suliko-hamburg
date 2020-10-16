import React, { useContext, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Modal from "@material-ui/core/Modal"
import { Helmet } from "react-helmet"

const useStyles = makeStyles(theme => ({
  modalWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      overflowY: "scroll",
    },
    height: 805,
    width: 300,
    backgroundColor: "rgba(249,234,207)",
    border: "2px solid rgba(133,26,29)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 0, 1, 0),
    zIndex: 9999,
    position: "fixed",
    outline: 0,
  },
  timeline: {
    margin: 0,
    padding: 0,
  },
  timelineItem: {
    margin: 0,
    padding: 0,
  },
  formControl: {
    margin: theme.spacing(0),
    width: 190,
  },
  reservierenBtn: {
    color: theme.third.backgroundColor,
    backgroundColor: theme.third.color,
    position: "relative",
    left: "45%",
    transform: "translate(-50%, 0)",
    "&:hover": {
      fontWeight: "bold",
      color: theme.third.color,
      backgroundColor: theme.third.backgroundColor,
    },
  },
  timeLineDot: {
    color: theme.third.color,
    backgroundColor: theme.third.backgroundColor,
  },
}))

export default function WindowReserveQuandoo(props) {
  const classes = useStyles()

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={props.onClose}
      open={props.open}
    >
      <div className={classes.paper}>
        <div id="quandoo-booking-widget"></div>
        <Helmet>
          <script
            type="text/javascript"
            src="https://booking-widget.quandoo.com/index.js"
            async
            data-merchant-id="55293"
            data-theme="brand"
            defer
          ></script>
        </Helmet>
      </div>
    </Modal>
  )
}
