import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Logo2 from "../images/Logo2.png"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import Impressum from "./impressum"

const useStyles = makeStyles(theme => ({
  footerWrapper: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    color: "black",
    marginTop: 50,
  },
  logo2Footer: {
    maxWidth: 120,
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 110,
    },
  },
}))

export default function Footer() {
  const classes = useStyles()

  const [openImpressum, setOpenImpressum] = React.useState(false)

  const handleOpenImpressum = () => {
    setOpenImpressum(true)
  }
  const handleCloseImpressum = () => {
    setOpenImpressum(false)
  }

  return (
    <Container
      className={classes.footerWrapper}
      style={{ paddingBottom: "70px" }}
    >
      <img src={Logo2} alt="logo" className={classes.logo2Footer} />
      <Typography variant="body2" style={{ color: "rgba(0, 0, 0, 0.8 )" }}>
        {" © "} {new Date().getFullYear()} Suliko
        <br />{" "}
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          onClick={handleOpenImpressum}
          style={{ cursor: "pointer", color: "rgba(0, 0, 0, 1 )" }}
        >
          Impressum
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Typography
          variant="overline"
          style={{ fontSize: 5, color: "rgba(0, 0, 0, 0.5 )" }}
        >
          Created by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:anker2702@gmail.com"
            // to="https://kerbs.now.sh/"
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.5 )" }}
          >
            Anatol Kerbs
          </a>
        </Typography>
      </div>
      <Impressum open={openImpressum} onClose={handleCloseImpressum} />
    </Container>
  )
}
