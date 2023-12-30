<script setup>
const openSheet = () => {
  document.getElementById('testBottomSheet').openSheet()
}

const openFullSheet = () => {
  document.getElementById('testBottomSheet').openFullSheet()
}

const closeSheet = () => {
  document.getElementById('testBottomSheet').closeSheet()
}

const fullSheet = () => {
  document.getElementById('testBottomSheet').fullSheet()
}
</script>

<template>
  <button @click="openSheet">openSheet</button>

  <button @click="openFullSheet">openFullSheet</button>
  <bottom-sheet id="testBottomSheet" title="Title is Lorem ipsum">
    <main className="_example">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div>
        <button type="button" @click="closeSheet">closeSheet</button>
        <button type="button" @click="fullSheet">fullSheet</button>
      </div>
    </main>
  </bottom-sheet>
</template>
