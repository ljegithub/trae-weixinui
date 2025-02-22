<script setup lang="ts">

</script>

<template>
  <div class="home-container">
    <el-row :gutter="20">
      <!-- 欢迎信息卡片 -->
      <el-col :span="24">
        <el-card class="welcome-card">
          <h2>欢迎使用水利办政务服务系统</h2>
          <p>本系统提供全面的水利政务服务，助力水利事业发展</p>
        </el-card>
      </el-col>

      <!-- 快速入口 -->
      <el-col :span="8">
        <el-card class="quick-entry-card">
          <template #header>
            <div class="card-header">
              <span>政务公开</span>
              <el-button text>更多</el-button>
            </div>
          </template>
          <div class="quick-entry-content">
            <el-empty description="暂无数据" />
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="quick-entry-card">
          <template #header>
            <div class="card-header">
              <span>在线服务</span>
              <el-button text>更多</el-button>
            </div>
          </template>
          <div class="quick-entry-content">
            <el-empty description="暂无数据" />
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="quick-entry-card">
          <template #header>
            <div class="card-header">
              <span>数据统计</span>
              <el-button text>更多</el-button>
            </div>
          </template>
          <div class="quick-entry-content">
            <el-empty description="暂无数据" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.home-container {
  padding: 20px;
}

.welcome-card {
  margin-bottom: 20px;
  background-color: #e6f7ff;
}

.welcome-card h2 {
  margin: 0 0 10px 0;
  color: #1890ff;
}

.welcome-card p {
  margin: 0;
  color: #666;
}

.quick-entry-card {
  height: 300px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quick-entry-content {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>