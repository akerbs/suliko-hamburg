import React, { useState, useContext, useEffect } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Autoplay,
  Navigation,
  EffectFade,
  Pagination,
} from "swiper"
import "swiper/swiper-bundle.css"
import "./swiper.css"
import menu from "../images/menu.png"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import ReserveButton from "../components/ReserveButton"
import ReserveButtonQuandoo from "../components/ReserveButtonQuandoo"
import { LanguageContext } from "../components/layout"
import inView from "in-view"
import Img from "gatsby-image"
import loadable from "@loadable/component"
import s1 from "../images/s1.jpg"
import s2 from "../images/s2.jpg"
import s3 from "../images/s3.jpg"
import s4 from "../images/s4.jpg"
import s5 from "../images/s5.jpg"
import s6 from "../images/s6.jpg"
import s7 from "../images/s7.jpg"
import s8 from "../images/s8.jpg"
import s9 from "../images/s9.jpg"
import s10 from "../images/s10.jpg"
import s11 from "../images/s11.jpg"
import s12 from "../images/s12.jpg"
import s13 from "../images/s13.jpg"
import s14 from "../images/s14.jpg"
import s15 from "../images/s15.jpg"
import s16 from "../images/s16.jpg"
import bgV1 from "../images/bgV1.jpg"
import bgV2 from "../images/bgV2.jpg"
import { makeStyles } from "@material-ui/core/styles"
// import ReserveWindow from "../components/ReserveWindow"
// import ReserveWindowQuandoo from "../components/ReserveWindowQuandoo"
import CookiesBar from "../components/cookiesBar"

const ReserveWindow = loadable(() => import("../components/ReserveWindow"))
const ReserveWindowQuandoo = loadable(() =>
  import("../components/ReserveWindowQuandoo")
)
const HomeText = loadable(() => import("../components/HomeText"))
const Welcome = loadable(() => import("../components/Welcome"))
const Press = loadable(() => import("../components/Press"))
const Contact = loadable(() => import("../components/Contact"))
const Menu = loadable(() => import("../components/Menu"))
// const CookiesBar = loadable(() => import('../components/cookiesBar'))

const window = require("global/window")

SwiperCore.use([Autoplay, Navigation, EffectFade, Pagination])

const useStyles = makeStyles(theme => ({
  bgImg: {
    width: "100%",
    height: "auto",
  },
  mapWrapper: {
    position: "relative",
    overflow: "hidden",
    height: "300px",
    width: "100%",
    paddingTop: "50%",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: 600,
    border: "0px",
    marginTop: -150,
  },
  aboutUsWrapper: {
    paddingTop: 170,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 110,
    },
  },
  menuWrapper: {
    paddingTop: 50,
    paddingBottom: 150,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 10,
      paddingBottom: 40,
    },
  },
  contactWrapper: {
    padding: "150px 15px 10px 15px",
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      padding: "100px 15px 10px 15px",
    },
  },
}))

