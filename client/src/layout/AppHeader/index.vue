<template>
  <el-space wrap>
    <span>拉勾教育</span>
  </el-space>
  <el-space wrap>
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ store.user?.username }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-space>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from '../../store'

const router = useRouter()
const store = useStore()

const handleLogout = () => {
  ElMessageBox.confirm('确认退出吗？', '退出提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  }).then(() => {
    // 清除登录状态
    store.user = null
    // 跳转到登录页
    router.push({
      name: 'login'
    })
  }).catch(() => {
    ElMessage.info('已取消退出')
  })
}
</script>

<style>
.el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
