new Vue({
  el: '#app',
  data: {
    selectedClub: '',
    eventName: '',
    value: 0,
    user: null,
    error: false,
<<<<<<< HEAD
    clubs: [
      {
        name: "Aperture",
        events: [
          {
            name: "FOCUS",
            price: "Free",
            type: "solo"
          },
          {
            name: "Shutter Up",
            price: 200,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "InstAperture",
            price: 100,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Show Down Of Societies",
            price: 500,
            min: 3,
            max: 5,
            type: "fixed"
          },
          {
            name: "Picture Perfect",
            price: 100,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Power Shoot",
            price: 100,
            min: 2,
            max: 2,
            type: "duet"
          }
        ]
      },
      {
        name: "The Music Club",
        events: [
          {
            name: "Octaves",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Dhwani",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "BeatStreet",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Saptak",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Ensemble",
            price: 800,
            min: 7,
            max: 1000,
            type: "team"
          },
          {
            name: "Twice The Voice",
            price: 250,
            min: 2,
            max: 2,
            type: "duet"
          },
          // { name: 'rapisody', price: 150 },
          {
            name: "Woodstock",
            price: 150,
            min: 1,
            max: 3,
            type: "team"
          }
        ]
      },
      {
        name: "Litmus",
        events: [
          {
            name: "Bamboozled",
            price: 250,
            min: 2,
            max: 3,
            type: "fixed"
          },
          {
            name: "Ekphrasis",
            price: 100,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Just A Minute",
            price: 100,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "British Parliamentary Debate",
            price: 500,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Pictionary",
            price: 150,
            min: 2,
            max: 2,
            type: "duet"
          },

          {
            name: "Voice Over",
            price: 150,
            min: 2,
            max: 2,
            type: "duet"
          }
        ]
      },
      {
        name: "Coreofrafia",
        events: [
          {
            name: "Nextar",
            price: 200,
            min: 1,
            max: 2,
            type: "team"
          },
          {
            name: "Showcase",
            price: 100,
            min: 1,
            max: 2,
            type: "team"
          },
          {
            name: "Ground Zero",
            price: 800,
            min: 4,
            max: 6,
            type: "team"
          },
          {
            name: "Steps Vs Beats",
            price: 100,
            min: 1,
            max: 1,
            type: "solo"
          }
        ]
      },
      {
        name: "Cinefilia",
        events: [
          {
            name: "AD Mak",
            price: 100,
            min: 3,
            max: 5,
            type: "team"
          },
          {
            name: "Awaaz",
            price: 100,
            min: 8,
            max: 20,
            type: "team"
          },
          {
            name: "Humor Us",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Mission Improvable",
            price: 100,
            min: 4,
            max: 5,
            type: "team"
          },
          {
            name: "Pandora's Box",
            price: 250,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Rangmanch",
            price: 100,
            min: 4,
            max: 15,
            type: "team"
          },
          {
            name: "Mono-Act",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Spoofy Do",
            price: 150,
            min: 1,
            max: 1,
            type: "solo"
          }
        ]
      },
      {
        name: "Scribbles",
        events: [
          {
            name: "Fusionoid",
            price: 100,
            min: 1,
            max: 1,
            type: "solo"
          },
          {
            name: "Trippy Tiles",
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
            name: "Junk-O-Mania",
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
        name: "Shabd",
        events: [
          // { name: 'Poetry Event', price: 50 },
          // { name: 'Quiz Event', price: 150 },
          {
            name: "Izhar",
            price: 50,
            min: 1,
            max: 1,
            type: "solo"
          }
        ]
      },
      {
        name: "Qureka",
        events: [
          // { name: 'Pop Culture/Fantasy Quiz', price: 100 },
          {
            name: "BizTech Quiz(Ignited Minds)",
            price: 100,
            min: 1,
            max: 2,
            type: "team"
          },
          {
            name: "General Quiz(Sadharan)",
            price: 100,
            min: 1,
            max: 2,
            type: "team"
          }
        ]
      },
      {
        name: "Sophia",
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
            name: "Debate",
            price: 200,
            min: 1,
            max: 1,
            type: "solo"
          }
        ]
      },
      {
        name: "Collab Events",
        events: [
          {
            name: "Pop-a-razzi(Litmus-Qureka)",
            price: 100,
            min: 1,
            max: 2,
            type: "team"
          },
          {
            name: "Chakravyuh(Cinefilia-Shabd)",
            price: 150,
            min: 2,
            max: 5,
            type: "team"
          },
          {
            name: "Song-Smith(TMC-Litmus)",
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
        name: "Major Events",
        events: [
          {
            name: "Requiem - War Of Bands",
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
            name: "Kairos - Fashion Show",
            price: 200,
            min: 12,
            max: 22,
            type: "team"
          }
        ]
      }
    ],
    userarr: [],
    eventarr: [],
    email: ""
=======
    disabled: false,
    requiem: {
      bandname: '',
      description: '',
      contact: null,
      songdew: '',
      link: '',
      genre: ''
    },
    destival: {
      teamname: '',
      links: ''
    },
    clubs,
    userarr: [],
    eventarr: [],
    clubs,
    email: ''
  },
  created() {
    var self = this
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          self.user = user
          console.log(user)
        } else {
          // alert('Please register yourself first.')
          // window.location = '/register'
        }
      },
      function (error) {
        console.log(error)
      }
    )
>>>>>>> 1ca448589ab760a377ba43bd0427102446118673
  },
  computed: {
    amount: function () {
      if (!this.error) {
        if (this.eventName) {
<<<<<<< HEAD
          if (this.eventName.name == "Ensemble") {

            if (this.value >= 7 && this.value <= 10) {
              return this.eventName.price;
            } else if (this.value > 10) {
              return this.eventName.price + (this.value - 10) * 100;
            }

          } else if (this.eventName.type == "team" && this.value != 0) {
            return this.value * this.eventName.price;
=======
          if (this.eventName.name == 'Ensemble') {
            if (this.value >= 7 && this.value <= 10) {
              return this.eventName.price
            } else if (this.value > 10) {
              return this.eventName.price + (this.value - 10) * 100
            }
          } else if (this.eventName.type == 'team' && this.value != 0) {
            return this.value * this.eventName.price
>>>>>>> 1ca448589ab760a377ba43bd0427102446118673
          } else {
            //return the the event's fixed price if type is : solo, duet and fixed
            return this.eventName.price
          }
        } else {
          return 0
        }
      } else {
        return 'Not Applicable'
      }
    },
    getParticipants: function () {
<<<<<<< HEAD
      const type = this.eventName.type;
      return type === "team" || type === "fixed" ? true : false;
=======
      const type = this.eventName.type
      return type === 'team' || type === 'fixed' ? true : false
    },
    requiemSelected: function () {
      return this.eventName.name == 'Requiem - War Of Bands'
    },
    destivalSelected: function () {
      return this.eventName.name == 'Destival - Group Dance Competition'
>>>>>>> 1ca448589ab760a377ba43bd0427102446118673
    }
  },
  watch: {
    value: function () {
<<<<<<< HEAD
      this.check();
    },
    name: function () {
      this.check();
=======
      this.check()
>>>>>>> 1ca448589ab760a377ba43bd0427102446118673
    }
  },
  methods: {
    jsUcfirst: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    changeclub() {
      this.eventName = ''
      this.error = false
      this.value = 0
    },
    changevent() {
<<<<<<< HEAD
      this.error = false;
      this.value = this.eventName.name != "Ensemble" ? this.eventName.min : 7;
=======
      this.error = false
      this.value = this.eventName.name != 'Ensemble' ? this.eventName.min : 7
      this.check()
>>>>>>> 1ca448589ab760a377ba43bd0427102446118673
    },
    check() {
      const eventType = this.eventName.type
      const min = this.eventName.min
      const max = this.eventName.max

<<<<<<< HEAD
      // if (!this.name) {
      //     return this.error = true
      // }

      // if (this.eventName.name == "Ensemble") {
      //   return;
      // }

      if (eventType == "team" || eventType == "fixed") {
=======
      if (this.eventName.name == 'Ensemble') {
        return
      }
      if (eventType == 'solo') this.value = 1
      if (eventType == 'duet') this.value = 2
      if (eventType == 'team' || eventType == 'fixed') {
>>>>>>> 1ca448589ab760a377ba43bd0427102446118673
        if (this.value >= min && this.value <= max) {
          this.error = false
        } else {
          this.error = true
        }
      }

      if (this.requiemSelected || this.destivalSelected) {
        const event = this.requiemSelected ? this.requiem : this.destival
        var error = false
        const keys = Object.keys(event)
        keys.forEach(key => {
          if (!event[key]) {
            error = true
          }
        })
        this.error = error
        if (!(this.value >= min && this.value <= max)) {
          this.error = true
        }
      }
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function () {
          window.location = '/eventregistrations.html'
        })
        .catch(function (error) {
          alert(error.message)
        })
    },
    submit() {
      var self = this
<<<<<<< HEAD
      var userdb = firebase.firestore().collection('users')
      var eventdb = firebase.firestore().collection('events')
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
              users: self.userarr
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
                  .then(function (doc) {
                    if (doc.exists) {
                      self.email = doc.data().email,
                        self.name = doc.data().name

                      body = {

                        email: self.email,
                        message: "Thank you for registering for " + self.eventName.name,
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
=======
      console.log(this.eventName)
      console.log(this.selectedClub)
      console.log(this.user)
      self.disabled = true
      var userdb = firebase.firestore().collection('users')
      var eventdb = firebase.firestore().collection('events')
      eventdb
        .doc(self.eventName.name)
        .get()
        .then(
          function (doc) {
            if (doc.exists) {
              if (doc.data().users != undefined || doc.data().users != null)
                self.userarr = doc.data().users
              var obj = {};
              if (self.requiemSelected) {
                obj = {
                  user: self.user.uid,
                  value: self.value,
                  bandName: self.requiem.bandname,
                  description: self.requiem.description,
                  contact: self.requiem.contact,
                  songdewLink: self.requiem.songdew,
                  videoLink: self.requiem.link,
                  genre: self.requiem.genre
                }
              } else if (self.destivalSelected) {
                obj = {
                  user: self.user.uid,
                  value: self.value,
                  teamName: self.destival.teamname,
                  links: self.destival.links
                }
              } else {
                obj = {
                  user: self.user.uid,
                  value: self.value
                }
              }
              var found = self.userarr.some(function (el) {
                return el.user === self.user.uid
              })
              if (!found) {
                self.userarr.push(obj)
              } else {
                self.disabled = false
                alert("You've already registered.")
                return;
              }
              eventdb.doc(self.eventName.name).update({
                users: self.userarr
              })
              userdb
                .doc(self.user.uid)
                .get()
                .then(function (doc) {
                  if (
                    doc.data().events != undefined ||
                    doc.data().events != null
                  )
                    self.eventarr = doc.data().events
                  if (!self.eventarr.includes(self.eventName.name))
                    self.eventarr.push(self.eventName.name)
                  userdb
                    .doc(self.user.uid)
                    .update({
                      events: self.eventarr
                    })
                    .then(function () {
                      alert(
                        'Thank you for registering for ' +
                        self.eventName.name +
                        '. Your unique code is: ' +
                        doc.data().ucode +
                        '. Please refer to the mail for further instructions.'
                      )
                      userdb
                        .doc(self.user.uid)
                        .get()
                        .then(function (doc) {
                          if (doc.exists) {;
                            (self.email = doc.data().email),
                            (self.name = doc.data().name)
                            body = {
                              email: self.email,
                              message: 'Thank you for registering for ' +
                                self.eventName.name +
                                '. <br>Your unique code is ' +
                                doc.data().ucode +
                                '.<br>Payment instructions will be sent soon.',
                              name: self.name
                            }
                            fetch('/mail/checkMail.php', {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(body)
                              })
                              .then(res => {
                                return res.json()
                              })
                              .then(response => {
                                if (response.code === 200) {
                                  self.mujerror = "We'll get back to you!"
                                } else if (response.code === 405) {
                                  self.mujerror = 'Fields cant be empty!'
                                } else if (response.code === 406) {
                                  self.mujerror = 'Invalid E-Mail'
                                }
                                // self.clear();
                              })
                            self.disabled = false
>>>>>>> 1ca448589ab760a377ba43bd0427102446118673
                          }
                        })
                    })
                })
            }
          },
          function (error) {
            alert(error.message)
            self.disabled = false
          }
<<<<<<< HEAD
        }, function (error) {
          alert(error.message)
        })
    }
  },

});
=======
        )
    },
    clear() {
      self.selectedClub = ''
      self.eventName = ''
      self.disable = false
    }
  }
})
>>>>>>> 1ca448589ab760a377ba43bd0427102446118673
