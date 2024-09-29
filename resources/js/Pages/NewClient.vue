<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import App from '@metronic/App.vue';
import GettingStarted from '@metronic/views/apps/customers/GettingStarted.vue';
import { provide } from 'vue';
import { FormClient } from '../Models/Cliente';

provide('pageTitle', 'New Client');
provide('breadcrumbs', ['Clients', 'New Client']);

const form = useForm<FormClient>({
	"user": {
		"email": "user@example.com"
	},
	"person": {
		"name": "John Doe",
		"documents": {
			"cpf": "123.456.789-00"
		}
	},
	"customer": {
		"company_name": "Example Company Ltda",
		"fantasy_name": "Example Co",
		"documents": {
		"cnpj": "12.345.678/0001-99",
		"creci": "12345"
		},
		"address": {
			"cep": "12345-678",
			"street": "Rua Exemplo",
			"number": "123",
			"neighborhood": "Bairro Exemplo",
			"city": "Cidade Exemplo",
			"state": "EX",
			"complement": "Apto 101"
		},
  }
})

</script>

<template>
    <Head title="New Client" />

    <App>
        <AuthenticatedLayout>
           <GettingStarted :form="form" />
        </AuthenticatedLayout>
    </App>
</template>