export default function (props) {
  const classes = useStyles()

  const { actLanguage } = useContext(LanguageContext)
  const [open, setOpen] = useState(false)
  const [openQuandoo, setOpenQuandoo] = useState(false)

  const [showAfterLoading, setShowAfterLoading] = useState(false)

  function startShowAfterLoading() {
    setShowAfterLoading(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      startShowAfterLoading()
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // inView("#slider-first").once("enter", startShowAfterLoading)
    // inView.threshold(0.5)
  })

  const handleOpen = () => {
    setOpen(true)
    document.body.style.position = "fixed"
  }
  const handleClose = () => {
    setOpen(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
  }

  const handleOpenQuandoo = () => {
    setOpenQuandoo(true)
    document.body.style.position = "fixed"
  }
  const handleCloseQuandoo = () => {
    setOpenQuandoo(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
  }

  return (
    <>
      {/* <SEO title="Home" /> */}
      <Helmet>
        <html
          lang={
            actLanguage === "DEU"
              ? "del"
              : actLanguage === "RUS"
              ? "ru"
              : actLanguage === "ENG"
              ? "en"
              : actLanguage === "GEO"
              ? "ge"
              : null
          }
        />
        <title>restaurant-suliko.de</title>
        <description>
          {actLanguage ===
          "Georgisches Restaurant Suliko in Hamburg, Deutschland"
            ? "del"
            : actLanguage === "Грузинский ресторан Сулико в Гамбурге, Германия"
            ? "ru"
            : actLanguage === "Georgian restaurant Suliko in Hamburg, Germany"
            ? "en"
            : actLanguage === "ქართული რესტორანი სულიკო ჰამბურგში, გერმანია"
            ? "ge"
            : null}
        </description>
      </Helmet>
      <Container
        id="home"
        style={{
          width: "100vw",
          maxWidth: "100vw",
          margin: 0,
          padding: 0,
        }}
      >
        <Header />

        <Container
          id="slider-first"
          style={{ width: "100vw", maxWidth: "100vw", margin: 0, padding: 0 }}
        >
          {window.innerWidth <= 599 && (
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay
              loop
              effect="fade"
              allowTouchMove={false}
              preventInteractionOnTransition={true}
            >
              <SwiperSlide>
                <img src={bgV1} alt="Suliko 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bgV2} alt="Suliko 2" />
              </SwiperSlide>
            </Swiper>
          )}
          {window.innerWidth >= 600 && (
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay
              loop
              effect="fade"
            >
              <SwiperSlide>
                <Img
                  fluid={props.data.bgH1.childImageSharp.fluid}
                  alt="Suliko 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Img
                  fluid={props.data.bgH2.childImageSharp.fluid}
                  alt="Suliko 2"
                />
              </SwiperSlide>
            </Swiper>
          )}
        </Container>
        {showAfterLoading && (
          <Container id="center">
            <ReserveButtonQuandoo onOpen={handleOpenQuandoo} />
            <ReserveWindowQuandoo
              onClose={handleCloseQuandoo}
              open={openQuandoo}
            />
            <ReserveButton onOpen={handleOpen} />
            <ReserveWindow onClose={handleClose} open={open} />
            <br /> <br />
            <Container id="home-text">
              <HomeText />
            </Container>
            <br /> <br />
            <Container id="slider">
              <Swiper
                pagination={{ clickable: true }}
                style={{ zIndex: 0 }}
                spaceBetween={1}
                slidesPerView={
                  window.innerWidth <= 600
                    ? 1
                    : window.innerWidth <= 900
                    ? 2
                    : 3
                }
                autoplay
                loop
                className={classes.slider}
              >
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s1.childImageSharp.fluid}
                  alt="img1"
                /> */}
                  <img src={s1} alt="Suliko img1" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s2.childImageSharp.fluid}
                  alt="img2"
                /> */}
                  <img src={s2} alt="Suliko img2" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s3.childImageSharp.fluid}
                  alt="img3"
                /> */}
                  <img src={s3} alt="Suliko img3" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s4.childImageSharp.fluid}
                  alt="img4"
                /> */}
                  <img src={s4} alt="Suliko img4" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s5.childImageSharp.fluid}
                  alt="img5"
                /> */}
                  <img src={s5} alt="Suliko img5" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s6.childImageSharp.fluid}
                  alt="img6"
                /> */}
                  <img src={s6} alt="Suliko img6" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s7.childImageSharp.fluid}
                  alt="img7"
                /> */}
                  <img src={s7} alt="Suliko img7" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s8.childImageSharp.fluid}
                  alt="img8"
                /> */}
                  <img src={s8} alt="Suliko img8" />
                </SwiperSlide>

                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s9.childImageSharp.fluid}
                  alt="img9"
                /> */}
                  <img src={s9} alt="Suliko img9" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s10.childImageSharp.fluid}
                  alt="img10"
                /> */}
                  <img src={s10} alt="Suliko img10" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s11.childImageSharp.fluid}
                  alt="img11"
                /> */}
                  <img src={s11} alt="Suliko img11" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s12.childImageSharp.fluid}
                  alt="img12"
                /> */}
                  <img src={s12} alt="Suliko img12" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s13.childImageSharp.fluid}
                  alt="img13"
                /> */}
                  <img src={s13} alt="Suliko img13" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s14.childImageSharp.fluid}
                  alt="img14"
                /> */}
                  <img src={s14} alt="Suliko img14" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s15.childImageSharp.fluid}
                  alt="img15"
                /> */}
                  <img src={s15} alt="Suliko img15" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* <Img
                  fluid={props.data.s16.childImageSharp.fluid}
                  alt="img16"
                /> */}
                  <img src={s16} alt="Suliko img16" />
                </SwiperSlide>
              </Swiper>
            </Container>
            <br /> <br />
            <Container id="welcome" className={classes.welcomeWrapper}>
              <Welcome />
            </Container>
            <br /> <br />
            <Container id="press">
              {" "}
              <Press />{" "}
            </Container>
            <br /> <br />
            <img
              id="menu"
              src={menu}
              alt="img"
              style={{
                display: "block",
                margin: "0px auto",
                paddingTop: "100px",
              }}
            />
            <br /> <br />
            <br />
            <Container className={classes.menuWrapper}>
              <Menu />
            </Container>
            <br /> <br />
            <img
              src={menu}
              alt="img"
              style={{ display: "block", margin: "0px auto" }}
            />
            <br /> <br />
            <br />
            <Container id="contact" className={classes.contactWrapper}>
              <Contact />
            </Container>
          </Container>
        )}
        {showAfterLoading && (
          <Container id="map" className={classes.mapWrapper} maxWidth="lg">
            <iframe
              className={classes.map}
              title="map"
              src={process.env.GATSBY_GM}
            ></iframe>
          </Container>
        )}
        {showAfterLoading && <Footer />}
        <CookiesBar />
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    bgH1: file(relativePath: { eq: "bgH1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgH2: file(relativePath: { eq: "bgH2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s1: file(relativePath: { eq: "s1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s2: file(relativePath: { eq: "s2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s3: file(relativePath: { eq: "s3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s4: file(relativePath: { eq: "s4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s5: file(relativePath: { eq: "s5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s6: file(relativePath: { eq: "s6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s7: file(relativePath: { eq: "s7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s8: file(relativePath: { eq: "s8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s9: file(relativePath: { eq: "s9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s10: file(relativePath: { eq: "s10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s11: file(relativePath: { eq: "s11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s12: file(relativePath: { eq: "s12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s13: file(relativePath: { eq: "s13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s14: file(relativePath: { eq: "s14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s15: file(relativePath: { eq: "s15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s16: file(relativePath: { eq: "s16.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
