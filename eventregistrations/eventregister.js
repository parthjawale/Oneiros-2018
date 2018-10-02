new Vue({
  el: "#app",
  data: {
    name: "",
    selectedClub: "",
    eventName: "",
    value: 0,
    error: false,
    clubs: [
      {
        name: "aperture",
        events: [
          {
            name: "focus",
            price: "free",
            type: "solo"
          },
          {
            name: "shutter up",
            price: 200,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "instaperture",
            price: 100,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "show down of societies",
            price: 500,
            min: 3,
            max: 5,
            type: "fixed"
          },
          {
            name: "picture perfect",
            price: 100,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "power shoot",
            price: 100,
            min: 2,
            max: 2,
            type: "duet"
          }
        ]
      },
      {
        name: "the music club",
        events: [
          {
            name: "octaves",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "dhwani",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "beatstreet",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "saptak",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "ensemble",
            price: 800,
            min: "6 Vocalists + 1 Accompanists",
            max: "No limit",
            type: "team"
          },
          {
            name: "twice the voice",
            price: 250,
            min: 2,
            max: 2,
            type: "duet"
          },
          // { name: 'rapisody', price: 150 },
          {
            name: "woodstock",
            price: 150,
            min: 1,
            max: 3,
            type: "team"
          }
        ]
      },
      {
        name: "litmus",
        events: [
          {
            name: "bamboozled",
            price: 250,
            min: 2,
            max: 3,
            type: "fixed"
          },
          {
            name: "ekphrasis",
            price: 100,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "just a minute",
            price: 100,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "parliamentary debate",
            price: 500,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "pictionary",
            price: 150,
            min: 2,
            max: 2,
            type: "duet"
          },

          {
            name: "voice over",
            price: 150,
            min: 2,
            max: 2,
            type: "duet"
          }
        ]
      },
      {
        name: "coreofrafia",
        events: [
          {
            name: "nextar(solo and duet)",
            price: 200,
            min: 1,
            max: 2,
            type: "team"
          },
          {
            name: "showcase",
            price: 100,
            min: 1,
            max: 2,
            type: "team"
          },
          {
            name: "ground zero",
            price: 800,
            min: 4,
            max: 6,
            type: "team"
          },
          {
            name: "steps vs beats",
            price: 100,
            min: 1,
            max: 1,
            type: "solo"
          }
        ]
      },
      {
        name: "cinefilia",
        events: [
          {
            name: "ad mark",
            price: 100,
            min: 3,
            max: 5,
            type: "team"
          },
          {
            name: "awaaz",
            price: 100,
            min: 8,
            max: 20,
            type: "team"
          },
          {
            name: "humor us",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "mission improvable",
            price: 100,
            min: 4,
            max: 5,
            type: "team"
          },
          {
            name: "pandora's box",
            price: 250,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "rangmanch",
            price: 100,
            min: 4,
            max: 15,
            type: "team"
          },
          {
            name: "mono-act",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "spoofy do",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          }
        ]
      },
      {
        name: "scribbles",
        events: [
          {
            name: "Fusionoid",
            price: 100,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Trippy Tales",
            price: 200,
            min: 1,
            max: 2,
            type: "team"
          },
          {
            name: "Comicstan",
            price: 150,
            min: 1,
            max: 2,
            type: "team"
          },
          {
            name: "Junk-o-mania",
            price: 150,
            min: 1,
            max: 2,
            type: "team"
          },
          {
            name: "Art Gallery",
            price: "Free"
          }
        ]
      },
      {
        name: "shabd",
        events: [
          // { name: 'Poetry Event', price: 50 },
          // { name: 'Quiz Event', price: 150 },
          {
            name: "izhar",
            price: 50,
            min: 1,
            max: 1,
            type: "solo"
          }
        ]
      },
      {
        name: "qureka",
        events: [
          // { name: 'Pop Culture/Fantasy Quiz', price: 100 },
          {
            name: "BizTech Quiz",
            price: 100,
            min: 1,
            max: 2,
            type: "team"
          },
          {
            name: "General Quiz",
            price: 100,
            min: 1,
            max: 2,
            type: "team"
          }
        ]
      },
      {
        name: "sophia",
        events: [
          {
            name: "Let's Tweet",
            price: 200,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Talkathon",
            price: 200,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Picturation",
            price: 200,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "debate",
            price: 200,
            min: 1,
            max: 1,
            type: "solo"
          }
        ]
      },
      {
        name: "collab events",
        events: [
          {
            name: "Pop-a-razzi",
            price: 100,
            min: 1,
            max: 2,
            type: "team"
          },
          {
            name: "chakravyuh(cinefilia-shabd)",
            price: 150,
            min: 2,
            max: 5,
            type: "team"
          },
          {
            name: "song-smith(tmc-litmus)",
            price: 200,
            min: 2,
            max: 4,
            type: "team"
          }
          // {
          //   name: "debate",
          //   price: 200,
          //   min: 1,
          //   max: 1,
          //   type: "solo"
          // }
        ]
      },

      {
        name: "major events",
        events: [
          {
            name: "requiem- war of bands",
            price: 1500,
            min: 3,
            max: 8,
            type: "fixed"
          },
          {
            name: "Destival - Group Dance Competetion",
            price: 150,
            min: 12,
            max: 43,
            type: "team"
          },
          {
            name: "Fashion Show",
            price: 200,
            min: 12,
            max: 22,
            type: "team"
          }
        ]
      }
    ],
    userarr:[],
    eventarr:[],
    email:""
  },

  computed: {
    amount: function() {
      if (!this.error) {
        if (this.eventName) {
          if (this.eventName.name == "ensemble") {
            if (this.value <= 10) {
              return this.eventName.price;
            } else {
              return this.eventName.price + (this.value - 10) * 100;
            }
          } else if (this.eventName.type == "team" && this.value != 0) {
            return this.value * this.eventName.price;
          } else {
            //return the the event's fixed price if type is : solo, duet and fixed
            return this.eventName.price;
          }
        } else {
          return 0;
        }
      } else {
        return "Not Applicable";
      }
    },
    getParticipants: function() {
      const type = this.eventName.type;
      return type === "team" || type === "fixed" ? true : false;
    }
  },
  watch: {
    value: function() {
      this.check();
    },
    name: function() {
      this.check();
    }
  },
  methods: {
    changeclub() {
      this.eventName = "";
      this.error = false;
      this.value = 0;
    },
    changevent() {
      this.error = false;
      this.value = this.eventName.name != "ensemble" ? this.eventName.min : 7;
    },
    check() {
      const eventType = this.eventName.type;
      const min = this.eventName.min;
      const max = this.eventName.max;

      // if (!this.name) {
      //     return this.error = true
      // }

      if (this.eventName.name == "ensemble") {
        return;
      }

      if (eventType == "team" || eventType == "fixed") {
        if (this.value >= min && this.value <= max) {
          this.error = false;
        } else {
          this.error = true;
        }
      }
    },
    submit() {
      console.log("method chala")
      var self=this
      var userdb=firebase.firestore().collection('users')
      var eventdb=firebase.firestore().collection('events')
      console.log(self.eventName)
      eventdb.doc(self.eventName.name)
      .get()
      .then(function (doc) {
          if (doc.exists) {
              if (doc.data().users != undefined || doc.data().users != null)
                  self.userarr = doc.data().users
              if (!self.userarr.includes("JGPUrYgmhFRoFjV7hSblfb4zxHG2")) {
                self.userarr.push("JGPUrYgmhFRoFjV7hSblfb4zxHG2")
              }
              eventdb.doc(self.eventName.name).update({
                  users:self.userarr
              })
              userdb.doc("JGPUrYgmhFRoFjV7hSblfb4zxHG2")
              .get()
              .then(function (doc) {
                  if (doc.data().events != undefined || doc.data().events != null)
                      self.eventarr = doc.data().events
                  if (!self.eventarr.includes(self.eventName.name))
                      self.eventarr.push(self.eventName.name)
                  userdb.doc("JGPUrYgmhFRoFjV7hSblfb4zxHG2").update({
                      events: self.eventarr
                  })
                  .then(function () {
                      alert('HO GAYA')
                  })

                  userdb.doc("JGPUrYgmhFRoFjV7hSblfb4zxHG2")
                  .get()
                  .then(function(doc){  
                    if(doc.exists){
                      self.email = doc.data().email,
                      self.name = doc.data().name                

                      body = {

                        email: self.email,
                        message: "Thank you for registering for "+self.eventName.name,
                        name: self.name
                      };
                      fetch("/mail/checkMail.php", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify(body)
                      })
                        .then(res => {
                          return res.json();
                        })
                        .then(response => {
                          if (response.code === 200) {
                            self.mujerror = "We'll get back to you!";
                          } else if (response.code === 405) {
                            self.mujerror = "Fields cant be empty!";
                          } else if (response.code === 406) {
                            self.mujerror = "Invalid E-Mail";
                          }
                        });
                    }
                  })
              })
          }
      }, function (error) {
        alert(error.message)
      })
    }
  },
  
});
