import * as jsxRuntime from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Link, Routes, Route } from "react-router-dom";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
function multiply(a, b) {
  return a * b;
}
function multiplyAndAdd(a, b, c) {
  return add(multiply(a, b), c);
}
function add(a, b) {
  return a + b;
}
function addAndMultiply(a, b, c) {
  return multiply(add(a, b), c);
}
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "About" }),
    /* @__PURE__ */ jsx("div", { children: addAndMultiply(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { children: multiplyAndAdd(1, 2, 3) })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
function Env() {
  let msg = "default message here";
  try {
    msg = process.env.MY_CUSTOM_SECRET || msg;
  } catch {
  }
  return /* @__PURE__ */ jsx("h1", { children: msg });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Env
}, Symbol.toStringTag, { value: "Module" }));
const valueA = "circ-dep-init-a";
const valueB = "circ-dep-init-b";
const valueAB = valueA.concat(` ${valueB}`);
function getValueAB() {
  return valueAB;
}
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Home" }),
    /* @__PURE__ */ jsx("div", { children: addAndMultiply(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { children: multiplyAndAdd(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { className: "circ-dep-init", children: getValueAB() })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const pages = /* @__PURE__ */ Object.assign({ "./pages/About.jsx": __vite_glob_0_0, "./pages/Env.jsx": __vite_glob_0_1, "./pages/Home.jsx": __vite_glob_0_2 });
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: pages[path].default
  };
});
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: routes.map(({ name, path }) => {
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: path, children: name }) }, path);
    }) }) }),
    /* @__PURE__ */ jsx(Routes, { children: routes.map(({ path, component: RouteComp }) => {
      return /* @__PURE__ */ jsx(Route, { path, element: /* @__PURE__ */ jsx(RouteComp, {}) }, path);
    }) })
  ] });
}
function render(url, context) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, context, children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  render
};
