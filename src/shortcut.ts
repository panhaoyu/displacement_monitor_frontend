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
    push(pathName: string) {
        return new Promise(resolve => {
            router.push({name: pathName}, resolve);
        })
    },
    async get(url: string, data?: object) {
        url = 'http://dm-api.panhaoyu.top:88/' + url;
        if (data) {
            if (url.indexOf('?') === -1) {
                url += '?';
            }
            Object.entries(data).forEach(([key, value]) => {
                url += `&${key}=${value}`;
            })
        }
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
    async post(url: string) {
        url = 'http://dm-api.panhaoyu.top:88/' + url;
        let response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': 'bearer ' + store.state.token,
            }
        })
    },
    async timeout(seconds: number) {
        return new Promise<any>(resolve => {
            setTimeout(resolve, seconds);
        })
    }
}