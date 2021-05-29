import { graphql, Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import Img from 'gatsby-image'

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>디자인!!!!</h2>
          <h3>개발 & 배포</h3>
          <p>분당에 거주하는 UX 디자이너 & 웹개발자</p>
          <Link className={styles.btn} to="/projects">나의 포트폴리오 프로젝트</Link>  
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
