const { createApp } = Vue;

createApp({
    data() {
        return {
            randomMailApi: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emailArray: [],
        }
    },
    methods: {
        callApi() {
            axios.get(this.randomMailApi)
                .then(response => {
                    console.log(response.data.response);
                })
                .catch(error => {
                    console.error(error);
                })
        },
        cloneObj() {
            for (let i = 0; i < 10; i++) {
                const newMail = this.callApi()
                this.emailArray.push(newMail)
            }
        }
    },
    mounted() {
        this.cloneObj()

    },
}).mount('#app')
