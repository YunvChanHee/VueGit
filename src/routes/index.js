import VueRouter from "vue-router";
import Vue from "vue";
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import bus from '../utils/bus';
import { store } from '../store/index'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [{
            //path: url 주소
            //component: url 주소로 갔을 때 표시될 컴포넌트
            path: "/",
            redirect: "/news",
        },

        {
            //path: url 주소
            //component: url 주소로 갔을 때 표시될 컴포넌트
            path: "/news",
            component: NewsView,
            name: "news",
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store.dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched");
                        bus.$emit("end:spinner");
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                // console.log('to', to);
                // console.log("from", from);
                // console.log("next", next);
                // if (to.auth) {
                //     next();
                // } else {
                //     router.replace('/login')
                // }

            },
        },
        {
            path: "/ask",
            component: AskView,
            name: 'ask',
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store.dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched");
                        bus.$emit("end:spinner");
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        {
            path: "/jobs",
            component: JobsView,
            name: "jobs",
        },
        {
            path: "/item/:id",
            component: ItemView,
        },
        {
            path: "/user/:id",
            component: UserView,
        },
    ],
});