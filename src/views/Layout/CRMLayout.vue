<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Home',
            path: '/',
            icon: 'ni ni-planet text-orange',
          }"
        >
          <!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'User-Dashboard',
              path: '/homepage',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Exec-Dashboard',
              path: '/homepage2',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Master-Setup',
            path: '/',
            icon: 'ni ni-settings-gear-65 text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/MasterSetup_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'BD',
            path: '/',
            icon: 'ni ni-building text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/BD_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'On-boarding',
            path: '/',
            icon: 'ni ni-bus-front-12 text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/Onboarding_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Retail',
              path: '/Retail',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Corporate',
              path: '/Corporate',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Servicing',
            path: '/',
            icon: 'ni ni-settings text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/Servicing_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'CRM',
            path: '/',
            icon: 'ni ni-user-run text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/CRM_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'E-learning',
            path: '/',
            icon: 'ni ni-books text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/E-Learning_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Accounting',
            path: '/',
            icon: 'ni ni-ruler-pencil text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/Accounting_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Governance',
            path: '/',
            icon: 'ni ni-chart-pie-35 text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/Governance_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Insurance',
            path: '/',
            icon: 'ni ni-paper-diploma text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/Insurance_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Elections',
            path: '/',
            icon: 'ni ni-check-bold text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/Elections_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Reports',
            path: '/',
            icon: 'ni ni-single-copy-04 text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/Reports_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Document centre',
            path: '/',
            icon: 'ni ni-folder-17 text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/DocumentCentre_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Communication',
            path: '/',
            icon: 'ni ni-send text-orange',
          }"
        >
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/Communication_Dashboard',
              icon: 'ni ni-send text-orange',
            }"
          >
          </sidebar-item>
          <!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'E-board',
            path: '/',
            icon: 'ni ni-briefcase-24 text-orange',
          }"
        >
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/E-Board_Dashboard',
              icon: 'ni ni-send text-orange',
            }"
          >
          </sidebar-item>
          <!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'EditVue',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Fund Management',
            path: '/',
            icon: 'ni ni-briefcase-24 text-orange',
          }"
        >
          <sidebar-item
            :link="{
              name: 'Internal Fund management',
              path: '/InternalFM',
              icon: 'ni ni-send text-orange',
            }"
          >
          </sidebar-item>
          <!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'External Fund management',
              path: '/ExternalFM',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>

        <!--Old template code that is preserved for future use  
        <sidebar-item
            :link="{
              name: 'Icons',
              path: '/icons',
              icon: 'ni ni-planet text-blue'
              }"
            >
        </sidebar-item>

        <sidebar-item
              :link="{
                name: 'Maps',
                path: '/maps',
                icon: 'ni ni-pin-3 text-orange'
              }">
        </sidebar-item>

        <sidebar-item
              :link="{
                name: 'User Profile',
                path: '/profile',
                icon: 'ni ni-single-02 text-yellow'
                }">
        </sidebar-item>

        <sidebar-item
                :link="{
                  name: 'Tables',
                  path: '/tables',
                  icon: 'ni ni-bullet-list-67 text-red'
                }">
        </sidebar-item>

        <sidebar-item
                  :link="{
                    name: 'Login',
                    path: '/login',
                    icon: 'ni ni-key-25 text-info'
                  }">
        </sidebar-item>
        <sidebar-item
                  :link="{
                    name: 'Register',
                    path: '/register',
                    icon: 'ni ni-circle-08 text-pink'
                  }">
        </sidebar-item>-->
      </template>

      <!--<template slot="links-after">
        <hr class="my-3">
        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>

        <b-nav class="navbar-nav mb-md-3">
          <b-nav-item
               href="https://www.creative-tim.com/learning-lab/bootstrap-vue/quick-start/argon-dashboard"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="p-0">Getting started</b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/learning-lab/bootstrap-vue/colors/argon-dashboard">
              <i class="ni ni-palette"></i>
              <b-nav-text class="p-0">Foundation</b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/learning-lab/bootstrap-vue/avatar/argon-dashboard">
              <i class="ni ni-ui-04"></i>
              <b-nav-text class="p-0">Components</b-nav-text>
          </b-nav-item>
          
        </b-nav>
      </template>-->
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "./HomeNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    FadeTransition,
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
  },
  mounted() {
    this.initScrollbar();
  },
};
</script>
<style lang="scss"></style>
