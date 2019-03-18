<template>
    <ion-app>  
        <ion-page>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Petcom </ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-item>
                            <ion-label position="floating">Email</ion-label>
                            <ion-input></ion-input>
                        </ion-item>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-item>
                            <ion-label position="floating">Password</ion-label>
                            <ion-input></ion-input>
                        </ion-item>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-button>
                            <ion-icon slot="start" name="search"></ion-icon>
                            Login
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-page>
    </ion-app>
</template>
