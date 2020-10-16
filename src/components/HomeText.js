import React, { useContext, useState } from "react"
import Typography from "@material-ui/core/Typography"
import { LanguageContext } from "../components/layout"

export default function AboutUs(props) {
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
      {actLanguage === "RUS" && (
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
            შეძლონ დატკბენ ჩვენი მრავალფეროვანი კერძებით და ტრადიციული ღვინოებით.
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
      )}
    </>
  )
}
