import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styles from "../components/product.module.css";

import Image from "gatsby-image"
import { Link } from "gatsby"
const ComponentName = ({ data }) => {
  const { allContentfulProduct: { nodes: products }, } = data
  console.log(products)
  return (
    < Layout >
      <section className={styles.page}>
        {
          products.map((product, i) => {
            return (
              <article key={product.id}>
                <Image className="img" fluid={product.image.fluid} />
                <h1 >{product.title} <span>{product.price}</span></h1>
                <Link to={`/products/${product.slug}`}>Details</Link>
              </article>

            )
          })
        }


      </section>

    </ Layout >
  )
}


export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        price
        slug
        title
        id
      }
    }
  }
`

export default ComponentName
