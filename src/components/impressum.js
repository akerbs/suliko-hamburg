import React from "react"
import Typography from "@material-ui/core/Typography"
import Modal from "@material-ui/core/Modal"
import sulikoIcon from "../images/suliko-icon.png"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"

const window = require("global/window")

const modalWindowWidth = window.innerWidth <= 599 ? 320 : "50vw"

const mainTitelLeftMargin = window.innerWidth <= 599 ? "4%" : "16%"

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
    maxHeight: " 100vh",
    width: modalWindowWidth,
    backgroundColor: "rgba(249,234,207)",
    border: "2px solid rgba(133,26,29)",
    boxShadow: theme.shadows[5],

    zIndex: 9999,
    position: "fixed",
    outline: 1,
    padding: "50px 10px",
    fontSize: 10,
  },

  logo2: {
    width: "4rem",
    marginBottom: 20,
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
}))

export default function Impressum(props) {
  const classes = useStyles()

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={props.onClose}
      open={props.open}
    >
      <div className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <img
              src={sulikoIcon}
              alt="logo"
              className={classes.logo2}
              onClick={props.onClose}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="h6"
              style={{
                marginLeft: mainTitelLeftMargin,
                marginTop: "7%",
              }}
            >
              IMPRESSUM
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              style={{
                margin: 0,
                padding: 0,
                zIndex: 9999,
                position: "fixed",
              }}
              // onClick={stop}
              onClick={props.onClose}
            >
              <HighlightOffIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" style={{ lineHeight: 1.2 }}>
          <br /> <br /> <b>ANGABEN GEMAß § 5 TMG </b>
          <br /> <br />
          Cheper & Busjar GbR
          <br /> <br />
          <b>GESCHÄFTSFÜHRER:</b> <br />
          Georg Welia, Elchin Aliev <br />
          <br />
          <b>KONTAKT:</b> <br />
          040 49201953 <br />
          info[at]restaurant-suliko.de <br /> <br />
          <b>UMSATZSTEUERNUMMER: </b>
          <br />
          42/610/02294
          <br />
          <br />
          <b>VERANTWORTLICH FÜR DEN INHALT NACH § 55 Abs. 2 RStV: </b> <br />
          Cheper & Busjar GbR <br />
          Mittelweg 24 <br />
          20148 Hamburg <br /> <br />
          <b>HAFTUNGSAUSSCHLÜSS: </b>
          <br /> <br />
          <b>HAFTUNG FÜR INHALTE</b>
          <br /> <br />
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
          <br /> <br /> <br />
          <b>HAFTUNG FÜR LINKS</b>
          <br /> <br />
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
          <br /> <br /> <br />
          <b>URHEBERRECHT</b>
          <br /> <br />
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
          <br /> <br /> <br />
          <b>DATENSCHUTZ</b>
          <br /> <br />
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z.B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
          Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von
          im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
          Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung
          und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
          Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
          Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
          etwa durch Spam-Mails, vor.
          <br /> <br /> <br />
          <b>GOOGLE ANALYTICS</b> <br /> <br />
          Diese Website benutzt Google Analytics, einen Webanalysedienst der
          Google Inc. (“Google“). Google Analytics verwendet sog. “Cookies“,
          Textdateien, die auf Ihrem Computer gespeichert werden und die eine
          Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den
          Cookie erzeugten Informationen über Ihre Benutzung dieser Website
          (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in
          den USA übertragen und dort gespeichert. Google wird diese
          Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
          Reports über die Websiteaktivitäten für die Websitebetreiber
          zusammenzustellen und um weitere mit der Websitenutzung und der
          Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird
          Google diese Informationen gegebenenfalls an Dritte übertragen, sofern
          dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im
          Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre
          IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie
          können die Installation der Cookies durch eine entsprechende
          Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch
          darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
          Funktionen dieser Website voll umfänglich nutzen können. Durch die
          Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über
          Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und
          Weise und zu dem zuvor benannten Zweck einverstanden.
          <br /> <br /> <br />
          <b>GOOGLE ADSENSE</b>
          <br /> <br />
          Diese Website benutzt Google Adsense, einen Webanzeigendienst der
          Google Inc., USA (“Google“). Google Adsense verwendet sog. “Cookies“
          (Textdateien), die auf Ihrem Computer gespeichert werden und die eine
          Analyse der Benutzung der Website durch Sie ermöglicht. Google Adsense
          verwendet auch sog. “Web Beacons“ (kleine unsichtbare Grafiken) zur
          Sammlung von Informationen. Durch die Verwendung des Web Beacons
          können einfache Aktionen wie der Besucherverkehr auf der Webseite
          aufgezeichnet und gesammelt werden. Die durch den Cookie und/oder Web
          Beacon erzeugten Informationen über Ihre Benutzung dieser Website
          (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in
          den USA übertragen und dort gespeichert. Google wird diese
          Informationen benutzen, um Ihre Nutzung der Website im Hinblick auf
          die Anzeigen auszuwerten, um Reports über die Websiteaktivitäten und
          Anzeigen für die Websitebetreiber zusammenzustellen und um weitere mit
          der Websitenutzung und der Internetnutzung verbundene Dienstleistungen
          zu erbringen. Auch wird Google diese Informationen gegebenenfalls an
          Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit
          Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in
          keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung
          bringen. Das Speichern von Cookies auf Ihrer Festplatte und die
          Anzeige von Web Beacons können Sie verhindern, indem Sie in Ihren
          Browser-Einstellungen “keine Cookies akzeptieren“ wählen (Im MS
          Internet-Explorer unter “Extras &gt; Internetoptionen &gt; Datenschutz
          &gt; Einstellung“; im Firefox unter “Extras &gt; Einstellungen &gt;
          Datenschutz &gt; Cookies“); wir weisen Sie jedoch darauf hin, dass Sie
          in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser
          Website voll umfänglich nutzen können. Durch die Nutzung dieser
          Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen
          Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem
          zuvor benannten Zweck einverstanden.
          <br /> <br />
          <br />
          Impressum vom{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.impressum-generator.de/"
            className={classes.link}
          >
            {" "}
            impressum-generator.de
          </a>{" "}
          der
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.kanzlei-hasselbach.de/standorte/bonn/"
            className={classes.link}
          >
            {" "}
            Kanzlei Hasselbach Rechtsanwälte.
          </a>
          <br /> <br />
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            Terms of Service
          </a>{" "}
          apply.
        </Typography>
      </div>
    </Modal>
  )
}
