import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "../images/image1.jpg"
import Image from 'gatsby-image'

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "image3.jpg"}) {
      size
      childImageSharp {
        fixed (width:200,grayscale:true){
          ...GatsbyImageSharpFixed
          
        }
      }
    }
    fluid: file(relativePath: {eq: "image2.jpg"}) {
      size
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG

        }
      }
    }
    example: file(relativePath: {eq: "image5.jpg"}) {
        size
        childImageSharp {
          fluid(maxWidth:100) {
            src
          }
        }
      }
  }
  

`

function Images() {
    const data = useStaticQuery(getImages)
    console.log("images", data)

    return <section className="images">
        <article className="single-image">
            <h3>Basic image</h3>
            <img src={Img} alt="img1" width="100%" />
        </article>
        <article className="single-image">
            <h3>Fixed image/blur</h3>
            <Image fixed={data.fixed.childImageSharp.fixed} />
        </article>
        <article className="single-image">
            <h3>Fliud image/svg</h3>
            <Image fluid={data.fluid.childImageSharp.fluid} />
            <Image fluid={data.fluid.childImageSharp.fluid} />

        </article>
    </section>

}

export default Images
