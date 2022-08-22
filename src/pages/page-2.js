import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from "axios"

const SecondPage = () => {
  const [data, setData] = React.useState(undefined)
  React.useEffect(() => {
    axios
      .get(
        "https://api.publicapis.org/entries"
      )
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
  }, [])
  return (
    <Layout>
      <h1>{data?.count}</h1>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Page two" />

export default SecondPage
