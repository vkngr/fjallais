const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  console.log("Page - " + page.page)
  if (page.path.match(/^\/experience/)) {
    createPage({
      path: "/experience",
      matchPath: "/experience/:id",
      component: path.resolve("src/pages/experience.js"),
    })
  }
}
