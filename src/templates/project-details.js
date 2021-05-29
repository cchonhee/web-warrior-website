import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg, site } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={styles.details}>
                <h2>{ title }</h2>
                <h3>{ stack }</h3>
                <a className={styles.btn} href={ site }>사이트 바로가기</a>
                <div className={styles.featured}>
                    <Img fluid={ featuredImg.childImageSharp.fluid } />
                </div>
                <div className={styles.html} dangerouslySetInnerHTML = {{ __html: html}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectsPage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                stack
                title
                site
                featuredImg {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

