<template>
  <el-container>
    <el-aside width="200px">
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader/index.vue'
import AppMenu from './AppMenu/index.vue'

</script>

<style>
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}

.el-aside {
  background-color: #304156;
  height: 100vh;
}

.el-menu {
  border-right: unset;
}

.el-main {
  background-color: #e9eef3;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container {
  min-height: 100vh;
}
</style>
