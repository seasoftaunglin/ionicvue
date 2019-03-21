<template>
    <ion-app>  
        <ion-page>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Petcom </ion-title>
                </ion-toolbar>
            </ion-header>
            <form @submit.prevent="logIn">
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-item>
                                <ion-label position="floating">Email</ion-label>
                                <ion-input type='email' :value="email" @input="email = $event.target.value"></ion-input>
                            </ion-item>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-item>
                                <ion-label position="floating" >Password</ion-label>
                                <ion-input type="password" :value="password" @input="password = $event.target.value"></ion-input>
                            </ion-item>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-button type='submit'>
                                <ion-icon slot="start" name="log-in"></ion-icon>
                                Log In
                            </ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <button @click="gotohome()">Home Test</button>
            </form>
        </ion-page>
    </ion-app>
</template>

<script>
import axios from 'axios'
export default {
    name: 'logIn',
    data() {
        return{
            email : '',
            password : '',
            error: ''
        }
    },
    methods: {
        logIn(){
            axios.post('http://localhost:8000/api/login' , {
                'email' : this.email,
                'password' : this.password
            }).then((response) => {
                   this.$store.commit('setCurrentUserToken' , response.data.success);
                   this.$router.push('home');
            });
        },
        gotohome(){
            this.$router.push('home')
        }
    }
}
</script>

