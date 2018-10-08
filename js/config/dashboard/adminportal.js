new Vue ({
    el:'#details',
    data:{
        ucode:'',
        name:'',
        username:'',
        email:'',
        pno:'',
        eventsarr:[],
        eventusers:[],
        eventdetailsarr:[],
        isManipal:'',
        regno:'',
        college:'',
        uid:'',
        f:'',
        disabled: false,
        show: false,
        msg:''
    },
    methods:{
        display(){
            var self=this
            self.disabled = true
            var userdb=firebase.firestore().collection("users")
            var eventsdb=firebase.firestore().collection("events")
            
            userdb.where("ucode", "==", self.ucode)
            .get()
            .then(function(querySnapshot){
                self.disabled = false
                if (querySnapshot.size > 0) {
                    querySnapshot.forEach (function (doc) {
                        self.show = true

                        console.log(doc.data())
                        self.name=doc.data().name
                        self.username=doc.data().username
                        self.email=doc.data().email
                        self.pno=doc.data().pno
                        self.eventsarr = doc.data().events
                        self.uid=doc.data().uid
                        self.isManipal=doc.data().isManipal
                        if(self.isManipal){
                            self.regno=doc.data().regno
                            self.f = 1;
                        }
                        else{
                            self.college=doc.data().college
                            self.f = 0;
                        }
                    })
                } else {
                    self.show = false
                    self.msg="Invalid ucode"
                }
            },function(error){
                console.log(error.message)
            }) 
        }
    }
})