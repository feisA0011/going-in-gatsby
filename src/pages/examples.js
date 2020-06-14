import React from 'react'
import Layout from '../components/layout'
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from 'gatsby'
const examples = ({ data }) => {
    const { site: { info: { author } } } = data;

    return (
        <Layout>

            <p>Hello from examples page</p>
            <Header />
            <HeaderStatic />
            <h5>{author}</h5>
        </Layout>
    )
}
export const data = graphql`
query  {
    site {
      info: siteMetadata{
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }  
`
export default examples
