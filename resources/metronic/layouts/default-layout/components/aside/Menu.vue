<template>
  <!--begin::Menu wrapper-->
  <div
    id="kt_aside_menu_wrapper"
    ref="scrollElRef"
    class="w-100 hover-scroll-overlay-y d-flex pe-2"
    data-kt-scroll="true"
    data-kt-scroll-activate="{default: false, lg: true}"
    data-kt-scroll-height="auto"
    data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
    data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper"
    data-kt-scroll-offset="100"
  >
    <!--begin::Menu-->
    <div
      class="menu menu-column menu-rounded menu-sub-indention menu-active-bg fw-semibold my-auto"
      id="#kt_aside_menu"
      data-kt-menu="true"
    >
      <template v-for="(item, i) in MainMenuConfig" :key="i">
        <template v-if="!item.pages">
          <div class="menu-item">
            <Link :href="item.route"  v-if="item.route && item.heading" class="menu-link"
            active-class="active">
              <span
                v-if="item.keenthemesIcon || item.bootstrapIcon"
                class="menu-icon"
              >
                <i
                  v-if="asideMenuIcons === 'bootstrap'"
                  :class="item.bootstrapIcon"
                  class="bi fs-8"
                ></i>
                <KTIcon
                  v-else-if="asideMenuIcons === 'keenthemes'"
                  :icon-name="item.keenthemesIcon"
                  icon-class="fs-5"
                />
              </span>
              <span class="menu-title">{{ translate(item.heading) }}</span>

            </Link>
          </div>
        </template>
        <template v-if="item.pages">
          <div
            v-if="item.sectionTitle && item.route"
            :class="{ show: hasActiveChildren(item.route) }"
            class="menu-item menu-accordion"
            data-kt-menu-sub="accordion"
            data-kt-menu-trigger="click"
          >
            <span class="menu-link">
              <span
                v-if="item.keenthemesIcon || item.bootstrapIcon"
                class="menu-icon"
              >
                <i
                  v-if="asideMenuIcons === 'bootstrap'"
                  :class="item.bootstrapIcon"
                  class="bi fs-8"
                ></i>
                <KTIcon
                  v-else-if="asideMenuIcons === 'keenthemes'"
                  :icon-name="item.keenthemesIcon"
                  icon-class="fs-5"
                />
              </span>
              <span class="menu-title">{{ translate(item.sectionTitle) }}</span>
              <span class="menu-arrow"></span>
            </span>
            <div
              :class="{ show: hasActiveChildren(item.route) }"
              class="menu-sub menu-sub-accordion"
            >
              <template v-for="(menuItem, j) in item.pages" :key="j">
                <template v-if="menuItem.heading">
                  <div class="menu-item">
                    <Link
                      v-if="menuItem.route"
                      class="menu-link"
                      active-class="active"
                      :href="menuItem.route"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">{{
                        translate(menuItem.heading)
                      }}</span>
                    </Link>
                  </div>
                </template>
                <div
                  v-if="menuItem.sectionTitle && menuItem.route"
                  :class="{ show: hasActiveChildren(menuItem.route) }"
                  class="menu-item menu-accordion"
                  data-kt-menu-sub="accordion"
                  data-kt-menu-trigger="click"
                >
                  <span class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate(menuItem.sectionTitle)
                    }}</span>
                    <span class="menu-arrow"></span>
                  </span>
                  <div
                    v-if="menuItem.route"
                    :class="{ show: hasActiveChildren(menuItem.route) }"
                    class="menu-sub menu-sub-accordion"
                  >
                    <template v-for="(item2, k) in menuItem.sub" :key="k">
                      <div v-if="item2.heading" class="menu-item">
                        <Link
                          v-if="item2.route"
                          class="menu-link"
                          active-class="active"
                          :href="item2.route"
                        >
                          <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                          </span>
                          <span class="menu-title">{{
                            translate(item2.heading)
                          }}</span>
                        </Link>
                      </div>
                      <div
                        v-if="item2.sectionTitle && item2.route"
                        :class="{ show: hasActiveChildren(item2.route) }"
                        class="menu-item menu-accordion"
                        data-kt-menu-sub="accordion"
                        data-kt-menu-trigger="click"
                      >
                        <span class="menu-link">
                          <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                          </span>
                          <span class="menu-title">{{
                            translate(item2.sectionTitle)
                          }}</span>
                          <span class="menu-arrow"></span>
                        </span>
                        <div
                          :class="{ show: hasActiveChildren(item2.route) }"
                          class="menu-sub menu-sub-accordion"
                        >
                          <template v-for="(item3, k) in item2.sub" :key="k">
                            <div v-if="item3.heading" class="menu-item">
                              <Link
                                v-if="item3.route"
                                class="menu-link"
                                active-class="active"
                                :href="item3.route"
                              >
                                <span class="menu-bullet">
                                  <span class="bullet bullet-dot"></span>
                                </span>
                                <span class="menu-title">{{
                                  translate(item3.heading)
                                }}</span>
                              </Link>
                            </div>
                          </template>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </template>

    </div>
    <!--end::Menu-->
  </div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@metronic/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { version } from "@metronic/core/helpers/system";
import { asideMenuIcons } from "@metronic/layouts/default-layout/config/helper";
import MainMenuConfig from "@metronic/layouts/default-layout/config/MainMenuConfig";
import { Link } from '@inertiajs/vue3';

export default defineComponent({
  name: "kt-menu",
  components: {
    Link
  },
  setup() {
    const { t, te } = useI18n();
    const scrollElRef = ref<null | HTMLElement>(null);

    onMounted(() => {
      if (scrollElRef.value) {
        scrollElRef.value.scrollTop = 0;
      }
    });

    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const hasActiveChildren = (match: string) => {
      // NOTE: encontrar forma de capturar a rota atual do inertia para comparar aqui
      // return route.path.indexOf(match) !== -1;
      return false;
    };

    return {
      hasActiveChildren,
      MainMenuConfig,
      asideMenuIcons,
      version,
      translate,
      getAssetPath,
    };
  },
});
</script>
@metronic/layouts/default-layout/config/MainMenuConfig@metronic/layouts/default-layout/config/config
