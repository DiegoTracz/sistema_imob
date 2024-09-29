<script setup>
// import Checkbox from '@/Components/Checkbox.vue';
// import InputError from '@/Components/InputError.vue';
// import InputLabel from '@/Components/InputLabel.vue';
// import PrimaryButton from '@/Components/PrimaryButton.vue';
// import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthLayout from '@metronic/layouts/AuthLayout.vue';
import SignIn from '@metronic/views/crafted/authentication/basic-flow/SignIn.vue';
import App from '@metronic/App.vue';

const props = defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = (user, password) => {
    form.email = user;
    form.password = password;

    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};

</script>

<template>
    <App>
        <AuthLayout>
            <Head title="Log in" />

            <SignIn :canResetPassword="props.canResetPassword" :status="props.status" :submit="submit" />

            <!-- <div v-if="status" class="mb-4 small text-success">
                {{ status }}
            </div>

            <form @submit.prevent="submit">
                <div class="mb-3">
                    <InputLabel for="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        class="form-control"
                        v-model="form.email"
                        required
                        autofocus
                        autocomplete="username"
                    />

                    <InputError class="mt-2" :message="form.errors.email" />
                </div>

                <div class="mb-3">
                    <InputLabel for="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        class="form-control"
                        v-model="form.password"
                        required
                        autocomplete="current-password"
                    />

                    <InputError class="mt-2" :message="form.errors.password" />
                </div>

                <div class="mb-3 form-check">
                    <label class="form-check-label d-flex align-items-center">
                        <Checkbox name="remember" v-model:checked="form.remember" />
                        <span class="ms-2 text-muted">Remember me</span>
                    </label>
                </div>

                <div class="d-flex justify-content-end mb-3">
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="text-muted text-decoration-underline me-3"
                    >
                        Forgot your password?
                    </Link>

                    <PrimaryButton
                        class="btn btn-primary"
                        :class="{ 'opacity-50': form.processing }"
                        :disabled="form.processing"
                    >
                        Log in
                    </PrimaryButton>
                </div>
            </form> -->
        </AuthLayout>
    </App>
</template>

<style scoped>
.opacity-50 {
    opacity: 0.5;
}

.text-success {
    color: #28a745; /* Bootstrap success color */
}

.text-muted {
    color: #6c757d; /* Bootstrap muted color */
}

.form-check-label {
    display: flex;
    align-items: center;
}

.ms-2 {
    margin-left: 0.5rem; /* Custom spacing for margin left */
}
.mt-2 {
    margin-top: 0.5rem; /* Custom spacing for margin top */
}
.mb-3 {
    margin-bottom: 1rem; /* Bootstrap standard margin bottom */
}
</style>
