import React, { useContext, useState } from "react"
import Typography from "@material-ui/core/Typography"
import { LanguageContext } from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "4%",
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  phoneEmailLink: {
    color: "rgba(133,26,29)",
    textDecoration: "none",
    "&:hover": {
      color: "rgba(133,26,29)",
      fontWeight: "bold",
    },
  },
  title: {
    color: "rgba(133,26,29)",
    fontWeight: "bold",
    fontSize: "1.5em",

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5em",
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
    <div className={classes.root}>
      <Typography className={classes.title} align="center">
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
        {actLanguage === "DEU"
          ? "Gönnen Sie sich und Ihrer Familie einen entspannten Ausklang des wohl merkwürdigsten und kulturell ausgehungertsten Jahres unserer Generation."
          : actLanguage === "RUS"
          ? "Порадуйте себя и свою семью приятным завершением этого, вероятно, самого странного и наиболее культурно-голодного года нашего поколения."
          : actLanguage === "GEO"
          ? "მოექეცით საკუთარ თავს და თქვენს ოჯახს დასასვენებლად დაასრულეთ ჩვენი თაობის ალბათ ყველაზე უცნაური და კულტურულად შიმშილი წელი."
          : actLanguage === "ENG"
          ? "Treat yourself and your family to a relaxing end to what is probably the strangest and most culturally starved year of our generation."
          : "Treat yourself and your family to a relaxing end to what is probably the strangest and most culturally starved year of our generation."}
        <br /> <br />
        {actLanguage === "DEU"
          ? "Bestellen Sie Ihr exklusives Essen für die Feiertage oder für zwischen den Tagen und verwöhnen Sie sich, ebenso wie auch Ihre Liebsten, mit georgischen Leckereien."
          : actLanguage === "RUS"
          ? "Закажите эксклюзивную еду в период праздничных дней и побалуйте себя и своих близких грузинскими деликатесами."
          : actLanguage === "GEO"
          ? "შეუკვეთეთ თქვენი განსაკუთრებული კვება დღესასწაულებზე ან დღეებს შორის და განებივრდით საკუთარ თავს, ისევე როგორც თქვენს ახლობლებს, ქართული დელიკატესებით."
          : actLanguage === "ENG"
          ? "Order your exclusive meal for the holidays or between the days and spoil yourself, as well as your loved ones, with Georgian delicacies."
          : "Order your exclusive meal for the holidays or between the days and spoil yourself, as well as your loved ones, with Georgian delicacies."}
        <br /> <br />
        {actLanguage === "DEU"
          ? "Als besonderes Dankeschön - für Ihre Unterstützung in diesen für Gastronomen schwierigen Zeiten - legen wir jeder Bestellung eine Flasche ausgesuchten georgischen Rot- oder Weissweins bei."
          : actLanguage === "RUS"
          ? "В качестве особой благодарности - за Вашу поддержку в эти трудные для рестораторов времена - мы прилагаем к каждому заказу бутылку отборного грузинского красного или белого вина."
          : actLanguage === "GEO"
          ? "განსაკუთრებული მადლობისთვის - ამ რთულ პერიოდებში მხარდაჭერისთვის, რესტავრატორებისთვის - ჩვენ გთავაზობთ შეკვეთილი ქართული წითელი ან თეთრი ღვინის ბოთლს ყველა შეკვეთით."
          : actLanguage === "ENG"
          ? "As a special thank you - for your support in these difficult times for restaurateurs - we include a bottle of selected Georgian red or white wine with every order."
          : "As a special thank you - for your support in these difficult times for restaurateurs - we include a bottle of selected Georgian red or white wine with every order."}{" "}
        <Typography
          variant="h5"
          style={{ color: "rgba(133,26,29)", display: "inline" }}
        >
          *
        </Typography>{" "}
        <br /> <br />
        {actLanguage === "DEU"
          ? "Sie können Ihr Essen bei uns durchgehend bis zum 31.12.2020 - jeden Tag - von 14:00 bis 20:30 Uhr abholen oder liefern lassen. "
          : actLanguage === "RUS"
          ? "Вы можете заказать еду на самовывоз или заказать доставку у нас до 31 декабря 2020 года - каждый день - с 14:00 до 20:30."
          : actLanguage === "GEO"
          ? "თქვენ შეგიძლიათ აიღოთ ან გადმოგცეთ თქვენი საკვები 2020 წლის 31 დეკემბრამდე - ყოველდღე - 14:00 საათიდან საღამოს 8:30 საათამდე."
          : actLanguage === "ENG"
          ? "You can pick up or have your meal delivered from us until December 31, 2020 - every day - from 2:00 p.m. to 8:30 p.m."
          : "You can pick up or have your meal delivered from us until December 31, 2020 - every day - from 2:00 p.m. to 8:30 p.m."}
        <br /> <br />
        {actLanguage === "DEU"
          ? "Schauen Sie in unser"
          : actLanguage === "RUS"
          ? "Взгляните на наше"
          : actLanguage === "GEO"
          ? "გადახედეთ ჩვენს"
          : actLanguage === "ENG"
          ? "Take a look at our"
          : "Take a look at our"}{" "}
        <a
          href="/#menu"
          style={{
            textDecoration: "none",
            color: "rgba(133,26,29)",
            fontSize: "bold",
          }}
        >
          {actLanguage === "DEU"
            ? "Menü"
            : actLanguage === "RUS"
            ? "меню"
            : actLanguage === "GEO"
            ? "მენიუს"
            : actLanguage === "ENG"
            ? "menu"
            : "menu"}
        </a>{" "}
        <br />
        {actLanguage === "DEU"
          ? "und bestellen Sie noch heute:"
          : actLanguage === "RUS"
          ? "и закажите сегодня:"
          : actLanguage === "GEO"
          ? "და შეუკვეთეთ დღეს:"
          : actLanguage === "ENG"
          ? "and order today:"
          : "and order today:"}
        <br /> <br /> Tel.:{" "}
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
        {actLanguage === "DEU"
          ? "Bei Lieferung bequem"
          : actLanguage === "RUS"
          ? "Заказать удобно"
          : actLanguage === "GEO"
          ? "მოსახერხებელია მიტანისთვის"
          : actLanguage === "ENG"
          ? "Convenient for delivery"
          : "Convenient for delivery"}{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.lieferando.de/suliko"
          style={{
            textDecoration: "none",
            color: "rgba(133,26,29)",
            fontWeight: "bold",
          }}
        >
          {actLanguage === "DEU"
            ? "hier."
            : actLanguage === "RUS"
            ? "здесь."
            : actLanguage === "GEO"
            ? "აქ."
            : actLanguage === "ENG"
            ? "here."
            : "here."}{" "}
        </a>{" "}
        <br /> <br />
        <Typography
          variant="h5"
          style={{ color: "rgba(133,26,29)", display: "inline" }}
        >
          *
        </Typography>{" "}
        {actLanguage === "DEU"
          ? "Bei Abholung: Mindestbestellwert € 49,90"
          : actLanguage === "RUS"
          ? "При самовывозе: минимальная сумма заказа 49,90 €"
          : actLanguage === "GEO"
          ? "შეგროვებისთვის: შეკვეთის მინიმალური ღირებულება 49,90 ევრო"
          : actLanguage === "ENG"
          ? "On pickup: minimum order value € 49.90"
          : "On pickup: minimum order value € 49.90"}
        <br />
        {actLanguage === "DEU"
          ? "Bei Lieferung: € 99,-"
          : actLanguage === "RUS"
          ? "При доставке: € 99, -"
          : actLanguage === "GEO"
          ? "ადგილზე მიტანა: 99 ევრო, -"
          : actLanguage === "ENG"
          ? "On delivery: € 99, -"
          : "On delivery: € 99, -"}
      </Typography>
    </div>
    /* {actLanguage === "RUS" && (
        <div>
          <Typography variant="h6">Дорогие наши друзья Сулико,</Typography>
          <br />

          <Typography id="text2Big" variant="body1">
            Благодарим Вас за посещение нашего сайта. Несмотря на непростой
            период, мы остаемся рядом с Вами и желаем, чтобы жители прекрасного
            города Гамбург и его гости, которые уже пробовали грузинскую кухню и
            стали ее ценителями, и в будущем могли наслаждаться разнообразными
            блюдами и традиционными винами. <br /> <br />
            Множество блюд, а также обновленную{" "}
            <a
              href="/#menu"
              style={{
                textDecoration: "none",
                color: "rgba(133,26,29)",
              }}
            >
              <b>винную карту</b>
            </a>{" "}
            Вы найдете в нашем новом{" "}
            <a
              href="/#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              <b>меню</b>
            </a>
            . <br /> <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lieferando.de/suliko"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              <b>Нажмите здесь, чтобы заказать доставку на дом.</b>{" "}
            </a>
          </Typography>
        </div>
      )}
      {actLanguage === "DEU" && (
        <div>
          <Typography variant="h6">Liebe Suliko-Freunde,</Typography>
          <br />

          <Typography id="text2Big" variant="body1">
            Vielen Dank für Ihren Besuch auf unserer Website. Trotz schwierigr
            Zeit bleiben wir an Ihrer Seite und wünschen, dass die Bewohner der
            schönen Stadt Hamburg und ihre Gäste, die georgische Küche probiert
            haben und zu ihren Liebhabern geworden sind, und auch in Zukunft
            eine Vielzahl von Gerichten und traditionellen Weinen genießen
            können. <br /> <br />
            Weitere Gerichte sowie eine aktualisierte{" "}
            <a
              href="/#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              <b>Weinkarte</b>
            </a>{" "}
            finden Sie in unserem neuen{" "}
            <a
              href="/#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              <b>Menü</b>.{" "}
            </a>
            <br /> <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lieferando.de/suliko"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              <b>Klicken Sie hier, um die Lieferung nach Hause zu bestellen.</b>
            </a>
          </Typography>
        </div>
      )}
      {actLanguage === "GEO" && (
        <div>
          <Typography variant="h6">
            ჩვენო ძვირფასო სულიკოს მეგობრებო,
          </Typography>
          <br />

          <Typography id="text2Big" variant="body1">
            მადლობა რომ ჩვენი ვებ-გვერდის ესტუმრეთ. მიუხედავათ რთული პერიოდისა,
            ჩვენ თქვენ გვერდით ვრჩებით და გულახდილათ გვსურს, რომ ულამაზეს ქალაქ
            ჰამბურგის მაცხოვრებლებს და მის სტუმრებს, რომლებმაც ჩვენთან ქართული
            სამზარეულო დააგემოვნეს და მისი მოყვარულები გახდნენ, მომავალშიც
            შეძლონ დატკბენ ჩვენი მრავალფეროვანი კერძებით და ტრადიციული
            ღვინოებით.
            <br />
            <br />
            იხილეთ ჩვენ ახალი{" "}
            <a
              href="/#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              <b>კერძების მენიუ</b>
            </a>{" "}
            და ასევე განაახლებული{" "}
            <a
              href="/#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              <b>სასმელების მენიუ</b>
            </a>
            .
            <br />
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lieferando.de/suliko"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              <b>კერძების სახლში შეკვეთისთვის დააწექით აქ.</b>{" "}
            </a>
          </Typography>
        </div>
      )}
      {actLanguage === "ENG" && (
        <div>
          <Typography variant="h6">Our dear Suliko friends,</Typography>
          <br />

          <Typography id="text2Big" variant="body1">
            Thank you for visiting our website. Despite the difficult time, we
            remain by your side and wish that the residents of the beautiful
            city of Hamburg and their guests, who have tried Georgian cuisine
            and have become its lovers, can enjoy a variety of dishes and
            traditional wines in the future.
            <br /> <br />
            You can find more dishes and an updated{" "}
            <a
              href="/#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              {" "}
              <b>wine list</b>{" "}
            </a>{" "}
            in our new{" "}
            <a
              href="/#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              <b>menu</b>
            </a>
            .
            <br /> <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lieferando.de/suliko"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              <b>Click here to order home delivery.</b>
            </a>
          </Typography>
        </div>
      )} */
  )
}
