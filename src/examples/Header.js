import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const getData = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//         data
//         person {
//           name
//           age
//         }
//       }
//     }
//   }
// `
import { useSiteMetadata } from './dataHooks'
const Header = () => {
  // const { site: { siteMetadata: { title, person: { name, age } } } } = useStaticQuery(getData)
  // const title = get(this, "getData.site.siteMetadata.title");
  const { title, person: { name, age } } = useSiteMetadata()
  return (
    <div>
      {/* <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.data.map(el => el)}</p>
      <p>{data.site.siteMetadata.person.name}</p> */}

      <h1>Title: {title}</h1>
      <p>Name:{name} </p>
      <p>Age:{age} </p>
    </div>
  )
}

export default Header
