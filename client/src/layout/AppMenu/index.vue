<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    router
  >
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/product">
      <i class="el-icon-menu"></i>
      <span>商品管理</span>
    </el-menu-item>
    <el-menu-item index="/order">
      <i class="el-icon-document"></i>
      <span>订单管理</span>
    </el-menu-item>
    <el-menu-item index="/marketing">
      <i class="el-icon-setting"></i>
      <span>营销管理</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>权限管理</span>
      </template>
      <el-menu-item index="/permission/user">用户管理</el-menu-item>
      <el-menu-item index="/permission/role">角色管理</el-menu-item>
      <el-menu-item index="/permission/menu">菜单管理</el-menu-item>
      <el-menu-item index="/permission/resource">资源管理</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useRoute } from 'vue-router'
const route = useRoute()
const defaultActive = computed(() => {
  return route.path
})
</script>
