import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        {
            site {
            siteMetadata {
                title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <nav>
            <h1>{ title }</h1>
            <div className="links">
                <Link to="/">홈</Link>
                <Link to="/about">사이트정보</Link>
                <Link to="/projects">포트폴리오 프로젝트</Link>
            </div>
        </nav>
    )
}
