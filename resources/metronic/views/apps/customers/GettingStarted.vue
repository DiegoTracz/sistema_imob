<template>
  <KTModalCard
    title="Cadastro de cliente"
    :image="getIllustrationsPath('2.png')"
    :form="form"
    button-text="Salvar e Continuar"
    modal-id="kt_modal_add_customer"
  ></KTModalCard>

  <AddCustomerModal></AddCustomerModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTModalCard from "@metronic/components/cards/Card.vue";
import AddCustomerModal from "@metronic/components/modals/forms/AddCustomerModal.vue";
import { getIllustrationsPath } from "@metronic/core/helpers/assets";
import { type InertiaForm } from "@inertiajs/vue3";
import { PropType } from "vue";
import { FormClient } from "resources/js/Models/Cliente";

export default defineComponent({
  name: "getting-started",
  props: {
    form: Object as PropType<InertiaForm<FormClient>>,
  },
  components: {
    KTModalCard,
    AddCustomerModal,
  },
  setup(props) {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
