import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// These can be imported from other files
import Home from "./views/Home";
import Players from "./views/Players";
import MagicWords from "./views/MagicWords";
import BFS from "./views/BFS";

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/MagicWords", component: MagicWords },
  { path: "/Players", component: Players },
  { path: "/BFS", component: BFS }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default new VueRouter({
  routes // short for `routes: routes`
});
