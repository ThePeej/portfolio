// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/home/pj/Documents/Dev/Portfolio/portfolio/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/pj/Documents/Dev/Portfolio/portfolio/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/pj/Documents/Dev/Portfolio/portfolio/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/pj/Documents/Dev/Portfolio/portfolio/.cache/json/404.json"),
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/pj/Documents/Dev/Portfolio/portfolio/.cache/json/layout-index.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/pj/Documents/Dev/Portfolio/portfolio/.cache/json/index.json"),
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/pj/Documents/Dev/Portfolio/portfolio/.cache/json/layout-index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/pj/Documents/Dev/Portfolio/portfolio/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/pj/Documents/Dev/Portfolio/portfolio/.cache/layouts/index.js")
}