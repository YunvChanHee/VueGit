<template>
    <div>
        <section>
            <!-- 질문 상세 정보 -->
            <user-profile :info="fetchedItem">
                <!-- <div slot="username">{{fetchedItem.user}}</div> -->
                 <router-link slot="username" :to="`/user/${userInfo.user}`">{{userInfo.user}}</router-link>
                <template slot="time">{{fetchedItem.time_ago}}</template>
            </user-profile>
        </section>
        <section>
            <!--질문 댓글-->
            <div v-html="fetchedItem.content">
                <!-- {{ fetchedItem.content}} -->
            </div>
        </section>
        <section>
            <h2>{{fetchedItem.title}}</h2>
        </section>
        <section>
            <!--질문 댓글-->
            <div v-html="fetchedItem.content"></div>
        </section>
        
        <!-- <p>{{userInfo}} </p> -->
        <!-- <p>{{fetchedItem.title}} </p>
        <div>
        <p>{{fetchedItem.content}} </p>
        </div> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfile.vue';

export default {
    components: {
        UserProfile
    },
    computed: {
        ...mapGetters(['fetchedItem'])
    },
    created() {
        const userName = this.$route.params.id;
        // axios.get('https://api.hnpwa.com/vo/user/${this.$route.params.id}.json')
        this.$store.dispatch('FETCH_ITEM', userName)
    }
};
</script>

<style scoped>
    .user-container{
        display: flex;
        align-items: center;
        padding: 0.5rem;
    }
    .fa-user {
        font-size: 2.5rem;
    }
    .user-description{
        padding-left: 8px;
    }
    .time {
        font-size: 0.7rem;
    }
</style>