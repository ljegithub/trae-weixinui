<script setup lang="ts">
import { ref } from 'vue'

const isCollapse = ref(false)
</script>

<template>
  <el-container class="layout-container">
    <!-- 头部 -->
    <el-header class="header">
      <div class="logo-container">
        <h1 class="logo-text">水利办政务服务系统</h1>
      </div>
      <div class="header-right">
        <el-dropdown>
          <el-avatar icon="UserFilled" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>

    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'" class="aside">
        <el-menu
          :collapse="isCollapse"
          class="menu"
          default-active="1"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#409EFF">
          <el-menu-item index="1">
            <el-icon><HomeFilled /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><Document /></el-icon>
            <span>政务公开</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><Service /></el-icon>
            <span>在线服务</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><DataAnalysis /></el-icon>
            <span>数据统计</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 主要内容区 -->
      <el-main class="main">
        <el-button
          type="primary"
          class="toggle-button"
          @click="isCollapse = !isCollapse">
          <el-icon><Fold v-if="!isCollapse" /><Expand v-else /></el-icon>
        </el-button>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container {
  height: 100vh;
}

.header {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-text {
  margin: 0;
  font-size: 20px;
  color: #001529;
}

.aside {
  background-color: #001529;
  transition: width 0.3s;
}

.menu {
  height: 100%;
  border-right: none;
}

.main {
  background-color: #f0f2f5;
  padding: 20px;
  position: relative;
}

.toggle-button {
  position: absolute;
  left: 0;
  top: 20px;
  z-index: 1;
}
</style>
