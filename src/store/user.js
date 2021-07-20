export default {
    state:{
        token: '123',
    },
    mutations:{
        ['SET_TOKEN'](state, value){
            state.token = value
        }
    },
    actions:{
        login(){}
    },
    getters:{

    }
}