import {
    fetchNewsList,
    fetchASKSList,
    fetchJOBSList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
} from "../api/index";

export default {
    //   FETCH_NEWS(context) {
    //     return fetchNewsList()
    //       .then((response) => {
    //         console.log(response.data);
    //         context.commit("SET_NEWS", response.data);
    //         return response;
    //         // this.state.news = response.data;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   },
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit("SET_NEWS", response.data);
        return response
    },
    async FETCH_ASKS(context) {
        const response = await fetchASKSList();
        context.commit("SET_ASKS", response.data);
        return response
            // return fetchASKSList()
            //     .then((response) => {
            //         console.log(response.data);
            //         context.commit("SET_ASKS", response.data);
            //         // this.state.news = response.data;
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
    },
    async FETCH_JOBS(context) {
        const response = await fetchJOBSList();
        context.commit("SET_JOBS", response.data);
        return response
            // return fetchJOBSList()
            //     .then((response) => {
            //         console.log(response.data);
            //         context.commit("SET_JOBS", response.data);
            //         // this.state.news = response.data;
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
    },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then((response) => {
                commit("SET_USER", response.data);
                // this.state.news = response.data;)).catch();
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_ITEM({ commit }, name) {
        return fetchItemInfo(name)
            .then((response) => {
                commit("SET_ITEM", response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit("SET_LIST", response.data)
        return response
    }
    //     return fetchList(pageName)
    //         .then(({ data }) => commit("SET_LIST", data))
    //         .catch((error) => console.log(error));
    // },

};