import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Avatar() {
  return (
    <StaticQuery
      query={Query}
      render={data => {
        const { author, social } = data.site.siteMetadata
        console.log(data)
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fluid={data.avatar.childImageSharp.fluid}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
            />
            <p>
              Queried from the inside of Avatar.js component with StaticQuery
            </p>
          </div>
        )
      }}
    />
  )
}

const Query = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Avatar
