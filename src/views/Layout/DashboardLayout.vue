<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <sidebar-item
          v-if="Home"
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
              name: 'Manager-Dashboard',
              path: '/DefaultManager_Dashboard copy',
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
          ><!--nested div (submenu)  v-if="master"-->
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
              name: 'Product setting',
              path: '/productsetting',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Module settings',
              path: '/modulesetting',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'System Users',
              path: '/view_userights',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Service Providers',
              path: '/view_sproviders',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <!--BD SideBar-->
        <sidebar-item
        v-if="BD"
          :link="{
            name: 'BD',
            path: '/',
            icon: 'ni ni-building text-orange',
          }"
          ><!--nested div (submenu) -->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/BD_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <!--<sidebar-item
            :link="{
              name: 'Targets and Incentives',
              path: '/targets_Incentives',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>-->
          <sidebar-item
            :link="{
              name: 'Leads',
              path: '/BD/BD_Prospects',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <!--<sidebar-item
            :link="{
              name: 'Corporate',
              path: '/BD_corporate',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Business Lead',
              path: '/add-lead',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>-->
          <sidebar-item
            :link="{
              name: 'Meetings',
              path: '/BD_meetings',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Expense Approvals',
              path: '/expense-approvals',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <!--<sidebar-item
            :link="{
              name: 'Onboarding',
              path: '/BD_onboarding',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>-->
          <sidebar-item
            :link="{
              name: 'Executive Dashboard',
              path: '/homepage2',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <!-- <sidebar-item
            :link="{
              name: 'Executive Targets & Incentives',
              path: '/targets-and-incentives',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Executive Reports',
              path: '/executive-reports',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>-->
          <sidebar-item
            :link="{
              name: 'Supervisor/Manager Dashboard',
              path: '/DefaultManager_Dashboard copy',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <!--<sidebar-item
            :link="{
              name: 'Supervisor Expense Approval',
              path: '/supervisor-expense-approval',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Supervisor Reports',
              path: '/supervisor-reports',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>-->
        </sidebar-item>
        <sidebar-item
        v-if="onboarding"
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
              name: 'Prospect',
              path: '/your-prospect',
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
        v-if="servicing"
          :link="{
            name: 'Servicing',
            path: '/',
            icon: 'ni ni-settings text-orange',
          }"
          ><!--nested div (submenu)
           -->
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
              name: 'Scheme Servicing',
              path: '/Scheme_Dashboard',
              icon: 'ni ni-planet text-orange',
            }"
          >
            <sidebar-item
              :link="{
                name: 'Schemes',
                path: '/Schemes',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Benefits',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>

          <sidebar-item
            :link="{
              name: 'Member Servicing',
              path: '/icons',
              icon: 'ni ni-planet text-orange',
            }"
          >
            <sidebar-item
              :link="{
                name: 'Members',
                path: '/Members2',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
          </sidebar-item>

          <sidebar-item
            :link="{
              name: 'Claims',
              path: '/Claims',
              icon: 'ni ni-planet text-orange',
            }"
          >
            <sidebar-item
              :link="{
                name: 'Claims',
                path: '/claim_list',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
            <sidebar-item
              :link="{
                name: 'claim Action',
                path: '/claim_action',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          v-if="CRM"
          :link="{
            name: 'CRM',
            path: '/',
            icon: 'ni ni-user-run text-orange',
          }"
          ><!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/',
              icon: 'ni ni-planet text-orange',
            }"
          >
            <sidebar-item
              :link="{
                name: 'Compliance Dashboard',
                path: '/Compliance_Dashboard',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
            <sidebar-item
              :link="{
                name: 'CRM Dashboard',
                path: '/CRM_Dashboard',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
            <sidebar-item
              :link="{
                name: 'Email Trustee Link',
                path: '/CRM_Dashboard',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
          </sidebar-item>
          <!--<sidebar-item
          :link="{
            name: 'Schemes',
            path: '/scheme',
            icon: 'ni ni-planet text-orange',
          }"
        >-->
          <sidebar-item
            :link="{
              name: 'Fund Deatails',
              path: '/Fund_Details',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Trustees',
              path: '/Trustees_Management',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Trustees and HR Status',
              path: '/Trustee_and_HR_status',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Meetings',
              path: '/Meetings',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Service Provider Credentials',
              path: '/Service_Provider_Credentials',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <!-- commented out schemes from dashboard layout
        </sidebar-item>-->
        <sidebar-item
          v-if="elearning"
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
          v-if="accounting"
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
              name: 'Schemes',
              path: '/',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          v-if="governance"
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
              name: 'Pension',
              path: '/pension_Governance',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Insurance',
              path: '/Insurance_Governance',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Trust',
              path: '/',
              icon: 'ni ni-planet text-orange',
            }"
          >
            <sidebar-item
              :link="{
                name: 'Corporate Trustee',
                path: '/CT_Governance',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
            <sidebar-item
              :link="{
                name: 'Trust Fund',
                path: '/TF_Governance',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Strategy',
              path: '/',
              icon: 'ni ni-planet text-orange',
            }"
          >
            <sidebar-item
              :link="{
                name: 'Risk',
                path: '/strategy_risk',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
            <sidebar-item
              :link="{
                name: 'Scorecard',
                path: '/strategy_scorecard',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          v-if="insurance"
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
          v-if="elections"
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
          v-if="reports"
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
          v-if="documentcentre"
          :link="{
            name: 'Document centre',
            path: '/DocumentCentre_Dashboard',
            icon: 'ni ni-folder-17 text-orange',
          }"
          ><!--nested div (submenu)-->
          <!-- <sidebar-item
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
        </sidebar-item> -->
        </sidebar-item>
        <sidebar-item
          v-if="communication"
          :link="{
            name: 'Communication',
            path: '/Communication',
            icon: 'ni ni-send text-orange',
          }"
        >
        </sidebar-item>
        <sidebar-item
          v-if="eboard"
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
          v-if="fundmanagement"
          :link="{
            name: 'Fund Management',
            path: '/',
            icon: 'ni ni-briefcase-24 text-orange',
          }"
        >
          <sidebar-item
            :link="{
              name: 'Internal Fund management',
              path: '/',
              icon: 'ni ni-send text-orange',
            }"
          >
            <sidebar-item
              :link="{
                name: 'Internal Fund management Dashboard',
                path: '/InternalFM',
                icon: 'ni ni-send text-orange',
              }"
            >
            </sidebar-item>
            <sidebar-item
              :link="{
                name: 'Internal Fund management',
                path: '/IFM_Bal',
                icon: 'ni ni-send text-orange',
              }"
            >
            </sidebar-item>
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'External Fund management',
              path: '/ExternalFM',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <!--nested div (submenu)-->

        <sidebar-item
          v-if="member"
          :link="{
            name: 'Member',
            path: '/',
            icon: 'ni ni-single-02 text-orange',
          }"
        >
          <sidebar-item
            :link="{
              name: 'Dashboard',
              path: '/member_dashboard',
              icon: 'ni ni-send text-orange',
            }"
          >
          </sidebar-item>
          <!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Claim Benefits',
              path: '/claim_benefits',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Transaction History',
              path: '/transaction_history',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Fund Details',
              path: '/member_fund_details',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Elections',
              path: '/member_elections',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Member Statement',
              path: '/member_statement',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>

        <sidebar-item
          v-if="trustee"
          :link="{
            name: 'Trustee',
            path: '/',
            icon: 'ni ni-ni ni-paper-diploma text-orange',
          }"
        >
          <!-- <sidebar-item 
          :link="{
            name: 'Dashboard',
            path: '/trustee_dashboard',
            icon: 'ni ni-send text-orange',
          }"
        >
        </sidebar-item> -->
          <!--nested div (submenu)-->
          <sidebar-item
            :link="{
              name: 'Scheme',
              path: '/',
              icon: 'ni ni-planet text-orange',
            }"
          >
            <sidebar-item
              :link="{
                name: 'Scheme Details',
                path: '/trustee_Scheme',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
            <sidebar-item
              :link="{
                name: 'Scheme Calender',
                path: '/trustee_Calender',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Member Withdrawals',
              path: '/member_withdrawals',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Fund Details',
              path: '/member_fund_details',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>

        <sidebar-item
          v-if="service_provider"
          :link="{
            name: 'Service Provider',
            path: '/',
            icon: 'ni ni-single-02 text-orange',
          }"
        >
          <!-- <sidebar-item 
          :link="{
            name: 'Dashboard',
            path: '/service_provider',
            icon: 'ni ni-send text-orange',
          }"
        >
        </sidebar-item> -->
          <!--nested div (submenu)-->
          <!-- <sidebar-item
          :link="{
            name: 'Invoices and fees',
            path: '/provider_invoice',
            icon: 'ni ni-planet text-orange',
          }"
        >
        </sidebar-item> -->
          <sidebar-item
            :link="{
              name: 'Reports',
              path: '/provider_reports',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Invoices and fees',
              path: '/provider_invoice_dev',
              icon: 'ni ni-planet text-orange',
            }"
          >
          </sidebar-item>
        </sidebar-item>

        <sidebar-item
          v-if="HR"
          :link="{
            name: 'HR',
            path: '/',
            icon: 'ni ni-single-02 text-orange',
          }"
        >
          <!-- <sidebar-item 
          :link="{
            name: 'Dashboard',
            path: '/hr',
            icon: 'ni ni-send text-orange',
          }"
        >
        
        </sidebar-item>-->
          <sidebar-item
            :link="{
              name: 'Member Servicing',
              path: '/',
              icon: 'ni ni-planet text-orange',
            }"
          >
            <sidebar-item
              :link="{
                name: 'Member Register',
                path: '/hr_member_register',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
            <sidebar-item
              :link="{
                name: 'Submit Member Contributions',
                path: '/hr_member_contributions',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
            <sidebar-item
              :link="{
                name: 'Member Statement',
                path: '/hr_member_statement',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
            <sidebar-item
              :link="{
                name: 'Member withdrawals',
                path: '/hr_member_withdrawals',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
            <sidebar-item
              :link="{
                name: 'Initiate death payment',
                path: '/hr_death_withdrawals',
                icon: 'ni ni-planet text-orange',
              }"
            >
            </sidebar-item>
          </sidebar-item>
          <!--
        <sidebar-item
          :link="{
            name: 'Transaction History',
            path: '/transaction_history',
            icon: 'ni ni-planet text-orange',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Fund Details',
            path: '/member_fund_details',
            icon: 'ni ni-planet text-orange',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Elections',
            path: '/member_elections',
            icon: 'ni ni-planet text-orange',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Member Statement',
            path: '/member_statement',
            icon: 'ni ni-planet text-orange',
          }"
        >
        </sidebar-item> -->
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
        <hr class="my-3" />
        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>

        <b-nav class="navbar-nav mb-md-3">
          <b-nav-item
            href="https://www.creative-tim.com/learning-lab/bootstrap-vue/quick-start/argon-dashboard"
          >
            <i class="ni ni-spaceship"></i>
            <b-nav-text class="p-0">Getting started</b-nav-text>
          </b-nav-item>
          <b-nav-item
            href="https://www.creative-tim.com/learning-lab/bootstrap-vue/colors/argon-dashboard"
          >
            <i class="ni ni-palette"></i>
            <b-nav-text class="p-0">Foundation</b-nav-text>
          </b-nav-item>
          <b-nav-item
            href="https://www.creative-tim.com/learning-lab/bootstrap-vue/avatar/argon-dashboard"
          >
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
  data() {
    return {
      loggedOut: true,
      Home: false,
      accounting: false,
      BD: false,
      Servicing: false,
      CRM: false,
      onboarding: false,
      reports: false,
      elections: false,
      elearning: false,
      fundmanagement: false,
      governance: false,
      master: false,
      servicing: false,
      communication: false,
      eboard: false,
      member: false,
      trustee: false,
      service_provider: false,
      HR: false,
    };
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
  },
  beforeMount() {},
  mounted() {
    this.initScrollbar();
    if (localStorage.getItem("userData") !== null) {
      let items = [JSON.parse(localStorage.getItem("userData"))];
      console.log("userdata", items);

      for (let i in items) {
        let me = items[i].oafslmodules;
        console.log("me", me);
        if (me === "MSTP01") {
          this.master = true;
        } else if (me === "ACC07") {
          this.accounting = true;
        } else if (me === "BD02") {
          this.BD = true;
        } else if (me === "CRM05") {
          this.CRM = true;
        } else if (me === "ELEARN08") {
          this.elearning = true;
        } else if (me === "ELEC09") {
          this.elections = true;
        } else if (me === "FUND11") {
          this.fundmanagement = true;
        } else if (me === "GOV06") {
          this.governance = true;
        } else if (me === "OBD03") {
          this.onboarding = true;
        } else if (me === "RPT10") {
          this.reports = true;
        } else if (me === "SER04") {
          this.servicing = true;
        }
        //if(me === "ACC07"){
        // this.accounting = true;
        // }
        // if(me === "BD02"){
        //   this.BD = true;
        // }
        // if(me === "CRM05"){
        //   this.CRM =true
        // }
        else {
          this.master = false;
          this.accounting = false;
          this.BD = false;
          this.CRM = false;
          this.elearning = false;
          this.elections = false;
          this.fundmanagement = false;
          this.governance = false;
          this.onboarding = false;
          this.reports = false;
          this.servicing = false;
        }
      }

      this.loggedOut = false;
      return;
    } else {
      if (this.loggedOut) {
        this.$router.push("/login");
      }
      return (this.loggedOut = true);
    }
  },
};
</script>
<style lang="scss"></style>
