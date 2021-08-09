import httpClient from './httpClient';


class TutorialDataService {
  getAll(params) {
    return httpClient.get(GET_ALL_INSURANCE_MEMBERS_ENDPOINT, { params });
  }

  // other CRUD methods
}

//searchmember

//authentication endpoints
const LOGIN_END_POINT = '/users/login?';
const SETTINGS_END_POINT = '/systemsettings/add';
const POLICY_CLASSES = '/policy_classes';
const getAllProductsWithCode = () => httpClient.get(POLICY_CLASSES);
const USERS_ENDPOINT = '/users';
const registerUsers = () => httpClient.post(USERS_ENDPOINT);

//insurance endpoints
const COUNTRIES_INSURANCE_END_POINT = '/countries';
const PRODUCT_INSURANCE_CATEGORY_END_POINT = '/products';
const SERVICE_INSURANCE_CATEGORY_END_POINT = '/services';
const SERVICE_INSURANCE_PROVIDER_END_POINT = '/service_provider_osl';
const SAVE_INSURANCE_END_POINT = '/master?';
const ALL_USERS_END_POINT = '/users?';
const SEARCH_USERS_LOGIC = '/users/singleusers?';
const SCHEMES_END_POINT = '/schemes/allschemes';
const ADD_INTERNAL_USER = '/users/internal/add?';
const ADD_EXTERNAL_USER = '/users/external/add?';
const GET_ALL_MEETING = '/meetings?';
const GET_ALL_ZONES_ENDPOINT = '/zones';
const GET_E_ROLES = '/roles/external';
const PROSPECTS_END_POINT='/prospects?';
const ADD_USERS_ENDPOINT = '/users/add?';
const ADD_PROSPECTS_ENDPOINT = '/prospects/add?';
const SEARCH_PROSPECT = '/prospect/single_prospect?';
const ADD_NEW_LEAD = '/leads/add?';
const GET_INSURANCE_PRODUCTS = '/product_settings';
const GET_A_SINGLE_LEAD = '/lead';
const GET_ALL_LEADS = '/leads?';
const GET_SCHEMES_FILTER = '/scheme?';
const EDIT_MEMBER = '/';
const GET_SINGLE_MEMBER = '/members/{ClientID}?';
const GET_SINGLE_MEMBER_POLICY = '/members/policies/{ClientID}?';
const GET_ALL_CLAIMS = '/claims?';
const NEW_SERVICE_PROVIDER = '/';
const NEW_COUNTRY = '/';
const NEW_PRODUCT = '/';
const UPDATE_MEMBER = '/members/update/{ClientID}?';
const GET_BENEFIARIES = '/benefiaries?';

const getBefefiaries = (member_code) => httpClient.get(GET_BENEFIARIES+`member_code=${member_code}`);
const updateSingleMember = (
    ClientID,
    Name,
    Postal_address,
    PINNO,
    Email,
    phone_no,
    date_of_birth,
    IDNo,
    occupation,
    physical_address
) => httpClient.put(UPDATE_MEMBER +
    `ClientID=${ClientID}&
    Name=${Name}&
    Postal_address=${Postal_address}&
    PINNO=${PINNO}&
    Email=${Email}&
    phone_no=${phone_no}&
    date_of_birth=${date_of_birth}&
    IDNo=${IDNo}&
    occupation=${occupation}&
    physical_address=${physical_address}`);
const addNewCountry = () => httpClient.post(NEW_COUNTRY);
const addNewProduct = () => httpClient.post(NEW_PRODUCT);
const addNewServiceProvider = () => httpClient.post(NEW_SERVICE_PROVIDER);
const getAllCLaims = (params) => httpClient.get(GET_ALL_CLAIMS, {params});
const getSingleMember = (clientid) => httpClient.get(GET_SINGLE_MEMBER + `ClientID=${clientid}`);
const getSingleMemberPolicy = (clientid) => httpClient.get(GET_SINGLE_MEMBER_POLICY+`ClientID=${clientid}`);
const editMember = () => httpClient.put(EDIT_MEMBER);
const getSchemeFilter = (insurance) => httpClient.get(GET_SCHEMES_FILTER+
    `division=${insurance}`);
const GET_INSURED_ITEMS_ENDPOINT = '/insured_items';

const getSingleLead = () => httpClient.get(GET_A_SINGLE_LEAD);
const saveNewLead = (
    lead_name,
    physical_address,
    date_of_contact,
    lead_added_by,
    lead_add_date,
    phone_number,
    email,
    note
) => httpClient.post(ADD_NEW_LEAD+
    `lead_name=${lead_name}&
    physical_address=${physical_address}&
    date_of_contact=${date_of_contact}&
    created_by=${lead_added_by}&
    lead_add_date=${lead_add_date}&
    phone_number=${phone_number}&
    email=${email}&
    note=${note}`);
const GET_ALL_INSURANCE_MEMBERS_ENDPOINT = '/members?';
const getAllins = (params) => httpClient.get(GET_ALL_INSURANCE_MEMBERS_ENDPOINT, {params})
const GET_ALL_INSURANCE_POLICIES_ENDPOINT = '/member_policies';
const loginUser = (
    username, 
    password) => httpClient.get(LOGIN_END_POINT+
    `username=${username}&
    password=${password}`);
