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
            </form>
        </ion-page>
    </ion-app>
</template>

<script>
import axios from 'axios'
export default {
    name: 'logIn',
    created(){
        if(this.$session.exists()){
            if(this.$session.has('token')){
                this.$router.push('home')
            }
        }
    },
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
                   this.$session.start();
                   this.$session.set('token' , response.data.success);
                   this.$router.push('home');
            });
        },
    }
}
</script>

