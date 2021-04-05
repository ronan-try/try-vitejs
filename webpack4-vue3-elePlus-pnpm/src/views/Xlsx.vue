<template>
  <div class="about">
    <h1>This is an XLSX library page</h1>
  </div>
</template>

<script>
import * as XLSX from 'xlsx'

export default {
  created() {
    console.log(XLSX.version)
  }
}
</script>