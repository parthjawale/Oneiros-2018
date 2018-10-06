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
        f:''
    },
    methods:{
        display(){
            var self=this
            var userdb=firebase.firestore().collection("users")
            var eventsdb=firebase.firestore().collection("events")
            
            userdb.where("ucode", "==", self.ucode)
            .get()
            .then(function(querySnapshot){
                querySnapshot.forEach (function (doc) {
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
                    }
                    else{
                        self.college=doc.data().college
                    }

                })
            },function(error){
                console.log(error.message)
            }) 



            // for(i=0;i<eventsarr.length;i++){
            //     eventsdb.doc(eventsarr[i].event)
            //     .get()
            //     .then(function(doc){
                    
            //     })
            // }


            // eventsdb.doc(eventsarr)
            // .get()
            // .then(function(doc){
            //     self.eventusers=doc.data().users
            //     for(i=0;i<self.eventusers.length;i++){
            //         if(self.eventusers[i].user==self.uid){
            //             f=1;
            //         }
            //     }
            //     if(f){
            //         eventdetailsarr[i]=self.eventusers[i]
            //     }
            // })
        }
    }
})