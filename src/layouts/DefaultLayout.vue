<script setup>
import { ref } from "vue";
import { PicCenterOutlined, UserOutlined, SettingOutlined, RedoOutlined, WindowsOutlined, UsergroupAddOutlined } from '@ant-design/icons-vue';
import { useRoute } from "vue-router";
import LogoMax from "@/components/icons/LogoMax.vue";
import LogoSmall from "@/components/icons/LogoSmall.vue";
import IconBack from "@/components/icons/IconBack.vue";

const collapsed = ref(false);
const route = useRoute();

const workspace = ref(1);

const useActiveLinkClass = (targetRouteName) => {
  const isActive = route.name === targetRouteName;
  if (isActive) {
    return {
      '!border-b-2 !border-[#00A66E]': isActive,
      'px-4 py-2': true, // Padding
    };
  }

  return {
    'px-4 py-2': true, // Padding
  };
};
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider :width="!collapsed ? 239 : 80"
      class="!overflow-auto !h-screen !fixed !left-0 !top-0 !bottom-0 !w-[288px] border" v-model:collapsed="collapsed"
      :trigger="null" collapsible>
      <div class="absolute !rounded-full !border-1 !bg-gray-400 !cursor-pointer"
        :class="!collapsed ? '!top-[32px] !left-[228px]' : '!top-[22px] !left-[76px]'"
        @click="() => (collapsed = !collapsed)">
        <IconBack />
      </div>
      <div class="logo-wrapper mb-3 flex justify-center">
        <LogoSmall v-if="collapsed" />
        <LogoMax v-else />
      </div>
      <a-menu theme="light" mode="inline">
        <a-menu-item key="1">
          <router-link to="/">
            <PicCenterOutlined />
            <span class="nav-text border-0">Profile</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="2">
          <router-link to="/automation">
            <PicCenterOutlined />
            <span class="nav-text">Automation</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="3">
          <router-link to="/synchronizer">
            <RedoOutlined />
            <span class="nav-text">Synchronizer </span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="4">
          <router-link to="/extension">
            <WindowsOutlined />
            <span class="nav-text">extension </span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/menber">
            <UsergroupAddOutlined />
            <span class="nav-text">Member </span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :class="collapsed ? '!ml-[80px]' : '!ml-[239px]'">
      <a-layout-header
        class="!bg-white !px-[40px] !py-0 !h-[80px] !leading-[80px] flex justify-between items-center justify-items-center ">
        <div class="flex gap-4">
          <div>
            <a-select v-model:value="workspace" class="!w-[200px]">
              <a-select-option :value="1">My Workspace</a-select-option>

            </a-select>
          </div>
          <div class="flex gap-3">
            <div>
              <router-link :to="{ name: 'buy-package' }" class="!text-black hover:!text-red-500"
                :class="useActiveLinkClass('buy-package')">
                Buy package
              </router-link>
            </div>
            <div>
              <router-link :to="{ name: 'recharge' }" class="!text-black hover:!text-red-500"
                :class="useActiveLinkClass('recharge')">
                Recharge
              </router-link>
            </div>
            <div>
              <router-link :to="{ name: 'api-docs' }" class="!text-black hover:!text-red-500"
                :class="useActiveLinkClass('api-docs')">
                Api docs
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-4">

          <a-dropdown :trigger="['click']" @click.prevent class="flex items-center p-2">
            <a-button class="!p-0 !m-0 border-0 h-24px">
              <svg xmlns="http://www.w3.org/2000/svg" class="!text-black" viewBox="0 0 50 30" width="24" height="24">
                <clipPath id="t">
                  <path d="M25,15h25v15zv15h-25zh-25v-15zv-15h25z" />
                </clipPath>
                <path d="M0,0v30h50v-30z" fill="#012169" />
                <path d="M0,0 50,30M50,0 0,30" stroke="#fff" stroke-width="6" />
                <path d="M0,0 50,30M50,0 0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4" />
                <path d="M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z" fill="#C8102E" stroke="#FFF" stroke-width="2" />
              </svg>
            </a-button>
            <template #overlay>
              <a-menu placement="bottomLeft" arrow>
                <a-menu-item key="0" class="flex justify-center">
                  <div class="flex items-center">
                    <span> <svg xmlns="http://www.w3.org/2000/svg" class="!text-black" viewBox="0 0 50 30" width="24"
                        height="24">
                        <clipPath id="t">
                          <path d="M25,15h25v15zv15h-25zh-25v-15zv-15h25z" />
                        </clipPath>
                        <path d="M0,0v30h50v-30z" fill="#012169" />
                        <path d="M0,0 50,30M50,0 0,30" stroke="#fff" stroke-width="6" />
                        <path d="M0,0 50,30M50,0 0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4" />
                        <path d="M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z" fill="#C8102E" stroke="#FFF"
                          stroke-width="2" />
                      </svg></span>
                    <span class="pl-2">English</span>
                  </div>
                </a-menu-item>
                <a-menu-item key="1">
                  <div class="flex items-center">
                    <span>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png?20170626140925"
                        class="w-6" alt="">
                    </span>
                    <span class="pl-2">Vietnamese</span>
                  </div>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

          <div class="flex items-center p-2">
            <a-button class="!p-0 !m-0 border-0 h-24px !text-black">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="#000000">
                <path
                  d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </a-button>
          </div>

          <div class="flex items-center p-2">
            <SettingOutlined class="!text-[25px]" />
          </div>

          <div>
            <a-avatar>
              <UserOutlined />
            </a-avatar>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content class="!m-4 bg-white">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="css" scoped>
.logo-wrapper {
  height: 64px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>
