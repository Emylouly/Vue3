const MyNameApp = {

    data(){
        return{
            name: "",
            age: "",
            input_name:"",
            input_age:""
        }
    },

    methods:{
        submitForm(e){
            e.preventDefault();
            console.log(this.input_name);
            console.log(this.input_age);
            this.name = this.input_name;
            this.age = this.input_age;
        }
    }

}

Vue.createApp(MyNameApp).mount("#app");