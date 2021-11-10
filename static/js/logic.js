// import studentData from "./static/data/data.json"

const config = {
    el: "#myApp",
    data: {
        studentName: "NA",
        isLoggedIn: true,
        classList: ["Mathew", "James", "Sam"]
    }, 
    methods : {
        saveItem() {
            this.classList.push(this.studentName)
        }
    }
};

new Vue(config);

//Logic implemented here 