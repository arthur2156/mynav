<template>
  <div class="nav">
    <h1>nav</h1>
    <h1>
      <!-- {{ $route.params }} -->
    </h1>
    <hr />
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="cl()">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      list: "",
    };
  },
  methods: {
    cl() {
      this.$router.push({
        name: "lists",
        params: {
        },
      });
    },
  },
  //enter没有进入到新路由前
  beforeRouteEnter(to, from, next) {
    //第一次进入新路前,获取数据
    //这里this不能可使

    next(function (app) {
      //app 代表当前组件
      axios
        .get("/wen/weixinarticle/get", {
          params: {
            appkey: "e82f8a70921cdecb",
            channelid: app.$route.params.id,
          },
        })
        .then((res) => {
          //赋值操作
          app.list = res.data.result.list;
          //   console.log(app.list)
        });
    });
  },

  //update,动态路由间的切,路由已经被加载
  beforeRouteUpdate(to, from, next) {
    //动态路由切换,自动触发update
    //这里this可用
    //在次申请新的数据

    //数据更新,id值不会发生变化
    //to.params存储了离开的路由内容
    axios
      .get("/wen/weixinarticle/get", {
        params: {
          appkey: "e82f8a70921cdecb",
          channelid: to.params.id,
        },
      })
      .then((res) => {
        console.log(res);
        //赋值操作
        this.list = res.data.result.list;
      });
    next();
  },
  //   created() {
  //     var that = this;
  //     axios
  //       .get("/wen/weixinarticle/get", {
  //         params: {
  //           appkey: "e82f8a70921cdecb",
  //           channelid: that.$route.params.id,
  //         },
  //       })
  //       .then(function (res) {
  //         res = res.data.result.list;
  //         that.list = res;
  //         console.log(that.list);
  //       });
  //   },
};
</script>

<style>
</style>