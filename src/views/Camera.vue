<template>
    <div>
      <ion-header>
          <ion-toolbar>
          <ion-title>Petcom </ion-title>
          </ion-toolbar>
      </ion-header>
      <h1>Use Camera in Ionic App</h1>
        <button ion-button @click="clickImage()">Capture Image</button>
        <ion-img src="www.google.com" class="image"></ion-img>
    </div>
</template>
<style scoped>
.image {
    width: 100%;
    height: 100px;
}
</style>


