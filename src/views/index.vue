<script setup>
import { h, ref } from 'vue';
import TableProfile from '../components/TableProfile.vue';
const selectedKeys = ref([]);
const openKeys = ref([]);
const items = ref([
  {
    key: '1',
    label: 'All',
    title: 'All',
  },
  {
    key: '2',
    label: 'Ungrouped',
    title: 'Ungrouped',
  },
]);
const handleClick = menuInfo => {
  console.log('click ', menuInfo);
};
</script>

<template>
  <div class="flex">
    <div class="vue-split__pane_left" style="width: 240px; left: 0;">
      <div style="width: 220px;" class="vue-split__pane-card">
        <div class="card">

          <div class="card_title">
            <div class="flex justify-between items-center">
              <h6 class="text-[#212b36] text-lg font-bold">Profile group</h6>
              <button type="button"
                class="px-2 py-1 mr-[8px] font-bold text-sm text-center flex items-center justify-between text-white bg-[#212b36] leading-6 rounded-lg">
                <svg class="text-[18px]" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960"
                  width="20px" fill="#e8eaed">
                  <path
                    d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                <p class="pl-1">New</p>
              </button>
            </div>
          </div>

          <div class="card_content py-2">
            <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="vertical"
              class="card-item-link pr-[10px]" :items="items" @click="handleClick" />
          </div>
        </div>
      </div>
    </div>
    <div class="vue-split__pane" style=" left: 240px;">
      <TableProfile class="px-6 pb-2" />
    </div>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  flex-basis: 150px;
  padding: 10px 0px 10px 10px;
  border-radius: 16px;
  background-color: rgba(145, 158, 171, 0.04);
  border: 1px dashed rgba(145, 158, 171, 0.2);
  height: calc(100vh - 120px);
}

.ant-card-body {
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.ant-menu-light .ant-menu-item-selected {
  color: #212b36;
}

.ant-menu-title-content {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0px;
  font-family: "Public Sans", sans-serif;
  display: block;
  font-size: 0.875rem !important;
  font-weight: 600 !important
}

.card-item-link {
  background-color: rgba(145, 158, 171, 0.04);
}
</style>
