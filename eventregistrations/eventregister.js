new Vue({
  el: "#app",
  data: {
    name: "",
    selectedClub: "",
    eventName: "",
    value: 0,
    user: null,
    error: true,
    disabled: false,
    requiem: {
      bandname: "",
      description: "",
      contact: null,
      links: "",
      songdew: "",
      genre: ""
    },
    destival: {
      teamname: "",
      link: ""
    },
    clubs,
    userarr: [],
    eventarr: [],
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
          // window.location = "/register";
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
          if (this.eventName.name == "ensemble") {
            if (this.value <= 10) {
              return this.eventName.price;
            } else {
              return this.eventName.price + (this.value - 10) * 100;
            }
          } else if (this.eventName.type == "team" && this.value != 0) {
            return this.value * this.eventName.price;
          } else {
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
    validate() {
      var self = this;
      if (self.selectedClub.name == "Major Events") {
        if (self.eventName.name == "Requiem - War Of Bands") {
          if (
            self.requiem.bandname == "" ||
            self.description == "" ||
            self.contact == null ||
            self.links == "" ||
            self.songdew == "" ||
            self.genre == ""
          ) {
            return false;
          } else {
            return true;
          }
        } else if (
          self.eventName.name == "Destival - Group Dance Competition"
        ) {
          if (self.destival.teamname == "" || self.destival.link == "") {
            return false;
          } else {
            return true;
          }
        }
      }
    }
  },
  watch: {
    value: function() {
      this.check();
    },
    name: function() {
      this.check();
    }
    // validate: function(val) {
    //   console.log(val);
    //   if (!val) this.error = true;
    //   else this.error = false;
    // }
  },
  methods: {
    jsUcfirst: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    changeclub() {
      this.eventName = "";
      // if (this.selectedClub.name == "Major Events") {
      //   this.error = true;
      // } else {
      //   this.error = false;
      // }
      this.value = 0;
    },
    changevent() {
      console.log(this.selectedClub.name);
      // this.error = false;
      if (this.selectedClub.name == "Major Events") {
        this.error = true;
      } else {
        this.error = false;
      }
      if (this.selectedClub.name == "Major Events") {
        this.value = 0;
      } else {
        this.value = this.eventName.name != "ensemble" ? this.eventName.min : 7;
      }
    },
    check() {
      const eventType = this.eventName.type;
      const min = this.eventName.min;
      const max = this.eventName.max;
      var self = this;
      if (this.eventName.name == "ensemble") {
        return;
      }
      if (this.selectedClub.name == "Major Events") {
        if (this.validate) {
          if (this.value >= min && this.value <= max) {
            this.error = false;
          } else {
            this.error = true;
          }
        } else {
          this.error = true;
        }
      } else {
        if (eventType == "team" || eventType == "fixed") {
          if (this.value >= min && this.value <= max) {
            this.error = false;
          } else {
            this.error = true;
          }
        }
      }
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          window.location = "/index.html";
        })
        .catch(function(error) {
          alert(error.message);
        });
    },
    requiemCheck() {
      for (let key in this.requiem) {
        console.log(this.requiem[key]);
        if (this.requiem[key] == "") {
          this.error = true;
          return;
        }
        this.error = false;
      }
    },
    destivalCheck() {
      for (let key in this.destival) {
        console.log(this.destival[key]);
        if (this.destival[key] == "") {
          this.error = true;
          return;
        }
        this.error = false;
      }
    },
    submit() {
      var self = this;
      self.disabled = true;
      var userdb = firebase.firestore().collection("users");
      var eventdb = firebase.firestore().collection("events");
      if (self.selectedClub.name == "Major Events") {
        eventdb
          .doc(self.eventName.name)
          .get()
          .then(
            function(doc) {
              if (doc.exists) {
                if (doc.data().users != undefined || doc.data().users != null)
                  self.userarr = doc.data().users;
                // if (!self.userarr.includes(self.user.uid)) {
                //   self.userarr.push(self.user.uid);
                // }
                var obj;
                if (self.eventName.name == "Requiem - War Of Bands") {
                  obj = {
                    user: self.user.uid,
                    value: self.value,
                    bandName: self.requiem.bandname,
                    description: self.requiem.description,
                    contact: self.requiem.contact,
                    links: self.requiem.links,
                    songdewlink: self.requiem.songdew,
                    genre: self.requiem.genre
                  };
                } else if (
                  self.eventName.name == "Destival - Group Dance Competition"
                ) {
                  obj = {
                    user: self.user.uid,
                    value: self.value,
                    teamName: self.destival.teamname,
                    links: self.destival.links
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
                          .then(function(doc) {
                            if (doc.exists) {
                              (self.email = doc.data().email),
                                (self.name = doc.data().name);
                              body = {
                                email: self.email,
                                message:
                                  "Thank you for registering for " +
                                  self.eventName.name +
                                  ". <br>Your unique code is " +
                                  doc.data().ucode +
                                  ".<br>Payment instructions will be sent soon.",
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
                                  // self.clear();
                                  self.disabled = false;
                                });
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
      } else {
        eventdb
          .doc(self.eventName.name)
          .get()
          .then(
            function(doc) {
              if (doc.exists) {
                if (doc.data().users != undefined || doc.data().users != null)
                  self.userarr = doc.data().users;
                if (!self.userarr.includes(self.user.uid)) {
                  self.userarr.push(self.user.uid);
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
                          .then(function(doc) {
                            if (doc.exists) {
                              (self.email = doc.data().email),
                                (self.name = doc.data().name);
                              body = {
                                email: self.email,
                                message:
                                  "Thank you for registering for " +
                                  self.eventName.name +
                                  ". <br>Your unique code is " +
                                  doc.data().ucode +
                                  ".<br>Payment instructions will be sent soon.",
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
                                  // self.clear();
                                  self.disabled = false;
                                });
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
      }
    },
    clear() {
      self.selectedClub = "";
      self.eventName = "";
      self.disable = false;
    }
  }
});
