import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import CRMLayout from '@/views/Layout/CRMLayout.vue'

import NotFound from '@/views/NotFoundPage.vue';


const routes = [
  {
    path: '/',
    redirect: 'homepage',
    component: DashboardLayout,
    children: [
      {
        path: '/homepage',
        name: 'homepage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/DefaultUser_Dashboard.vue')
      },
      {
        path: '/homepage2',
        name: 'Executive Dasboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/DefaultExec_Dashboard.vue')
      },
      {
        path: '/DefaultManager_Dashboard copy',
        name: 'Supervisor/Manager Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/DefaultManager_Dashboard copy.vue')
      },
      {
        path: '/DefaultDepart_Dashboard',
        name: 'homepage4',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/DefaultDepart_Dashboard.vue')
      },   
      {
        path: '/DefaultGroup_Dashboard',
        name: 'homepage5',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/DefaultGroup_Dashboard.vue')
      },
      {
        path: '/DefaultOrg_Dashboard',
        name: 'homepage6',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/DefaultOrg_Dashboard.vue')
      },
      {
        path: '/DefaultTeam_Dashboard',
        name: 'homepage7',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/DefaultTeam_Dashboard.vue')
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Icons.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/maps',
        name: 'maps',
        component: () => import(/* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      },
      {
        path: '/Accounting_Dashboard',
        name: 'Accounting Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Accounting_Dashboard.vue')
      },
      {
        path: '/MasterSetup_Dashboard',
        name: 'MasterSetup Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/MasterSetup_Dashboard.vue')
      },

      /*BD Routes*/
      {
        path: '/BD_Dashboard',
        name: 'BD Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/DefaultUser_Dashboard.vue')
      },
      /*insurance BD process*/
      {
        path: '/insurance_BD_form',
        name: 'Insurance BD form',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/insuranceProcess.vue')
      },
      {
        path: '/BD/BD_Prospects',
        name: 'your leads',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/yourProspect.vue')
      },
      {
        path: '/your-prospect',
        name: 'your prospects',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/yourLead.vue')
      },
      {
        path: '/Prospect_Edits',
        name: 'Prospect Edit',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/Prospect_Edits.vue')
      },
      
      ///{
      //  path: '/targets_Incentives',
       // name: 'Targets and Incentives',
       // component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/BD_Targets_Dashboard.vue')
     // },
    
      {
        path: '/BD_targets_Incentives',
        name: 'Targets and Incentives',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/BD_Targets.vue')
      },
      {
        path: '/add-prospect/:data',
        name: 'Add Prospect',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/prospect.vue')
      },
      {
        path: '/add-lead',
        name: 'Add Lead',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/BusinessLead.vue')
      },
      {
        path: '/BD_meetings',
        name: 'Meetings',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/MeetingBD.vue')
      },
      {
        path: '/schedule&request-funds',
        name: 'Schedule meeting / Request Funds',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/BDMeeting.vue')
      },
      {
        path: '/expense-approvals',
        name: 'Expense Approvals',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/expense.vue')
      },
      {
        path: '/BD_onboarding',
        name: 'Onboarding',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/BD_onboard.vue')
      },
      {
        path: '/BD_corporate',
        name: 'Corporate',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/corporate.vue')
      },
      {
        path: '/executive-view',
        name: 'Executive Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Executive_BD_Dashboard.vue')
      },
      {
        path: '/targets-and-incentives',
        name: 'Targets and Incentives',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/executive.vue')
      },
      {
        path: '/executive-reports',
        name: 'Executive Reports',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Executive_BD_Reports.vue')
      },
      {
        path: '/supervisor-expense-approval',
        name: 'Supervisor Expense Approval',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/BD/Supervisor.vue')
      },
      {
        path: '/supervisor-view',
        name: 'Supervisor BD Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Supervisor_BD_Dashboard.vue')
      },
      {
        path: '/supervisor-reports',
        name: 'Supervisor BD Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Supervisor_BD_Reports.vue')
      },
      /*BD Routes End*/
      {
        path: '/Onboarding_Dashboard',
        name: 'Onboarding Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Onboarding_Dashboard.vue')
      },
      {
        path: '/Servicing_Dashboard',
        name: 'Servicing Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing_Dashboard.vue')
      },
      {
        path: '/Servicing_Dashboard',
        name: 'Scheme Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Servicing_Dashboard.vue')
      },
      

      /*Servicing navigation links*/ 
      {
        path: '/Schemes',
        name: 'Schemes',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Schemes.vue')
      },
      {
        path: '/Scheme_settings',
        name: 'Scheme Settings',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Scheme_settings.vue')
      },
      {
        path: '/scheme_servicing2',
        name: 'Scheme Servicing',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/scheme_servicing2.vue')
      },
      {
        path: '/Import_benefits',
        name: 'Import Benefits',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Import_benefits.vue')
      },
      {
        path: '/Scheme_billing',
        name: 'Scheme Billing',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Scheme_billing')
      },
      {
        path: '/Expense and Allowances',
        name: 'Expense and Allowances',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Expense and Allowances.vue')
      },
      {
        path: '/Invoice_Processing',
        name: 'Invoice Processing',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Invoice_Processing.vue')
      },
      {
        path: '/Trustee_Allowances',
        name: 'Trustee Allowances',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Trustee_Allowances.vue')
      },
      {
        path: '/Expense Approvals',
        name: 'Expense Approvals',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Expense Approvals.vue')
      },
      {
        path: '/Commission_Approvals',
        name: 'Commission Approvals',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Commission_Approvals.vue')
      },
      {
        path: '/Ins_Memberdetails',
        name: 'Principal Member Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Ins_Memberdetails.vue')
      },
      {
        path: '/toggle',
        name: 'Toggle page',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/toggle.vue')
      },
      {
        path: '/Members/:member_id',
        name: 'Member Policies',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Members.vue')
      },
      {
        path: '/commission_approved',
        name: 'Commission Approvals',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/commission_approved.vue')
      },
      {
        path: '/Beneficiaries_Member_Servicing',
        name: 'Member Beneficiary Ammendments',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Beneficiaries_Member_Servicing.vue')
      },
      {
        path: '/View_Bulk_Statement',
        name: 'View Bulk Statements',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/View_Bulk_Statement.vue')
      },
      {
        path: '/Merge_Accounts',
        name: 'Merge Accounts',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Merge_Accounts.vue')
      },
      {
        path: '/Delete_Batch',
        name: 'Delete Batch',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Delete_Batch')
      },
      {
        path: '/Generate_Statement',
        name: 'Generate Statement',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Generate_Statement.vue')
      },
      {
        path: '/HR_Uploaded',
        name: 'HR Uploaded Members',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/HR_Uploaded.vue')
      },
      {
        path: '/Accessed',
        name: 'Members With System Access',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Accessed.vue')
      },
      {
        path: '/Disabled',
        name: 'Disabled Members',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Disabled.vue')
      },
      {
        path: '/Blocked',
        name: 'Blocked Members',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Blocked.vue')
      },
      {
        path: '/Member_Servicing_Logs',
        name: 'Logs',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Member_Servicing_Logs.vue')
      },
      {
        path: '/Members/:member_id',
        name: 'Members',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Members.vue')
      },
      {
        path: '/Merge_Member_Accounts',
        name: 'Merge Member Accounts',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Merge_Member_Accounts.vue')
      },
      {
        path: '/Portal_Edits/:clientid',
        name: 'Portal_Edits',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Portal_Edits.vue')
      },
      {
        path: '/Member_Edits/:clientId',
        name: 'Edit Member Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Member_Edits.vue')
      },
      {
        path: '/Search_Members',
        name: 'Search Members',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Search_Members.vue')
      },
      {
        path: '/View_Login_In_Credentials',
        name: 'View Login Credentials',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/View_Login_In_Credentials.vue')
      },
      {
        path: '/View_Members',
        name: 'View Users',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/View_Members.vue')
      },
      {
        path: '/Members2',
        name: 'List of Members',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Members/Members2.vue')
      },
      {
        path: '/Expense_Recquisitions',
        name: 'Expense Recquisitions',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Expense_Recquisitions.vue')
      },
      {
        path: '/Commissions',
        name: 'Transfer Commissions',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Commissions.vue')
      },
      {
        path: '/Product _Setting',
        name: 'Commission Product',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Product _Setting.vue')
      },
      {
        path: '/Batch Entry',
        name: 'Batch Entry',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Batch Entry.vue')
      },
      {
        path: '/Ins_scheme_servicing/:code',
        name: 'Scheme Servicing insurance',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Ins_scheme_servicing.vue')
      },
      {
        path: '/Ins_Payments/:code',
        name: 'Insurance Payments',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Ins_Payments.vue')
      },
      {
        path: '/Load_Batch',
        name: 'Load Particular Batches',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Load_Batch.vue')
      },
      {
        path: '/Load_Contributions',
        name: 'Load Contribution Batches',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Load_Contributions.vue')
      },
      {
        path: '/Transfers_in',
        name: 'Transfers In',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Transfers_in.vue')
      },
      {
        path: '/Trust_Setup',
        name: 'Trust Setup',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Trust_Setup.vue')
      },
      {
        path: '/Trusts',
        name: 'Trusts',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Trusts.vue')
      },
      {
        path: '/New_Trust',
        name: 'New Trust',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/New_Trust.vue')
      },
      {
        path: '/Trust_Servicing',
        name: 'Trust Servicing',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Trust_Servicing.vue')
      },
      {
        path: '/New_Beneficiary',
        name: 'New Beneficiary Form',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/New_Beneficiary.vue')
      },
      {
        path: '/Load_Beneficiary',
        name: 'Upload Beneficiary CSV Form',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Load_Beneficiary.vue')
      },
      {
        path: '/Beneficiaries',
        name: 'Beneficiaries',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Beneficiaries.vue')
      },
      {
        path: '/Process_Deposits',
        name: 'Deposits',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Process_Deposits.vue')
      },
      {
        path: '/Processed_Deposits',
        name: 'Processed Deposits',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Processed_Deposits.vue')
      },
      {
        path: '/Checked_Deposits',
        name: 'Checked Deposits',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Checked_Deposits.vue')
      },
      {
        path: '/Approved_Deposits',
        name: 'Approved Deposits',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Approved_Deposits.vue')
      },
      {
        path: '/Ben_Transactions',
        name: 'Beneficiary Transactions',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Ben_Transactions.vue')
      },
      {
        path: '/Download_Template',
        name: 'Download Template',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Download_Template.vue')
      },
     
      {
        path: '/Edit_Trust',
        name: 'New Trust Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Edit_Trust.vue')
      },
      {
        path: '/Insurance_Edit/:code',
        name: 'Scheme Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Insurance_Edit.vue')
      },
      {
        path: '/Pagination',
        name: 'Pagination',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/pagination.vue')
      },
      {
        path: '/Insurance_Servicing',
        name: 'Insurance Servicing',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Insurance_Servicing.vue')
      },
      {
        path: '/Ins_bulkmembers',
        name: 'Add Members To Scheme',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Ins_bulkmembers.vue')
      },
      {
        path: '/Transactions_Upload',
        name: 'Bulk Uploads',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Transactions_Upload.vue')
      },
      {
        path: '/Ins_Commissions',
        name: 'Generate Commissions',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Ins_Commissions.vue')
      },
      {
        path: '/Ins_Policydetails', 
        name: 'Policy Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Ins_Policydetails.vue')
      },
      {
        path: '/Ins_settings/:code', 
        name: 'Scheme Settings insurance',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Ins_settings.vue')
      },
      {
        path: '/Ins_Policies',
        name: 'Policies',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Ins_Policies.vue')
      },
      {
        path: '/Ins_Policy_register/:code',
        name: 'Policy Register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Ins_Policy_register.vue')
      },
      {
        path: '/Ins_Policy_Trans',
        name: 'Policy Transactions',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Ins_Policy_Trans.vue')
      },
      {
        path: '/Ins_pendingcommissions',
        name: 'Pending Commissions',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/Ins_pendingcommissions.vue')
      },
      {
        path: '/Communication',
        name: 'Master Communications',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Communication.vue')
      },
      {
        path: '/claim_action',
        name: 'claim_action',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/claim_action.vue')
      },
      {
        path: '/claim_list',
        name: 'claim_list',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/claim_list.vue')
      },
      {
        path: '/claims_withdrawals',
        name: 'claims_withdrawals',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/claims_withdrawals.vue')
      },
      {
        path: '/insured_items',
        name: 'Insured Items',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/insured_items.vue')
      },
      {
        path: '/claims_benefits',
        name: 'claims_benefits',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/claims_benefits.vue')
      },
      {
        path: '/claims_reversals',
        name: 'claims_reversals',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Servicing/Schemes/claims_reversals.vue')
      },
      
    /*End of the servicing navigation links*/  
      {
        path: '/E-Learning_Dashboard',
        name: 'E-Learning Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/E-Learning_Dashboard.vue')
      },
      {
        path: '/Governance_Dashboard',
        name: 'Governance Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Governance_Dashboard.vue')
      },
      {
        path: '/Insurance_Dashboard',
        name: 'Insurance Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Insurance_Dashboard.vue')
      },
      {
        path: '/Elections_Dashboard',
        name: 'Elections Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Elections_Dashboard.vue')
      },
      {
        path: '/Reports_Dashboard',
        name: 'Reports Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Reports_Dashboard.vue')
      },
      {
        path: '/DocumentCentre_Dashboard',
        name: 'Document Center ',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/DocumentCentre_Dashboard.vue')
      },
      {
        path: '/E-Board_Dashboard',
        name: 'E-board Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/E-Board_Dashboard.vue')
      },
      {
        path: '/Application_Form',
        name: 'Fill Application Form',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Pension/OPPS/Application_Form.vue')
      },
      {
        path: '/Application',
        name: 'Fill Application ',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Pension/IDD/Application.vue')
      },
      {
        path: '/OPPS_Beneficiaries',
        name: 'Nomination of Beneficiaries',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Pension/OPPS/OPPS_Beneficiaries.vue')
      },
      {
        path: '/Payments',
        name: 'Payments',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Pension/OPPS/Payments.vue')
      },
      {
        path: '/Payment_insurance',
        name: 'Payments',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Insurance/Easy Cover/Payment_insurance.vue')
      },
      {
        path: '/Policy_Document',
        name: 'Policy Document',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Insurance/Easy Cover/Policy_Document.vue')
      },
      {
        path: '/Life_Proposal_Form',
        name: 'Fill Proposal Form',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Corporate/Insurance/Life/Life_Proposal_Form.vue')
      },
      {
        path: '/General_Proposal_Form',
        name: 'Fill Proposal Proposal Form',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Corporate/Insurance/General/General_Proposal_Form.vue')
      },
      {
        path: '/Beneficiaries_IDD',
        name: 'Nomination of Beneficiaries',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Pension/IDD/Beneficiaries_IDD.vue')
      },
      {
        path: '/Fund_Setup',
        name: 'Fund_Setup',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Pension/IDD/Fund_Setup.vue')
      },
      {
        path: '/Retail',
        name: 'Retail',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail.vue')
      },
      {
        path: '/Corporate',
        name: 'Corporate',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Corporate.vue')
      },
      {
        path: '/Documents',
        name: 'Submit Mandatory Documents',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Pension/OPPS/Documents.vue')
      },
      {
        path: '/Documents_IDD',
        name: 'Submit IDD Documents',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Pension/IDD/Documents_IDD.vue')
      },
      {
        path: '/Payments_IDD',
        name: 'IDD Payment',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Pension/IDD/Payments_IDD.vue')
      },
      {
        path: '/Umbrella_Application',
        name: 'Umbrella Scheme Application Form',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Corporate/Pension/Umbrella/Umbrella_Application.vue')
      },
      
      
      {
        path: '/Proposal_form/:data',
        name: 'Fill Proposal form',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Insurance/Easy Cover/Proposal_form.vue')
      },
      {
        path: '/Beneficiaries_Insurance',
        name: 'Add Beneficiaries',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Insurance/Easy Cover/Beneficiaries_Insurance.vue')
      },
      {
        path: '/Eazy_Cover_Joining/:data',
        name: 'Joining Form',
    component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Insurance/Easy Cover/Easy_CoverSteps.vue')
      },
      {
        path: '/Living_Trust',
        name: 'Living Trust',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Trust/Living_Trust.vue')
      },
      {
        path: '/Living_Trust_V2',
        name: 'Living Trust',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Retail/Trust/Living_Trust_V2.vue')
      },
      {
        path: '/Umbrella_Scheme_Setup',
        name: 'Umbrella Scheme Setup',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Corporate/Pension/Umbrella/Umbrella_Scheme_Setup.vue')
      },
      {
        path: '/Corporate_Administrative_Records',
        name: 'Corporate Administrative Records',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Corporate/Pension/Occupational/Corporate/Corporate_Administrative_Records.vue')
      },
      {
        path: '/Corporate_Financial_Information',
        name: 'Corporate Financial Information',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Corporate/Pension/Occupational/Corporate/Corporate_Financial_Information.vue')
      },
      {
        path: '/Corporate_Other_Details',
        name: 'Corporate Other details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Corporate/Pension/Occupational/Corporate/Corporate_Other_Details.vue')
      },
      {
        path: '/Corporate_Scheme_Registration',
        name: 'Corporate Scheme Registration',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Corporate/Pension/Occupational/Corporate/Corporate_Scheme_Registration.vue')
      },
      {
        path: '/Corporate_Secretarial_Information',
        name: 'Corporate Secretarial Information',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Corporate/Pension/Occupational/Corporate/Corporate_secretarial_Information.vue')
      },
      {
        path: '/Hakikisha_Trust_Setup',
        name: 'Hakikisha Trust Setup',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Corporate/Trust/Hakikisha_Trust_Setup.vue')
      },
      {
        path: '/Corporate_Trustee_Documents',
        name: 'Corporate Trustee Documents',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/onboarding/Corporate/Pension/Occupational/Corporate/Corporate_Trustee_Documents.vue')
      },
      {
        path: '/Compliance_Dashboard',
        name: 'Compliance Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/CRM/Compliance_Dashboard.vue')
      },
      {
        path: '/CRM_Dashboard',
        name: 'CRM Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/CRM/CRM_Dashboard.vue')
      },
      {
        path: '/Fund_Details',
        name: 'Fund Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/CRM/Fund_Details.vue')
      },
      {
        path: '/Fund_Details2',
        name: 'Fund Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/CRM/Fund_Details2.vue')
      },
      {
        path: '/Meetings2',
        name: 'Meeting actions',
        component: () => import('../views/Sites/CRM/Meetings2.vue')
      },
      {
        path: '/Register_Trustee',
        name: 'Register Trustee',
        component: () => import('../views/Sites/CRM/Trustee_Actions/Register_Trustee.vue')
      },
      {
        path: '/Attendance_and_Certificates',
        name: 'Attendance and Certificates',
        component: () => import('../views/Sites/CRM/Trustee_Actions/Attendance_and_Certificates.vue')
      },
      {
        path: '/Calculate_Trustee_Allowance',
        name: 'Calculate Trustee Allowance',
        component: () => import('../views/Sites/CRM/Trustee_Actions/Calculate_Trustee_Allowance.vue')
      },
      {
        path: '/Set_Trustee_Allowance',
        name: 'Set Trustee Allowance',
        component: () => import('../views/Sites/CRM/Trustee_Actions/Set_Trustee_Allowance.vue')
      },
      {
        path: 'Trustee_Mgt',
        name: 'Trustee Management',
        component: () => import('../views/Sites/CRM/Trustee_Mgt.vue')
      },
      {
        path: '/Schedule_Meeting',
        name: 'Schedule Meeting',
        component: () => import('../views/Sites/CRM/Meeting_Actions/Schedule_Meeting')
      },
      {
        path: '/Add_Action_Item',
        name: 'Add Action Items',
        component: () => import('../views/Sites/CRM/Meeting_Actions/Add_Action_Item')
      },
      {
        path: '/Add_Meeting_Expense',
        name: 'Add Meeting Expense',
        component: () => import('../views/Sites/CRM/Meeting_Actions/Add_Meeting_Expense')
      },
      {
        path: '/Meeting_Settings',
        name: 'Meeting Settings',
        component: () => import('../views/Sites/CRM/Meeting_Actions/Meeting_Settings')
      },
      {
        path: '/Meetings',
        name: 'Meetings',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/CRM/Meetings.vue')
      },
      {
        path: '/Service_Provider_Credentials',
        name: 'Service Provider Credentials',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/CRM/Service_Provider_Credentials.vue')
      },
      {
        path: '/Trustee_and_HR_Status',
        name: 'Trustee and HR status',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/CRM/Trustee_and_HR_Status.vue')
      },
      {
        path: '/Trustees_Management',
        name: 'Trustees Management',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/CRM/Trustees_Management.vue')
      },
      {
        path: '/InternalFM',
        name: 'Internal fund management',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/InternalFM.vue')
      },
      {
        path: '/IFM_Bal',
        name: 'Internal fund management',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Fund_Management/IFM_Bal.vue')
      },
      //Master setup routes
      {
        path: '/productsetting',
        name: 'Product setting',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Master-Setup/Product_settings.vue')
      },
      {
        path: '/viewproducts',
        name: 'View Products',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Master-Setup/view_products.vue')
      },
      {
        path: '/modulesetting',
        name: 'Module setting',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Master-Setup/Module_settings.vue')
      },
      {
        path: '/user_rights',
        name: 'User-rights',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Master-Setup/UserRights_settings.vue')
      },
      {
        path: '/view_userights',
        name: 'view userights',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Master-Setup/view_Userights.vue')
      },
      {
        path: '/view_sproviders',
        name: 'view service providers',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Master-Setup/view_sproviders.vue')
      },
      //Governance routes
      {
        path: '/pension_Governance',
        name: 'pension-governance',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Governance/Pension_Governance.vue')
      },
      {
        path: '/Insurance_Governance',
        name: 'insurance-governance',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Governance/Insurance_Governance.vue')
      },
      {
        path: '/CT_Governance',
        name: 'CT-governance',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Governance/Corporate-Trustee Governance.vue')
      },
      {
        path: '/strategy_risk',
        name: 'Strategy Risk',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Governance/strategy_risk.vue')
      },
      {
        path: '/strategy_scorecard',
        name: 'Strategy Scorecard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Governance/strategy_scorecard.vue')
      },
      {
        path: '/TF_Governance',
        name: 'TF-governance',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Governance/Trustfund_Governance .vue')
      },
      {
        path: '/claim_benefits',
        name: 'Claim Benefits',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Member/ClaimBenefits.vue')
      },
      {
        path: '/benefit_claim',
        name: 'Claim Benefit',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Member/BenefitClaim.vue')
      },
      {
        path: '/transaction_history',
        name: 'Transaction history',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Member/TransactionHistory.vue')
      },
      {
        path: '/member_fund_details',
        name: 'Fund Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Member/FundDetails.vue')
      },
      {
        path: '/member_elections',
        name: 'Elections',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Member/Elections.vue')
      },
      {
        path: '/member_elections_details',
        name: 'Elections Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Member/ElectionDetails.vue')
      },
      {
        path: '/member_statement',
        name: 'Member Statement',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Member/MemberStatement.vue')
      },
      {
        path: '/member_dashboard',
        name: 'Member Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/MemberDashboard.vue')
      },
      {
        path: '/member_pension',
        name: 'Member Pension',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/MemberPension.vue')
      },
      {
        path: '/member_product',
        name: 'Member Insurance',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Member/Pension.vue')
      },
      {
        path: '/member_trust',
        name: 'Member Trust',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Member/trust.vue')
      },
      
      {
        path: '/form',
        name: 'Form Wizard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Member/formwizard.vue')
      },
      {
        path: '/trustee_dashboard',
        name: 'Trustee Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/TrusteeDashboard.vue')
      },
      {
        path: '/trustee_Scheme',
        name: 'Scheme Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Trustee/schemeDetails.vue')
      },
      {
        path: '/trustee_Calender',
        name: 'Scheme Calender',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Trustee/schemeCalender.vue')
      },
      {
        path: '/member_withdrawals',
        name: 'Member Servicing Withdrawals',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Trustee/MemberWithdrawals.vue')
      },
      {
        path: '/service_provider',
        name: 'Service Provider Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/ProviderDashboard.vue')
      },
      {
        path: '/provider_reports',
        name: 'Reports',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Provider/Reports.vue')
      },
      {
        path: '/provider_invoice_dev',
        name: 'Invoices and fees(Dev)',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/Provider/InvoiceDev.vue')
      },
      
      {
        path: '/hr',
        name: 'HR Dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/HR_Dashboard.vue')
      },
      {
        path: '/hr_member_register',
        name: 'Member Register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/HR/memberRegister.vue')
      },
      {
        path: '/hr_member_contributions',
        name: 'Submit member contributions',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/HR/memberContributions.vue')
      },
      {
        path: '/hr_member_statement',
        name: 'Member Statement',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/HR/HR_memberStatement.vue')
      },
      {
        path: '/hr_member_withdrawals',
        name: 'Member Withdrawals',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/HR/HR_memberWithdrawals.vue')
      },
      {
        path: '/hr_death_withdrawals',
        name: 'Death Benefit claims',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/HR/deathWithdrawals.vue')
      },
      {
        path: '/submit_contributions',
        name: 'Submit Contributions',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/HR/submitContributions.vue')
      },
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register/:details',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      {
        path: '/otp',
        name: 'otp',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/otp.vue')
      },
      {
        path: '/pcl/easy_cover',
        name: 'Easy Cover',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/easyCoverExternal.vue')
        
      },
      {
        path: '/pcl/easy_cover/steps/:category',
        name: 'Easy Cover form',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/easyCoverExternalSteps.vue')
      },
      {
        path: '/pcl/motor_insurance',
        name: 'Motor Insurance',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/motorInsuranceExternal.vue')
      },
      {
        path: 'vehicle_use/:cartype',
        name: 'Vehicle Use',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/vehicle_use.vue')
      },
      {
        path: 'm_psv_quote/:cardet',
        name: 'Type of Coverages',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/m_psv_quote.vue')
      },
      {
        path: 'motorcycle_use/:cardet',
        name: 'Motorcycle Use',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/motorcycle_use.vue')
      },
      {
        path: 'm_psv_TPO/:cardet',
        name: 'motor psv tpo',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/m_psv_TPO.vue')
      },
      {
        path: 'm_TPO_details/:cardet',
        name: 'motor tpo details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/m_TPO_details.vue')
      },
      {
        path: 'm_psv_COMP/:cardet',
        name: 'm_psv_COMP',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/m_psv_COMP.vue')
      },
      {
        path: 'c_private_quote/p_car_quote/:pcardetails',
        name: 'Private car Quote',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/c_private_quote.vue')
      },
      {
        path: 'c_private_TPO/:cardet',
        name: 'Coverage',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/c_private_TPO.vue')
      },
      {
        path: 'private_tpo_details/:cardet',
        name: 'Private tpo details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/private_tpo_details.vue')
      },
      {
        path: 'private_COMP_details/:cardet',
        name: 'Private comp details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/private_COMP_details.vue')
      },
      {
        path: 'c_private_COMP/:cardet',
        name: 'Product COMP details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/c_private_COMP.vue')
      },
      {
        path: 'c_taxi_TPO',
        name: 'Product Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/c_taxi_TPO.vue')
      },
      {
        path: 'c_taxi_COMP',
        name: 'Product Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/c_taxi_COMP.vue')
      },
      {
        path: 'c_taxi_quote:/cardet',
        name: 'Type of Coverage',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/c_taxi_quote.vue')
      },     
      {
        path: 'commercial_tpo_details/:cardet',
        name: 'commercial_tpo_details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/commercial_tpo_details.vue')
      },
      {
        path: 'c_commercial_COMP/:cardet',
        name: 'c_commercial_COMP',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/c_commercial_COMP.vue')
      },
      {
        path: 'c_commercial_TPO/:cardet',
        name: 'c_commercial_TPO',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/c_commercial_TPO.vue')
      },
      {
        path: 'c_commercial_quote/:cardet',
        name: 'Commercial Coverage',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/c_commercial_quote.vue')
      },
      {
        path: 'commercial_COMP_details/:cardet',
        name: 'commercial_COMP_details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/commercial_COMP_details.vue')
      },
      {
        path: 'taxi_tpo_details',
        name: 'Product Details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/taxi_tpo_details.vue')
      },
      {
        path: 'taxi_COMP_details/:cardet',
        name: 'taxi_COMP_details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/taxi_COMP_details.vue')
      },
      {
        path: '/pcl/medicalEXternal',
        name: 'Medical Cover',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/medicalEXternal.vue')
      
      },
      
  {
    path: '/medicalCoverExternal/:code',
    name: 'Medical Insurance',
    component: () => import(/* webpackChunkName: "demo" */ '../views/Sites/medicalCoverExternal.vue')
  },
      { path: '*', component: NotFound }
    ]

  },

  {
    path: '/',
    redirect: 'log',
    component: CRMLayout,
    children: [

      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
