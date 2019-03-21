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
          <ion-label>Current User - {{user.name}}</ion-label>
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
import axios from 'axios'
export default {
  data(){
    return {
      user : '',
      currentUserToken : this.$store.state.currentUserToken.token,
    }
  },
  methods : {
    signout() {
      database.signOut()
    }
  },
  created(){
    axios({
        method : 'post',
        url : 'http://localhost:8000/api/details' , 
        headers: {
                Authorization : 'Bearer ' + this.currentUserToken
            }
        }).
    then((response) => {
        this.user = response.data.success
    })
  },
  computed : {
    currentUser() {
      return this.$store.state.currentUser
    }
  }
}
</script>
