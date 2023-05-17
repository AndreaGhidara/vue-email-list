const { createApp } = Vue;

createApp({
    data() {
        return {
            randomMailApi: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emailArray: [],
            mail:"",
        }
    },
    methods: {
        callApi() {
            axios.get(this.randomMailApi)
                .then(response => {
                    this.emailArray.push(response.data.response);
                })
                .catch(error => {
                    console.error(error);
                })
        },
        cloneObj() {
            for (let i = 0; i < 10; i++) {
                const newMail = this.callApi()
            }
        }
    },
    mounted() {
        this.cloneObj()
    },
}).mount('#app')
