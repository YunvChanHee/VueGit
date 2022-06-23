<template>
  <div>
    <ul class="news-list">
      <li v-for="user in ListItems" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ user.points || 0}}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <template v-if=" user.domain ">
            <a v-bind:href="user.url">{{ user.title }}</a>
            </template>
            <template v-else>
              <router-link v-bind:to="`user/${user.id}`">{{user.title}}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ user.time_ago }} by
            <router-link v-if="user.user" :to="`/user/${user.user}`" class="link-text">{{user.user}}</router-link>
            <a  v-else :href="user.url">{{ user.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
       created(){
       //this.$store.dispatch('FETCH_NEWS');   
        const name = this.$route.name;
        
        if(name ==='news'){
            this.$store.dispatch('FETCH_NEWS');
        }else if( name==='ask'){
            this.$store.dispatch('FETCH_ASKS');
        }else if( name==='jobs'){
            this.$store.dispatch('FETCH_JOBS');      
        }

       },
       computed: {
        ListItems(){
          return this.$store.state.list;
        // const name = this.$route.name;  
        // if(name ==='news'){
        //     return this.$store.state.news;
        // }else if( name==='ask'){
        //     return this.$store.state.asks;
        // }else if( name==='jobs'){
        //     return this.$store.state.jobs;   
        }
        }     
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>