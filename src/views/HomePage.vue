<script setup>
import HeroBanner from '@/components/HeroBanner.vue'
import HomeCard from '@/components/HomeCard.vue'
import JobListings from '@/components/JobListings.vue'
</script>

<template>
  <HeroBanner />
  <HomeCard />
  <JobListings :limit="3" :showButton="true" />
</template>
