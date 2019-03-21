<template>
    <ion-app>  
        <ion-page>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Petcom </ion-title>
                </ion-toolbar>
            </ion-header>
            <form @submit.prevent="signUp">
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-item>
                                <ion-label position="floating">User Name</ion-label>
                                <ion-input type='text' :value="username" @input="username = $event.target.value"></ion-input>
                            </ion-item>
                        </ion-col>
                    </ion-row>
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
                                <ion-icon slot="start" name="search"></ion-icon>
                                Signup
                            </ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </form>
        </ion-page>
    </ion-app>
</template>

<script>
import store from '@/store'
import axios from 'axios'
export default {
    name: 'Signup',
    data() {
        return{
            username : '',
            email : '',
            password : '',
            error: ''
        }
    },
    methods: {
        async signUp(){
            axios.post('http://localhost:8000/api/register' , {
                'name' : this.username,
                'email' : this.email,
                'password' : this.password,
                'c_password' : this.password
            }).then((response) => {
                   console.log(response);
            });
        }
    }
}
</script>

