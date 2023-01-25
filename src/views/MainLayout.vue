<template>
  <div class="main-layout">
    <Header />
    <Menu />
    <AboutMe />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Header from "@/views/partials/HeaderPartial.vue";
import Menu from "@/views/partials/MenuPartial.vue";
import AboutMe from "@/views/partials/AboutMePartial.vue";
import Projects from "@/views/partials/ProjectsPartial.vue";
import Contact from "@/views/partials/ContactPartial.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
    Menu,
    AboutMe,
    Projects,
    Contact
  }
};
</script>
