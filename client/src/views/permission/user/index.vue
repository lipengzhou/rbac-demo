<template>
  <el-space style="min-width: 100%;" fill direction="vertical">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>筛选搜索</span>
        </div>
      </template>
      <el-form :inline="true" :model="listParams" class="demo-form-inline">
        <el-form-item label="账户">
          <el-input v-model="listParams.username" placeholder="Approved by"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="listParams.username" placeholder="Approved by"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="listParams.username" placeholder="Approved by"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
        </div>
      </template>
      <el-table :data="list" style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column prop="username" label="账号" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="邮箱" />
        <el-table-column prop="address" label="添加时间" />
        <el-table-column prop="address" label="最后登录" />
        <el-table-column prop="address" label="是否启用">
          <template #default="scope">
            <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949" />
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作" width="180">
          <template #default="scope">
            <el-button type="text">分配角色</el-button>
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </el-space>

  <el-dialog
    v-model="dialogVisible"
    title="添加/编辑用户"
  >
    <el-form ref="form" :model="user">
      <el-form-item label="账户">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="user.roles" multiple placeholder="请选择角色">
          <el-option label="客服" value="shanghai"></el-option>
          <el-option label="运营" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否可用">
        <el-radio-group v-model="user.status">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import { getUsers } from '../../../api/user'
const list = ref<any[]>([])
const listParams = reactive({
  username: '',
  name: '',
  email: ''
})
const dialogVisible = ref(false)

const user = ref({
  username: '',
  password: '',
  name: '',
  email: '',
  mobile: '',
  roles: [],
  status: 0
})

onMounted(() => {

})

const loadList = async () => {
  const { data } = await getUsers()
  list.value = data
}
</script>
