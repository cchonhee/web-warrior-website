import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import Img from 'gatsby-image'

export default function Projects({ data }) {
    console.log(data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>포트폴리오</h2>
                <h3>내가 만든 프로젝트 & 웹싸이트</h3>
                <div className={styles.projects}>
                    {projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                <h3>{ project.frontmatter.title }</h3>
                                <p>{ project.frontmatter.stack }</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Contact me at {contact}</p>
            </div>
        </Layout>
    )
}

// export page query
export const query = graphql`
query ProjectDetails {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            id
            frontmatter {
                slug
                stack
                title
                date
                thumb {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
    contact: site {
        siteMetadata {
            contact
        }
    }
}
`