import React from "react";
import Layout from "../components/Layouts";
import Helmet from "react-helmet";
import scrollTo from "gatsby-plugin-smoothscroll";
import styles from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import BottomLogo from "../images/regpolLogo/TopLogo.png";

const StyledSection = styles.section`
height: 92vh;
max-width: inherit;
position: relative;
margin-top: -5px;
.BckImage{
  height: 100%;
  position: absolute;
  top: 5px;
  z-index: -10;
  filter: brightness(65%);
}
.C2A {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute; 
  top: 30%;
}

.littleImage {
  position: absolute;
  top: 65%;
  left: 5%;
  padding: 15px;
  z-index: 20;
  width: 250px;
}
@media only screen and (max-height: 550px) {
  .littleImage{
    top: 70%;
  }
}


.littleImage p {
  color: white;
  padding: 5px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
}


.C2A p {
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: white;
  position: relative;
  margin: 30px;
  padding: 25px;
}
.C2A p::before {
  content: '';
  width: 110%;
height: 3px;
background-color: white;
position: absolute;
top: 0;
left: -5%;
}
.C2A p::after {
  content: '';
  width: 80%;
height: 3px;
background-color: white;
position: absolute;
bottom: 0;
left: 10%;
}

.C2A button {
  font-size: 25px;
  padding:13px;
  border-radius: 10px;
  background: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  outline: none;
  transition: all .2s ease-in;
}
.C2A button:hover{
  transform: scale(1.1);
}

@media only screen and (max-width: 1450px) {
  .littleImage {
    width: 220px;
  }
}
@media only screen and (max-width: 1350px) {
  .C2A p {
    font-size: 35px;
  }
  .C2A button {
    font-size: 20px;
  }
}
@media only screen and (max-width: 1150px) {
  .C2A p {
    font-size: 30px;
    margin: 25px;
  }
  .C2A button {
    font-size: 15px;
  }
  .littleImage {
    width: 200px;
    top: 70%;
  }
}
@media only screen and (max-width: 850px){
  .C2A p {
    font-size: 25px;
    padding: 15px;
  }
  .C2A button {
    font-size: 14px;
  }
  .littleImage {
    width:160px;
    top: 75%;
  }
  .littleImage p {
    font-size: 12px;
  }
}
@media only screen and (max-width: 600px) {
  .C2A p {
    font-size: 20px;
    margin: 15px;
  }
  .C2A button {
    font-size: 12px;
  }
}
@media only screen and (max-width: 450px) {
  .C2A p {
    font-size: 15px;
    padding: 10px;
    line-height: 20px;
    letter-spacing: 1px;
  }
  .C2A p::before{
    width: 105%;
    left: -3%;
  }
  .C2A p::after {
    width: 70%;
    left: 15%;
  }
  .C2A  button {
    font-size: 12px;
    padding: 10px;
    letter-spacing: 1px;
  }
  @media only screen and (max-width: 320px) {
    .C2A p {
      font-size: 12px;
    }
    .C2A p::before {
      width: 100%;
      left: 0;
    }
    .littleImage {
      width: 130px;
    }
    .littleImage p {
      font-size: 10px;
    }
  }

 
}
`;
const StyledArticle = styles.article`
width: 80%;
margin: 20px auto;
.articleLogo {
  font-size: 25px;
  width: 80%;
  margin: 0 auto 0 0px;
}

.articleLogo p {
  text-align: left;
  margin-bottom: 10px;
}


.articleLogo img {
  background: var(--mainRed);
  width: 70%;
  height: 70%;
  color: black;
}

@media only screen and (min-width: 450px) {
  .articleLogo img{
    height: 50%;
    width: 50%;
  }
}

@media only screen and (min-width: 750px) {
  .articleLogo img {
    height: 35%;
    width: 35%;
  }
}
@media only screen and (min-width: 1100px) {
  .articleLogo img {
    height: 25%;
    width: 25%;
  }
}

.articleDescription p {
  line-height: 25px;
  letter-spacing: 1px;
  margin-top: 25px;
}
@media only screen and (min-width: 1050px) {
  .articleLogo {
    font-size: 30px;
  }
}
@media only screen and (min-width: 1250px) {
  .articleDescription p {
    line-height: 35px;
  }

}
@media only screen and (min-width: 1550px) {
  .articleDescription p {
    line-height: 42px;
    font-size: 20px;
  }
  .articleLogo img {
    width: 20%;
    height: 20%;
  }
}
`;

