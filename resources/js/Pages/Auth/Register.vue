<script setup>
// import GuestLayout from '@/Layouts/GuestLayout.vue';
// import InputError from '@/Components/InputError.vue';
// import InputLabel from '@/Components/InputLabel.vue';
// import PrimaryButton from '@/Components/PrimaryButton.vue';
// import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthLayout from '@metronic/layouts/AuthLayout.vue';
import SignIn from '@metronic/views/crafted/authentication/basic-flow/SignUp.vue';
import App from '@metronic/App.vue';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <App>
        <AuthLayout>
            <Head title="Register" />

            <SignIn />
        </AuthLayout>
    </App>
</template>
