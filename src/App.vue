<template>
  <div id="app">
    <ion-page class="show-page" main>
        <ion-tabs>
            <ion-tab label="Home" icon="home" name="home">
                <router-view name="home" />
            </ion-tab>
            <ion-tab label="Contact" icon="contacts" name="contact">
                <router-view name="contact" />
            </ion-tab>
            <ion-tab label="Camera" icon="camera" name="camera" class=".tab-button">
                <router-view name="camera" />
            </ion-tab>
            <ion-tab label="Geo" icon="pin" name="geo">
                <router-view name="geo" />
            </ion-tab>
            <ion-tab label="Shake" icon="person" name="shake">
                <router-view name="shake" />
            </ion-tab>
        </ion-tabs>
    </ion-page>
  </div>
</template>

<script>
import store from '@/store'
import axios from 'axios'
export default {
    name : 'App',
    data() {
        return {
            currentUserToken : this.$store.state.currentUserToken.token,
        }
    },
    created(){
        if(this.currentUserToken == null || this.currentUserToken == undefined){
            this.$router.push('login')
        }else{
            axios({
                method : 'post',
                url : 'http://localhost:8000/api/details' , 
                headers: {
                        Authorization : 'Bearer ' + this.currentUserToken
                    }
                }).
            then((response) => {
                this.$store.commit('setCurrentUser' , response.data.success);
            })
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
