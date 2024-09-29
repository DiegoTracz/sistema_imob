<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import App from '@metronic/App.vue';
import Dashboard from '@metronic/views/Dashboard.vue';
import { provide } from 'vue';

provide('pageTitle', 'Dashboard');
provide('breadcrumbs', ['Dashboard']);

</script>

<template>
    <Head title="Dashboard" />

    <App>
        <AuthenticatedLayout>
            <Dashboard />
        </AuthenticatedLayout>
    </App>
</template>
