<script setup>
import TableGroup from './TableGroup.vue';


</script>

<template>
    <div>
        <div class="flex flex-col gap-6">
            <!-- title-btn -->
            <div class="flex gap-4">
                <!-- input -->
                <div class="w-[200px]">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            class="block w-full px-4 py-2 ps-10 text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-bring-black"
                            placeholder="Search..." />
                    </div>
                </div>

                <!-- status -->
                <div class="relative h-10 w-[200px] bg-gray-50">
                    <select
                        class=" peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                        <option value="all">Tất cả</option>
                        <option value="con">Còn hạn</option>
                        <option value="het">Hết hạn</option>
                    </select>
                    <label
                        class="text-gray-500 border-gray-300 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Status
                    </label>
                </div>
                <!-- profile -->
                <div class="relative h-10 w-[200px] bg-gray-50">
                    <select
                        class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                        <option class="item-select" value="profile">Profile</option>
                        <option class="item-select" value="con">
                            Facebook
                        </option>
                        <option class="item-select" value="het">Telegram</option>
                    </select>
                    <label
                        class=" text-gray-500 border-gray-300 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Display mode
                    </label>
                </div>
            </div>

            <!-- btn  -->
            <div>
                <div class="flex justify-between">
                    <div class="flex gap-2">
                        <!-- btn  Automation-->
                        <a-button type="button" style="background-color: rgb(0, 167, 111);"
                            class="px-2 py-1 font-semibold text-center flex items-center justify-between text-white leading-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e8eaed">
                                <path
                                    d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z" />
                            </svg>
                            <p class="pl-1 text-xs">Automation</p>
                        </a-button>

                        <!-- btn  Delete-->
                        <a-button type="button"
                            class="px-2 py-1 text-center flex items-center justify-between bg-black text-white leading-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e8eaed">
                                <path
                                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                            </svg>
                            <p class="pl-1 font-semibold text-xs">Delete</p>
                        </a-button>

                        <!-- btn  Renew-->
                        <a-button type="button"
                            class="px-2 py-1 font-semibold  text-center flex items-center justify-between bg-black text-white leading-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e8eaed">
                                <path
                                    d="M440-280v-40h80v40h-80Zm0-60v-31q-19-11-29.5-29.5T400-440q0-33 23.5-56.5T480-520q33 0 56.5 23.5T560-440q0 21-10.5 39.5T520-371v31h-80Zm200 18-42-43q11-17 16.5-36t5.5-39q0-20-5.5-39T598-515l42-43q20 26 30 56t10 62q0 32-10 62t-30 56Zm-320 0q-20-26-30-56t-10-62q0-83 58.5-141.5T480-640v-50l90 80-90 80v-50q-58 0-99 41t-41 99q0 20 5.5 39t16.5 36l-42 43ZM240-40q-33 0-56.5-23.5T160-120v-720q0-33 23.5-56.5T240-920h480q33 0 56.5 23.5T800-840v720q0 33-23.5 56.5T720-40H240Zm0-200h480v-480H240v480Zm0 80v40h480v-40H240Zm0-640h480v-40H240v40Zm0-40v40-40Zm0 720v-40 40Z" />
                            </svg>
                            <p class="pl-1 text-xs">Renew</p>
                        </a-button>

                        <!-- btn  Transfer-->
                        <a-button type="button"
                            class="px-2 py-1 font-semibold text-center flex items-center justify-between bg-black text-white leading-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e8eaed">
                                <path
                                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                            </svg>
                            <p class="pl-1 text-xs">Transfer</p>
                        </a-button>

                        <!-- btn  Move group-->
                        <a-button type="button"
                            class="px-2 py-1 font-semibold text-center flex items-center justify-between bg-black text-white leading-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e8eaed">
                                <path
                                    d="M160-160q-33 0-56.5-23.5T80-240v-120h80v120h640v-480H160v120H80v-120q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm300-140-56-58 83-82H80v-80h407l-83-82 56-58 180 180-180 180Z" />
                            </svg>
                            <p class="pl-1 text-xs">Move group</p>
                        </a-button>

                        <!-- btn  Update proxy-->
                        <a-button type="button"
                            class="px-2 py-1 font-semibold text-center flex items-center justify-between bg-black text-white leading-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e8eaed">
                                <path
                                    d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" />
                            </svg>
                            <p class="pl-1 text-xs">Update proxy</p>
                        </a-button>

                        <!-- btn  Import resource-->
                        <a-button type="button"
                            class="px-2 py-1 font-semibold text-center flex items-center justify-between bg-black text-white leading-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e8eaed">
                                <path
                                    d="M440-160v-326L336-382l-56-58 200-200 200 200-56 58-104-104v326h-80ZM160-600v-120q0-33 23.5-56.5T240-800h480q33 0 56.5 23.5T800-720v120h-80v-120H240v120h-80Z" />
                            </svg>
                            <p class="pl-1 text-xs">Import resource</p>
                        </a-button>
                    </div>
                    <div class="flex gap-2">
                        <!-- btn  Arrange-->
                        <a-button type="button"
                            class="px-2 py-1  text-center flex items-center justify-between bg-black text-white leading-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e8eaed">
                                <path
                                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                            </svg>
                            <p class="pl-1 font-semibold text-xs">Arrange</p>
                        </a-button>

                        <!-- btn  Reload-->
                        <a-button type="button"
                            class="px-2 py-1 font-semibold text-center flex items-center justify-between bg-black text-white leading-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e8eaed">
                                <path
                                    d="M440-280v-40h80v40h-80Zm0-60v-31q-19-11-29.5-29.5T400-440q0-33 23.5-56.5T480-520q33 0 56.5 23.5T560-440q0 21-10.5 39.5T520-371v31h-80Zm200 18-42-43q11-17 16.5-36t5.5-39q0-20-5.5-39T598-515l42-43q20 26 30 56t10 62q0 32-10 62t-30 56Zm-320 0q-20-26-30-56t-10-62q0-83 58.5-141.5T480-640v-50l90 80-90 80v-50q-58 0-99 41t-41 99q0 20 5.5 39t16.5 36l-42 43ZM240-40q-33 0-56.5-23.5T160-120v-720q0-33 23.5-56.5T240-920h480q33 0 56.5 23.5T800-840v720q0 33-23.5 56.5T720-40H240Zm0-200h480v-480H240v480Zm0 80v40h480v-40H240Zm0-640h480v-40H240v40Zm0-40v40-40Zm0 720v-40 40Z" />
                            </svg>
                            <p class="pl-1 text-xs">Reload</p>
                        </a-button>


                        <!-- btn  Create profile-->
                        <a-button type="button" style="background-color: rgb(0, 167, 111);"
                            class="px-2 py-1 font-semibold  text-center flex items-center justify-between text-white leading-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e8eaed">
                                <path
                                    d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z" />
                            </svg>
                            <p class="pl-1 text-xs">Create profile</p>
                        </a-button>
                    </div>
                </div>
            </div>

            <!-- table -->
            <div>
                <TableGroup />
            </div>
        </div>

    </div>
</template>

<style scoped>
.item-select {
    height: 40px;
    background-color: #f9fafb;
}
</style>
