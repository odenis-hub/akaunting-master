/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./../../bootstrap');

import Vue from 'vue';

import Form from './../../plugins/form';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const login = new Vue({
    el: '#app',

    data: function () {
        return {
            form: new Form('auth'),
        }
    },

    mounted() {
        Swiper.use([Navigation, Pagination, Autoplay]);

        new Swiper(".swiper-container", {
            loop: true,
            speed: 1000,
            allowTouchMove: true,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        this.checkNotify();
    },

    methods: {
        onSubmit() {
            this.form.submit();
        },

        // onSubmit() {            
        //     this.form.submit()
        //         .then(response => {
        //             // Aquí puedes manejar la respuesta en caso de éxito
        //             if (response.success) {
        //                 // Realiza acciones en caso de éxito, como redirigir o mostrar un mensaje
        //                 this.$notify({
        //                     verticalAlign: 'bottom',
        //                     horizontalAlign: 'left',
        //                     message: response.message,
        //                     type: 'success'
        //                 });
    
        //                 // Si se requiere redirigir
        //                 if (response.redirect) {
        //                     window.location.href = response.redirect;
        //                 }
        //             } else {
        //                 // Si el login falla
        //                 this.$notify({
        //                     verticalAlign: 'bottom',
        //                     horizontalAlign: 'left',
        //                     message: response.message,
        //                     type: 'error'
        //                 });
        //             }
        //         })
        //         .catch(error => {
        //             // Manejar errores de la solicitud AJAX si es necesario
        //             console.error(error);
        //             this.$notify({
        //                 verticalAlign: 'bottom',
        //                 horizontalAlign: 'left',
        //                 message: 'An unexpected error occurred.',
        //                 type: 'error'
        //             });
        //         });
        // },













        // Check Default set notify > store / update action
        checkNotify: function () {
            if (! flash_notification) {
                return false;
            }

            flash_notification.forEach(notify => {
                let type = notify.level;

                this.$notify({
                    verticalAlign: 'bottom',
                    horizontalAlign: 'left',
                    message: notify.message,
                    timeout: 5000,
                    icon: '',
                    type
                });
            });
        },
    }
});
