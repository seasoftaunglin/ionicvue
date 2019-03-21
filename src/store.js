import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        currentUserToken: null,
        currentUser: null
    },
    mutations: {
        setCurrentUserToken(state,payload){
            state.currentUserToken = payload
        },
        setCurrentUser(state,payload){
            state.currentUser = payload
        }
    },
    actions: {

    }
})