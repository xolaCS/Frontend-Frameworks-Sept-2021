let myVue = new Vue({
    el: '#myApp', 
    data: {
        state: "default", 
        title : 'This is a title from the view ecosystem', 
        myModel: "This is reactive", 
        isLoggedOut: true, 
        menuItems : ["Home", "About", "Contact Me"], 
        myList: [], 
    }, 
    methods: {
        saveItem() {
            this.myList.push(this.myModel); 
        }, 
        changeState(newState) {
            this.state = newState; 
        }
    }
})

document.getElementById('output').innerHTML = myVue.$data.title; 