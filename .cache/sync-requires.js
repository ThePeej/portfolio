// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/pj/Documents/Dev/Portfolio/portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/pj/Documents/Dev/Portfolio/portfolio/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/pj/Documents/Dev/Portfolio/portfolio/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/pj/Documents/Dev/Portfolio/portfolio/.cache/json/layout-index.json"),
  "404.json": require("/home/pj/Documents/Dev/Portfolio/portfolio/.cache/json/404.json"),
  "layout-index.json": require("/home/pj/Documents/Dev/Portfolio/portfolio/.cache/json/layout-index.json"),
  "index.json": require("/home/pj/Documents/Dev/Portfolio/portfolio/.cache/json/index.json"),
  "layout-index.json": require("/home/pj/Documents/Dev/Portfolio/portfolio/.cache/json/layout-index.json"),
  "404-html.json": require("/home/pj/Documents/Dev/Portfolio/portfolio/.cache/json/404-html.json")
}