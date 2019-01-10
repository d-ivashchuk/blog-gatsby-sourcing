import React from 'react'
import Image from 'gatsby-image'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

class ContentfulPage extends React.Component {
  render() {
    const courses = this.props.data.allContentfulCourse.edges
    return (
      <Layout location={this.props.location}>
        <Link to="/">Back</Link>
        {courses.map(course => {
          return (
            <React.Fragment>
              <h3>{course.node.title}</h3>
              <Image sizes={course.node.image.sizes} />
              <div>{course.node.duration}</div>
              <p>{course.node.shortDescription}</p>
            </React.Fragment>
          )
        })}
      </Layout>
    )
  }
}

export default ContentfulPage

export const pageQuery = graphql`
  query {
    allContentfulCourse(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          duration
          shortDescription
          image {
            sizes(maxWidth: 1280) {
              ...GatsbyContentfulSizes
            }
            id
          }
        }
      }
    }
  }
`
