new Vue ({
    el: '#admin-events',
    data: {
        clubs,
        selectedClub: '',
        selectedEvent: '',
        usersarr:[],
        namearr:[],
        disabled:true
    },
    methods: {
        changeclub() {
            this.selectedEvent = "";
        },
        display(){
            var self=this
            console.log(self.selectedEvent)
            console.log(self.selectedClub)

            firebase.firestore().collection("events").doc(self.selectedEvent.name)
            .get()
            .then(function(doc){
                self.usersarr=doc.data().users
                })
            self.disabled=false
        }
    }
})