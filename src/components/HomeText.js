import React, { useContext, useState } from "react"
import Typography from "@material-ui/core/Typography"
import { LanguageContext } from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  phoneEmailLink: {
    color: "rgba(133,26,29)",
    textDecoration: "none",
    "&:hover": {
      color: "rgba(133,26,29)",
      fontWeight: "bold",
    },
  },
}))

export default function AboutUs(props) {
  const classes = useStyles()

  const { actLanguage } = useContext(LanguageContext)
  const [readMoreText2, setReadMoreText2] = useState(false)

  const showTex2MoreHandler = () => {
    setReadMoreText2(true)
  }
  const showTex2LessHandler = () => {
    setReadMoreText2(false)
  }

  return (
    <>
      <div>
        <Typography
          variant="h6"
          style={{ color: "rgba(133,26,29)", fontWeight: "bold" }}
          align="center"
        >
          {" "}
          {actLanguage === "DEU"
            ? "!!! AKTION FÜR ENTSPANNTE FEIERTAGE !!!"
            : actLanguage === "RUS"
            ? "!!! ПРАЗДНИЧНАЯ АКЦИЯ !!!"
            : actLanguage === "GEO"
            ? "!!! მოქმედება დასვენების დღეებისთვის !!!"
            : actLanguage === "ENG"
            ? "!!! ACTION FOR RELAXED HOLIDAYS !!!"
            : "!!! ACTION FOR RELAXED HOLIDAYS !!!"}
        </Typography>
        <br />

        <Typography id="text2Big" variant="body1">
          Gönnen Sie sich und Ihrer Familie einen entspannten Ausklang des wohl
          merkwürdigsten und kulturell ausgehungertsten Jahres unserer
          Generation. <br /> <br /> Bestellen Sie Ihr exklusives Essen für die
          Feiertage oder für zwischen den Tagen und verwöhnen Sie sich, ebenso
          wie auch Ihre Liebsten, mit georgischen Leckereien. <br /> <br /> Als
          besonderes Dankeschön - für Ihre Unterstützung in diesen für
          Gastronomen schwierigen Zeiten - legen wir jeder Bestellung eine
          Flasche ausgesuchten georgischen Rot- oder Weissweins bei.{" "}
          <Typography
            variant="h5"
            style={{ color: "rgba(133,26,29)", display: "inline" }}
          >
            *
          </Typography>{" "}
          <br /> <br />
          Sie können Ihr Essen bei uns durchgehend bis zum 31.12.2020 - jeden
          Tag - von 14:00 bis 20:30 Uhr abholen oder liefern lassen. <br />{" "}
          <br />
          Schauen Sie in unser{" "}
          <a
            href="/#menu"
            style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
          >
            <b>Menü</b>
          </a>{" "}
          <br />
          und bestellen Sie noch heute: <br /> <br /> Tel.:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+4904049201953"
            className={classes.phoneEmailLink}
          >
            040 492 019 53
          </a>{" "}
          <br />
          E-Mail:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:info@restaurant-suliko.de"
            className={classes.phoneEmailLink}
          >
            info@restaurant-suliko.de
          </a>{" "}
          <br /> <br />
          Bei Lieferung bequem{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.lieferando.de/suliko"
            style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
          >
            <b>hier.</b>{" "}
          </a>{" "}
          <br /> <br />
          <Typography
            variant="h5"
            style={{ color: "rgba(133,26,29)", display: "inline" }}
          >
            *
          </Typography>{" "}
          Bei Abholung: Mindestbestellwert € 49,90 | Bei Lieferung: € 99,-
        </Typography>
      </div>
    </>
  )
}
