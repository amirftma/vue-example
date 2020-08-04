<template>
  <base-info-card title="Features">
    <a
      v-for="feature in features"
      :key="feature"
      :text="feature"
      class="mb-8 grey--text body-1 d-block text-none"
      href="#"
      v-html="`&rsaquo; ${feature}`"
    />
  </base-info-card>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    components : {
      BaseInfoCard: () => import("@/components/base/InfoCard"),
    },
    
    data: () => ({
      features: [
        'Cool One',
        'Second Cool Thing',
        'User Friendly Design? maybe',
        'No Support',
        'SEO Optimized? sure',
      ],
    }),
  }
</script>
