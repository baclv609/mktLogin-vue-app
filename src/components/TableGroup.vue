<template>
    <a-table :columns="columns" :data-source="data" :scroll="{ x: 1300, y: 1000 }">
        <template #bodyCell="{ column }">
            <template v-if="column.key === 'operation'">
                <a>action</a>
            </template>
        </template>
    </a-table>
</template>
<script setup>
const columns = [
    {
        title: 'ID',
        width: 100,
        dataIndex: 'ID',
        key: 'ID',
        fixed: 'left',
    },
    {
        title: 'Group',
        width: 100,
        dataIndex: 'Group',
        key: 'Group',
        fixed: 'left',
    },
    {
        title: 'Name',
        dataIndex: 'address',
        key: '1',
    },
    {
        title: 'Note',
        dataIndex: 'address',
        key: '2',
    },
    {
        title: 'Proxy',
        dataIndex: 'address',
        key: '3',
    },
    {
        title: 'Duration',
        dataIndex: 'address',
        key: '4',
    },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        Group: 32,
        address: 'New York Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        Group: 40,
        address: 'London Park',
    },
];
</script>