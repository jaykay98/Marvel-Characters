<template>
  <footer id="footer" class="footer">
    <div class="container">
      <p
        id="footer-text"
        align="center"
        class="mt-3"
      >Data provided by Marvel. &copy; {{ new Date().getFullYear() }} Marvel</p>
    </div>
  </footer>
</template>

<style>
#footer {
  background-color: #007bff;
}

#footer-text {
  color: white;
}
</style>