const data = graphql`
  query MyQuery {
    allImageSharp {
      nodes {
        gatsbyImageData
        fluid {
          originalName
        }
      }
    }
  }
`;

export default function Home() {
  const imagesData = useStaticQuery(data);

  const loctiteLogo = imagesData.allImageSharp.nodes.filter(
    (item) => item.fluid.originalName === "loctiteterosonlogo.jpg"
  );

  const backgroundImage = imagesData.allImageSharp.nodes.filter(
    (item) => item.fluid.originalName === "websiteBackground.png"
  );

  return (
    <Layout>
      <Helmet>
        <title>
          Kleje przemys??owe, uszczelniacze, silikony | Regpol Bydgoszcz
        </title>
        <meta
          name="description"
          content="Kleje przemys??owe, uszczelniacze, silikony"
        />
        <meta
          name="keywords"
          content="Regpol Henkel Loctite Teroson Bonderite"
        />
        <link rel="canonical" href="https://www.regpol.info/"></link>
        <meta
          name="google-site-verification"
          content="0t_mUGg6-O9Is_yqF-wo4-LiCuWSniEbcSsZ5cW0qPs"
        />

        <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bydgoszcz",
          "addressRegion": "Kujawsko-Pomorskie",
          "streetAddress": " Lecha Kaczy??skiego"
          },
          "name": "Regpol",
          "telephone": "52 345 38 75"
        }
    `}</script>
      </Helmet>

      <StyledSection>
        <div className="C2A">
          <p>
            Technologie kt??re sprostaj?? <br /> najwi??kszym wyzwaniom
          </p>
          <button onClick={() => scrollTo("#HomePageArticle")}>
            Zobacz Wi??cej
          </button>
        </div>
        <div className="littleImage">
          <p>Autoryzowany Dystrybutor</p>
          <GatsbyImage
            image={loctiteLogo[0].gatsbyImageData}
            alt="logo loctite teroson"
          />
        </div>
        <GatsbyImage
          className="BckImage"
          image={backgroundImage[0].gatsbyImageData}
          alt="background image"
        />
      </StyledSection>
      <StyledArticle id="HomePageArticle">
          <div className="articleLogo">
            <p>BIURO HANDLOWE</p>
            <img alt="regpol logo" src={BottomLogo}></img>
          </div>
          <div className="articleDescription" style={{ marginTop: "30px" }}>
            <h1 style={{ marginTop: "30px", fontSize: "30px" }}>
              Wysokiej jako??ci kleje przemys??owe: loctite 243, teroson ms 939
            </h1>
            <p style={{ textAlign: "justify" }}>
              Witamy wszystkich bardzo serdecznie. Mi??o nam, ??e odwiedzili??cie
              Pa??stwo nasz?? stron??. Firma Biuro Handlowe REGPOL Bydgoszcz Sp. z
              o.o. istnieje od 1992 roku. Jeste??my autoryzowanym
              przedstawicielem firmy HENKEL. W ofercie naszego sklepu znajduj??
              si?? produkty mi??dzy innymi takie jak: Loctite 243 oraz Teroson MS
              939, kt??re w bran??y przemys??owej i motoryzacyjnej stanowi??
              podstawow?? baz?? ??rodk??w chemicznych w naprawach, renowacjach i
              konserwacjach. Na szczeg??ln?? uwag?? zas??uguj?? produkty Teroson.
              Kleje te nie bez powodu ciesz?? si?? du???? popularno??ci??, zwa??ywszy
              na same pozytywne w??a??ciwo??ci. Gwarantujemy, ??e wybrany z
              asortymentu klej do aluminium Loctite b??dzie spe??nia?? najwy??sze
              oczekiwania. Funkcjonujemy po to, aby zapewni?? Pa??stwu komfortowy
              zakup jako??ciowych produkt??w w jednym miejscu.{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
              Nasze do??wiadczenie, zdobyte po tylu latach obcowania z mark??
              HENKEL, pozwala nam s??u??y?? Pa??stwu wszelk?? pomoc?? w zakresie
              doboru odpowiedniego produktu oraz rozwi??zywania najbardziej
              nietypowych problem??w, z kt??rymi mog?? si?? Pa??stwo spotka?? nie
              tylko w sferze zawodowej. Zach??camy do skorzystania z naszej
              oferty!
            </p>
          </div>
        </StyledArticle>
    </Layout>
  );
}
