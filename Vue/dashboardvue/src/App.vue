<template>
  <div id="main-wrapper">
    <HeaderComponent />
    <SidebarComponent />
    <div class="page-wrapper">
      <!-- ============================================================== -->
      <!-- Container fluid -->
      <!-- ============================================================== -->
      <div class="container-fluid">
        <BreadcrumbsComponent />

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                This is some text within a card block.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- footer -->
      <!-- ============================================================== -->
      <footer class="footer">© 2022 Admin Pro</footer>
      <!-- ============================================================== -->
      <!-- End footer -->
      <!-- ============================================================== -->
    </div>
  </div>
</template>

<script>
// Imports
import HeaderComponent from "./components/shared/HeaderComponent.vue";
import SidebarComponent from "./components/shared/SidebarComponent.vue";
import BreadcrumbsComponent from "./components/shared/BreadcrumbsComponent.vue";

// Exports
export default {
  name: "App",
  components: {
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
