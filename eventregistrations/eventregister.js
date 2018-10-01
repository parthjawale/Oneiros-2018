new Vue({
  el: '#app',
  data: {
    name: '',
    selectedClub: '',
    eventName: '',
    value: 0,
    user: null,
    error: false,
    disabled: false,
    requiem: {
      bandname: '',
      members: null,
      description: '',
      contact: null,
      links: '',
      songdew: '',
      genre: ''
    },
    destival: {
      teamname: '',
      link: '',
      members: 0
    },
    clubs,
    userarr: [],
    eventarr: [],
    email: ''
  },
  created() {
    var self = this
    console.log('./events.json')
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          self.user = user
          console.log(user)
        } else {
          // alert('Please register yourself first.')
          // window.location = "/register";
        }
      },
      function(error) {
        console.log(error)
      }
    )
  },
  computed: {
    amount: function() {
      if (!this.error) {
        if (this.eventName) {
          if (this.eventName.name == 'ensemble') {
            if (this.value <= 10) {
              return this.eventName.price
            } else {
              return this.eventName.price + (this.value - 10) * 100
            }
          } else if (this.eventName.type == 'team' && this.value != 0) {
            return this.value * this.eventName.price
          } else {
            return this.eventName.price
          }
        } else {
          return 0
        }
      } else {
        return 'Not Applicable'
      }
    },
    getParticipants: function() {
      const type = this.eventName.type
      return type === 'team' || type === 'fixed' ? true : false
    },
    requemSelected: function() {
      return this.eventName.name == 'Requiem - War Of Bands'
    },
    destivalSelected: function() {
      return this.eventName.name == 'Destival - Group Dance Competetion'
    }
  },
  watch: {
    value: function() {
      this.check()
    },
    name: function() {
      this.check()
    }
  },
  methods: {
    jsUcfirst: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    changeclub() {
      this.eventName = ''
      this.error = false
      this.value = 0
    },
    changevent() {
      this.error = false
      this.value = this.eventName.name != 'ensemble' ? this.eventName.min : 7
    },
    check() {
      const eventType = this.eventName.type
      const min = this.eventName.min
      const max = this.eventName.max

      if (this.eventName.name == 'ensemble') {
        return
      }

      if (eventType == 'team' || eventType == 'fixed') {
        if (this.value >= min && this.value <= max) {
          this.error = false
        } else {
          this.error = true
        }
      }
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          window.location = '/index.html'
        })
        .catch(function(error) {
          alert(error.message)
        })
    },
    submit() {
      var self = this
      self.disabled = true
      var userdb = firebase.firestore().collection('users')
      var eventdb = firebase.firestore().collection('events')
      eventdb
        .doc(self.eventName.name)
        .get()
        .then(
          function(doc) {
            if (doc.exists) {
              if (doc.data().users != undefined || doc.data().users != null)
                self.userarr = doc.data().users
              if (!self.userarr.includes(self.user.uid)) {
                self.userarr.push(self.user.uid)
              }
              eventdb.doc(self.eventName.name).update({
                users: self.userarr
              })
              userdb
                .doc(self.user.uid)
                .get()
                .then(function(doc) {
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
                    .then(function() {
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
                        .then(function(doc) {
                          if (doc.exists) {
                            ;(self.email = doc.data().email),
                              (self.name = doc.data().name)
                            body = {
                              email: self.email,
                              message:
                                'Thank you for registering for ' +
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
                                self.disabled = false
                              })
                          }
                        })
                    })
                })
            }
          },
          function(error) {
            alert(error.message)
            self.disabled = false
          }
        )
    },
    clear() {
      self.selectedClub = ''
      self.eventName = ''
      self.disable = false
    }
  }
})