const saveUser = () =>httpClient.post(ADD_USERS_ENDPOINT+
    `username=${username}&
    user_email=${user_email}&
    password=${password}`);
const getInsuranceProducts = () => httpClient.get(GET_INSURANCE_PRODUCTS);
const getAllInsuredItems = () => httpClient.get(GET_INSURED_ITEMS_ENDPOINT);
const getAllCountries = () => httpClient.get(COUNTRIES_INSURANCE_END_POINT);
const getAllInsurancePolicies = (params) => httpClient.get(GET_SCHEMES_FILTER, {params});
const getOafslModules = () =>httpClient.get(GET_ALL_ZONES_ENDPOINT);
const getAllUsers = (params) => httpClient.get(ALL_USERS_END_POINT, {params});
const getAllSchemes = () => httpClient.get(SCHEMES_END_POINT);
const getAllMeetings = (params) => httpClient.get(GET_ALL_MEETING, {params});
const getExternalRoles = () => httpClient.get(GET_E_ROLES);
const searchUser = (username) => httpClient.get(SEARCH_USERS_LOGIC+`username=${username}`);
const getAllProducts = () => httpClient.get(PRODUCT_INSURANCE_CATEGORY_END_POINT);
const getAllServices = () => httpClient.get(SERVICE_INSURANCE_CATEGORY_END_POINT);
const getAllServiceProviders = () => httpClient.get(SERVICE_INSURANCE_PROVIDER_END_POINT);
const getALLProspects = (params) => httpClient.get(PROSPECTS_END_POINT, {params});
const getAllLeads = (params) => httpClient.get(GET_ALL_LEADS, {params});
const saveInsurance = (
    country, 
    product_category,
    service_category,
    currency_code,
    product_type,
    service_provider_ins,
    commission_rate,
    SLA,
    SLA_expiry_date,
    year_in_service,
    model_ins,
    min_age,
    max_age,
    mode_of_intergration,
    product_name,
    product_group
    ) => httpClient.post(SAVE_INSURANCE_END_POINT+
    `country_name=${country}&
    product_category=${product_category}&
    service_category=${service_category}&
    currency_code=${currency_code}&
    product_type=${product_type}&
    service_provider=${service_provider_ins}&
    commission_rate=${commission_rate}&
    SLA=${SLA}&
    SLA_expiry_date=${SLA_expiry_date}&
    year_in_service=${year_in_service}&
    model=${model_ins}&
    min_age=${min_age}&
    max_age=${max_age}&
    mode_of_intergration=${mode_of_intergration}&
    product_name=${product_name}&
    product_group=${product_group}`);

const saveInternalUser = (
    username,
    user_email,
    user_first_name,
    user_second_name,
    role,
    user_type,
    multipleSelections,
    scheme_code,
    pensionChecked,
    insuranceChecked,
    trustChecked,
    actuarialChecked,
    trainingChecked,
    adminChecked,
    approverChecked,
    supervisorChecked,
    memberChecked,
    user_activeChecked
) => httpClient.post(ADD_INTERNAL_USER+
    `username=${username}&
    user_email=${user_email}&
    user_first_name=${user_first_name}&
    user_second_name=${user_second_name}&
    role=${role}&
    user_type=${user_type}&
    multipleSelections=${multipleSelections}&
    scheme_code=${scheme_code}&
    pensionChecked=${pensionChecked}&
    insuranceChecked=${insuranceChecked}&
    trustChecked=${trustChecked}&
    actuarialChecked=${actuarialChecked}&
    trainingChecked=${trainingChecked}&
    adminChecked=${adminChecked}&
    approverChecked=${approverChecked}&
    supervisorChecked=${supervisorChecked}&
    memberChecked=${memberChecked}&
    user_activeChecked=${user_activeChecked}`);

const saveExternalUser = () => httpClient.post(ADD_EXTERNAL_USER);
const saveProspects = (
    type,
    business,
    product_or_service,
    business_value,
    valuation_basis,
    lead_selected,
) => httpClient.post(ADD_PROSPECTS_ENDPOINT+
    `type=${type}&
    business=${business}&
    product_or_service=${product_or_service}&
    business_value=${business_value}&
    valuation_basis=${valuation_basis}&
    lead_selected=${lead_selected}`);
const searchProspect = () => httpClient.get(SEARCH_PROSPECT);


export {
    loginUser,
    getAllCountries,
    getAllProducts,
    getAllServices,
    getAllServiceProviders,
    saveInsurance,
    getAllUsers,
    searchUser,
    getAllSchemes,
    saveInternalUser,
    saveExternalUser,
    getAllMeetings,
    getExternalRoles,
    getALLProspects,
    saveUser,
    saveProspects,
    searchProspect,
    saveNewLead,
    getInsuranceProducts,
    getSingleLead,
    getAllLeads,
    getAllInsurancePolicies,
    getSchemeFilter,
    getAllInsuredItems,
    editMember,
    getSingleMember,
    getAllCLaims,
    addNewServiceProvider,
    addNewCountry,
    addNewProduct,
    updateSingleMember,
    getOafslModules,
    getSingleMemberPolicy,
    getBefefiaries,
    TutorialDataService,
    getAllins,
    getAllProductsWithCode,
    registerUsers,
}