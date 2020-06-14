import React from "react"
import Layout from "../components/layout"
// import styles from "../components/blog.module.css"
import styled from "styled-components"

import { ExampleButton } from "../components/button"

// const blog = () => {
//   return (
//     <Layout>
// <div className={styles.page}>
//   <h1>this is the blog page</h1>
//   <p className={styles.text}>
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
//     recusandae saepe doloremque amet et distinctio illum quidem. Commodi
//     velit similique, quia expedita autem iusto nam.
//   </p>
//   <ExampleButton primary>click me</ExampleButton>
// </div>
//     </Layout>
//   )
// }
const blog = () => {
  const Container = styled.div`
    display: grid;
    min-width: 375px;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    grid-template-rows: 1fr 1fr auto;
    background: blue;
    color: white;
    box-sizing: border-box;

    & h1 {
      color: white;
      grid-row: 1;
      place-self: center;
    }
    & p {
      text-transform: uppercase;
      grid-row: 2;
      padding: 1rem;
      -width: 700px;
      place-self: center;
    }
    & button {
      grid-row: 3;
      place-self: start;
    }
  `

  return (
    <Layout>
      <Container>
        <h1>this is the blog page</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          recusandae saepe doloremque amet et distinctio illum quidem. Commodi
          velit similique, quia expedita autem iusto nam.
        </p>

        <ExampleButton primary>click me</ExampleButton>
      </Container>
    </Layout>
  )
}

export default blog
