<template>
  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <KTHeader />

      <!-- begin:: Content -->
      <div
        id="kt_content"
        class="d-flex flex-column-fluid align-items-start"
        :class="{
          'container-fluid': contentWidthFluid,
          'container-xxl': !contentWidthFluid,
        }"
      >
        <KTAside
          v-if="asideEnabled"
          :lightLogo="themeLightLogo"
          :darkLogo="themeDarkLogo"
        />
        <div class="content flex-row-fluid" id="kt_content_container">
          <slot />
        </div>

        <KTSidebar v-if="displaySidebar" />
      </div>
      <!-- end:: Content -->
      <KTFooter />
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop />
  <KTMessengerDrawer />
  <KTActivityDrawer />
  <KTCreateApp />
  <KTInviteFriendsModal />

  <KTToolbarButtons />
  <KTHelpDrawer />
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeMount,
  onMounted,
  watch,
} from "vue";
import KTAside from "@metronic/layouts/default-layout/components/aside/Aside.vue";
import KTSidebar from "@metronic/layouts/default-layout/components/sidebar/Sidebar.vue";
import KTHeader from "@metronic/layouts/default-layout/components/header/Header.vue";
import KTFooter from "@metronic/layouts/default-layout/components/footer/Footer.vue";
import KTScrollTop from "@metronic/layouts/default-layout/components/extras/ScrollTop.vue";
import KTActivityDrawer from "@metronic/layouts/default-layout/components/drawers/ActivityDrawer.vue";
import KTCreateApp from "@metronic/components/modals/wizards/CreateAppModal.vue";
import KTInviteFriendsModal from "@metronic/components/modals/general/InviteFriendsModal.vue";
import KTToolbarButtons from "@metronic/layouts/default-layout/components/extras/ToolbarButtons.vue";
import KTHelpDrawer from "@metronic/layouts/default-layout/components/extras/HelpDrawer.vue";
import KTMessengerDrawer from "@metronic/layouts/default-layout/components/extras/MessengerDrawer.vue";
import { reinitializeComponents } from "@metronic/core/plugins/keenthemes";
import {
  asideEnabled,
  contentWidthFluid,
  displaySidebar,
  loaderEnabled,
  loaderLogo,
  subheaderDisplay,
  themeDarkLogo,
  themeLightLogo,
  toolbarDisplay,
} from "@metronic/layouts/default-layout/config/helper";
import LayoutService from "@metronic/core/services/LayoutService";

export default defineComponent({
  name: "default-layout",
  components: {
    KTAside,
    KTSidebar,
    KTHeader,
    KTFooter,
    KTScrollTop,
    KTCreateApp,
    KTInviteFriendsModal,
    KTActivityDrawer,
    KTToolbarButtons,
    KTHelpDrawer,
    KTMessengerDrawer,
  },
  setup() {

    onBeforeMount(() => {
      LayoutService.init();
    });

    onMounted(() => {
      nextTick(() => {
        reinitializeComponents();
      });
    });

    // watch(
    //   () => route.path,
    //   () => {
    //     nextTick(() => {
    //       reinitializeComponents();
    //     });
    //   }
    // );

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      displaySidebar,
      themeLightLogo,
      themeDarkLogo,
    };
  },
});
</script>
