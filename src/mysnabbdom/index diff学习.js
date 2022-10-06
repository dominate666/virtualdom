import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";
const container = document.getElementById("container");
const btn = document.getElementById("btn");
const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);
let vnode1 = h("ul", {}, [
  h("li", {key:"A"}, "A"),
  h("li", {key:'B'}, "B"),
  h("li", {key:'C'}, "C"),
  h("li", {key:'D'}, "D"),
]);
let vnode2 = h("ul", {}, [
  h("li", {key:'E'}, "E"),
  h("li", {key:'A'}, "A"),
  h("li", {key:'B'}, "B"),
  h("li", {key:'C'}, "C"),
  h("li", {key:'D'}, "D")
]);

patch(container, vnode1);
btn.addEventListener("click", () => {
  patch(vnode1, vnode2);
});
