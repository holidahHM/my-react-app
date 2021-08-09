// import the api endpoints
import { loginUser, getAllUsers } from "@/api/users.api"

// State object
const state = {
    users: [],
    loginUser: [],
    username: value,
    password: value,
    rememberMe: value
}

const initialState = () => ({
    username: value,
    password: value,
    rememberMe: value
});

const state = initialState();

// Getter functions
const getters = {
    getUsers(state) {
        return state.users;
    },
    getLoginUser(state) {
        return state.loginUser;
    },
    getUsername( state ) {
       return state.username;
    },
    getPassword( state ) {
       return state.password;
    },    
    getRememberMe( state ) {
        return state.rememberMe;
     },

}

// Actions 
const actions = {
    async fetchUsers({ commit }) {
        try {
            const response = await getAllUsers();
            commit('SET_USERS', response.data);
        } catch (error) {
            // handle the error here
        }    
    },
    async fetchLoginUser({ commit }) {
        try {
            const response = await loginUser();
            commit('SET_LOGINUSER', response.data);
        } catch (error) {
            // handle the error here
        }    
    },
    fetchUsername({ commit }) {
        return new Promise((resolve, reject) => {
            // Make network request and fetch data
            // and commit the data
            commit('SET_USERNAME', data); 
            resolve();
     });
    },
    fetchPassword({ commit }) {
        return new Promise((resolve, reject) => {
            // Make network request and fetch data
            // and commit the data
            commit('SET_PASSWORD', data); 
            resolve();
     });
    },
    fetchRememberMe({ commit }) {
        return new Promise((resolve, reject) => {
            // Make network request and fetch data
            // and commit the data
            commit('SET_REMEMBERME', data); 
            resolve();
     });
    },
    reset({ commit }) {
        commit('RESET');
    },
 }


// Mutations
const mutations = {
    SET_USERS(state, data) {
        state.users = data;
    },
    SET_LOGINUSER(state, data) {
        state.loginUser = data;
    },
    SET_USERNAME(state, data) {
       state.username = data;
    },
    SET_PASSWORD(state, data) {
       state.password = data;
    },
    SET_REMEMBERME(state, data) {
        state.rememberMe = data;
     },
    RESET(state) {
        const newState = initialState();
        Object.keys(newState).forEach(key => {
              state[key] = newState[key]
        });
      },
      // other mutations

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

