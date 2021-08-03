<template>
  <div class="index">
    <!-- <router-link to="/index/nav"> nav </router-link>
    丨
    <router-link to="/index/lists"> lists </router-link> -->

    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <router-link to="" v-for="(item, index) in list" :key="index">
          <el-menu-item @click="cl(item.channelid)">{{
            item.channel
          }}</el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      list: "",
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    cl(idone) {
      // console.log(idone);
      this.$router.push({
        name: "nav",
        params: {
          id: idone,
        },
      });
    },
  },
  components: {},
  created() {
    var that = this;
    axios
      .get("/wen/weixinarticle/channel", {
        params: {
          appkey: "e82f8a70921cdecb",
        },
      })
      .then(function (res) {
        res = res.data.result;
        res = res.slice(0, 10);
        that.list = res;
        // console.log(that.list);
      });
  },
};
</script>
<style scoped>
</style>
