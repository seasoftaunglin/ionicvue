<template>
    <div>
      <ion-header>
          <ion-toolbar>
          <ion-title>Petcom </ion-title>
          </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item>
          <ion-label>Shake</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Current User - {{currentUser.email}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>The Legend of Zelda</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Pac-Man</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Super Mario World</ion-label>
        </ion-item>
        <ion-item>
          <ion-label><ion-button @click="signout">SignOut</ion-button></ion-label>
        </ion-item>
      </ion-list>
    </div>
</template>

<script>
import database from '@/service/database'

export default {
  methods : {
    signout() {
      database.signOut()
    }
  },
  computed : {
    currentUser() {
      return this.$store.state.currentUser
    }
  }
}
</script>
