import router from "./router/router"
import store from "./store/store"
import {Payload} from "vuex";


export default {
    commit(command: string, payload?: any) {
        store.commit(command, payload);
    },
    setTitle(title: string) {
        this.commit('setTitle', title);
    },
    async push(name: string) {
        await router.push({name: name});
    },
    async get(url: string) {
        url = 'http://dm.panhaoyu.top:88/api/' + url;
        let response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': 'bearer ' + store.state.token,
            },
        });
        let responseData = await response.json();
        return responseData.data;
    },
    async timeout(seconds: number) {
        return new Promise<any>(resolve => {
            setTimeout(resolve, seconds);
        })
    }
}