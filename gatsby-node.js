exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(
    `
      query {
        allContentfulExperience {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  console.log("experiences")
  console.log(data)

  data.allContentfulExperience.edges.forEach(edge => {
    const slug = edge.node.slug

    actions.createPage({
      path: "/experience/" + slug,
      component: require.resolve(`./src/pages/experience.js`),
      context: { slug: slug },
    })
  })
}
