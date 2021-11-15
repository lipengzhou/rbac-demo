<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="medium"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form__header">
        <h1>拉勾教育管理系统</h1>
      </div>
      <el-form-item prop="username">
        <el-input
          v-model="user.username"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="user.password"
          type="password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ElForm, ElMessage } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
import request from '../../utils/request'
import { useStore } from '../../store'
import { IUser } from '../../api/types/common'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const mainStore = useStore()
const router = useRouter()

const user = reactive({
  username: 'admin',
  password: '123456'
})
const loading = ref(false)
const rules = ref({
  username: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ]
})
const form = ref<InstanceType<typeof ElForm> | null>(null)

const handleSubmit = async () => {
  // 表单验证
  const valid = await form.value?.validate()
  if (!valid) {
    return false
  }

  // 验证通过，展示 loading
  loading.value = true

  // // 请求提交
  const { data } = await request.post<IUser>('/login', user).finally(() => {
    loading.value = false
  })

  mainStore.user = data

  ElMessage.success('登录成功')

  // // 跳转回原来页面
  let redirect = route.query.redirect
  if (typeof redirect !== 'string') {
    redirect = '/'
  }
  router.replace(redirect)
}

</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px 30px 40px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    color: #08a;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
    }
  }
}
</style>
