import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import JSONData from "../data/experiences.json"

const Experience = ({ id }) => {
  let search = JSONData.filter(item => item.slug == id)

  if (search.length <= 0) {
    return (
      <Layout>
        <Seo title="Experience" />
        EXPERIENCE NOT FOUND
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Seo title="Experience" />
        {search[0].displayName}
      </Layout>
    )
  }
}

export default Experience
