import VueEllipseProgress from "./views/Sites/CRM_Dashboard.vue";

const install = (Vue, name = "vue-ellipse-progress") => Vue.component(name, VueEllipseProgress);

let globalVue = null;
if (typeof window !== "undefined") {
  globalVue = window.Vue;
} else if (typeof global !== "undefined") {
  globalVue = global.Vue;
}
if (globalVue) {
  globalVue.use({ install });
}

export default {
  install,
};
