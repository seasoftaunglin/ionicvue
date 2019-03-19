<template>
    <ion-app>  
        <ion-page>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Petcom </ion-title>
                </ion-toolbar>
            </ion-header>
            Email is {{email}}
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
import database from '@/service/database'
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
        async logIn(){
            let result = await database.logIn(this.email , this.password)

            if(result.message){
                console.log(result.message)
            }else {
                console.log('User is logged in')
                this.$router.push('home')
            }
        }
    }
}
</script>

