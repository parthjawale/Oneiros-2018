new Vue({
  el: "#app",
  data: {
    selectedClub: "",
    eventName: "",
    value: 0,
    user: null,
    error: false,
    disabled: false,
    requiem: {
      bandname: "",
      description: "",
      contact: null,
      songdew: "",
      link: "",
      genre: ""
    },
    destival: {
      teamname: "",
      links: ""
    },
    fashionshow: {
      teamname: ""
    },
    clubs,
    userarr: [],
    eventarr: [],
    clubs,
    email: ""
  },
  created() {
    var self = this;
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          self.user = user;
          console.log(user);
        } else {
          // alert('Please register yourself first.')
          // window.location = '/register'
        }
      },
      function(error) {
        console.log(error);
      }
    );
  },
  computed: {
    amount: function() {
      if (!this.error) {
        if (this.eventName) {
          if (this.eventName.name == "Ensemble") {
            if (this.value >= 7 && this.value <= 10) {
              return this.eventName.price;
            } else if (this.value > 10) {
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
    },
    requiemSelected: function() {
      return this.eventName.name == "Requiem - War Of Bands";
    },
    destivalSelected: function() {
      return this.eventName.name == "Destival - Group Dance Competition";
    },
    fashionshowSelected: function() {
      return this.eventName.name == "Kairos - Fashion Show";
    }
  },
  watch: {
    value: function() {
      this.check();
    }
  },
  methods: {
    jsUcfirst: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    changeclub() {
      this.eventName = "";
      this.error = false;
      this.value = 0;
    },
    changevent() {
      this.error = false;
      this.value = this.eventName.name != "Ensemble" ? this.eventName.min : 7;
      this.check();
    },
    check() {
      const eventType = this.eventName.type;
      const min = this.eventName.min;
      const max = this.eventName.max;

      if (this.eventName.name == "Ensemble") {
        return;
      }
      if (eventType == "solo") this.value = 1;
      if (eventType == "duet") this.value = 2;
      if (eventType == "team" || eventType == "fixed") {
        if (this.value >= min && this.value <= max) {
          this.error = false;
        } else {
          this.error = true;
        }
      }

      if (
        this.requiemSelected ||
        this.destivalSelected ||
        this.fashionshowSelected
      ) {
        var event;
        if (this.requiemSelected) event = this.requiem;
        else if (this.requiemSelected) event = this.destival;
        else event = this.fashionshow;
        var error = false;
        const keys = Object.keys(event);
        keys.forEach(key => {
          if (!event[key]) {
            error = true;
          }
        });
        this.error = error;
        if (!(this.value >= min && this.value <= max)) {
          this.error = true;
        }
      }
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          window.location = "/eventregistrations.html";
        })
        .catch(function(error) {
          alert(error.message);
        });
    },
    submit() {
      var self = this;
      console.log(this.eventName);
      console.log(this.selectedClub);
      console.log(this.user);
      self.disabled = true;
      var userdb = firebase.firestore().collection("users");
      var eventdb = firebase.firestore().collection("events");
      eventdb
        .doc(self.eventName.name)
        .get()
        .then(
          function(doc) {
            if (doc.exists) {
              if (doc.data().users != undefined || doc.data().users != null)
                self.userarr = doc.data().users;
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
                };
              } else if (self.destivalSelected) {
                obj = {
                  user: self.user.uid,
                  value: self.value,
                  teamName: self.destival.teamname,
                  links: self.destival.links
                };
              } else if (self.fashionshowSelected) {
                obj = {
                  user: self.user.uid,
                  value: self.value,
                  teamName: self.fashionshow.teamname
                };
              } else {
                obj = {
                  user: self.user.uid,
                  value: self.value
                };
              }
              var found = self.userarr.some(function(el) {
                return el.user === self.user.uid;
              });
              if (!found) {
                self.userarr.push(obj);
              } else {
                self.disabled = false;
                alert("You've already registered.");
                return;
              }
              eventdb.doc(self.eventName.name).update({
                users: self.userarr
              });
              userdb
                .doc(self.user.uid)
                .get()
                .then(function(doc) {
                  if (
                    doc.data().events != undefined ||
                    doc.data().events != null
                  )
                    self.eventarr = doc.data().events;
                  if (!self.eventarr.includes(self.eventName.name))
                    self.eventarr.push(self.eventName.name);
                  userdb
                    .doc(self.user.uid)
                    .update({
                      events: self.eventarr
                    })
                    .then(function() {
                      alert(
                        "Thank you for registering for " +
                          self.eventName.name +
                          ". Your unique code is: " +
                          doc.data().ucode +
                          ". Please refer to the mail for further instructions."
                      );
                      userdb
                        .doc(self.user.uid)
                        .get()
<<<<<<< HEAD
                        .then(function (doc) {
                          if (doc.exists) {
                            ;
                            (self.email = doc.data().email),
                              (self.name = doc.data().name)
=======
                        .then(function(doc) {
                          if (doc.exists) {
                            (self.email = doc.data().email),
                              (self.name = doc.data().name);
>>>>>>> d8a4fdf63675c49ce48727ac74373c61e850910f
                            body = {
                              email: self.email,
                              message:
                                "Thank you for registering for " +
                                self.eventName.name +
                                ". <br>Your unique code is " +
                                doc.data().ucode +
                                ".<br>Payment instructions will be sent soon.",
                              name: self.name
<<<<<<< HEAD
                            }
                            fetch('/mail/checkMail.php', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json'
=======
                            };
                            fetch("/mail/checkMail.php", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json"
>>>>>>> d8a4fdf63675c49ce48727ac74373c61e850910f
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
                                // self.clear();
                              });
                            self.disabled = false;
                          }
                        });
                    });
                });
            }
          },
          function(error) {
            alert(error.message);
            self.disabled = false;
          }
        );
    },
    clear() {
      self.selectedClub = "";
      self.eventName = "";
      self.disable = false;
    }
  }
<<<<<<< HEAD
})
=======
});
>>>>>>> d8a4fdf63675c49ce48727ac74373c61e850910f
