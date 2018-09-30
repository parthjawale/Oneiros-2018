new Vue({
  el: "#register-container",
  data: {
    name: "",
    college: "",
    regno: "",
    code: "",
    password: "",
    repassword: "",
    username: "",
    email: "",
    isManipal: false,
    pno: "",
    wpno: "",
    campamb: "",
    response: 0,
    phoneNos: false
  },
  methods: {
    validateOther() {
      var self = this;
      if (this.phoneNos) {
        this.wpno = this.pno;
      }
      if (
        this.college.toLowerCase() === "muj" ||
        this.college.toLowerCase() === "muj"
      ) {
        this.isManipal = true;
      }
      if (
        this.name == "" ||
        this.college == "" ||
        this.password == "" ||
        this.repassword == "" ||
        this.username == "" ||
        this.email == "" ||
        this.pno == "" ||
        this.wpno == ""
      ) {
        if (this.name == "") {
          alert("Name empty");
        } else if (this.college == "") {
          alert("College empty");
        } else if (this.password == "") {
          alert("Password empty");
        } else if (this.repassword == "") {
          alert("Password again empty");
        } else if (this.username == "") {
          alert("Username empty");
        } else if (this.email == "") {
          alert("Email empty");
        } else if (this.pno == "") {
          alert("Phone Number empty");
        } else {
          alert("Whatsapp Number empty");
        }
        return false;
      }
      if (this.password != this.repassword) {
        alert("Both passwords don't match.");
        return false;
      }
      return true;
    },
    registerOther() {
      var result = this.validateOther();
      var self = this;
      if (!result) {
        return;
      }
      firebase
        .firestore()
        .collection("users")
        .where("username", "==", self.username)
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.size > 0) {
            alert("Username already exists. Please try with another username.");
          } else {
            if (self.code != "") {
              firebase
                .firestore()
                .collection("campus_ambassadors")
                .where("referralcode", "==", self.code)
                .get()
                .then(
                  function(querySnapshot) {
                    if (querySnapshot.size > 0) {
                      querySnapshot.forEach(function(doc) {
                        firebase
                          .auth()
                          .createUserWithEmailAndPassword(
                            self.email,
                            self.password
                          )
                          .then(
                            function(user) {
                              // if (self.campamb) {
                              //   firebase.firestore
                              //     .collection("campus_ambassadors")
                              //     .doc(user.user.uid)
                              //     .set({
                              //       name: self.name,
                              //       college: self.college,
                              //       username: self.username,
                              //       email: self.email,
                              //       pno: self.pno,
                              //       wpno: self.wpno,
                              //       uid: user.user.uid,
                              //       sameNos: self.phoneNos,
                              //       referred: true
                              //     })
                              //     .catch(function(error) {
                              //       alert(error.message);
                              //     });
                              // }
                              if (
                                doc.data().users != undefined &&
                                doc.data().users != null
                              ) {
                                console.log("In 1st if block");
                                var usersArr = doc.data().users;
                                if (!usersArr.includes(user.user.uid))
                                  usersArr.push(user.user.uid);
                                firebase
                                  .firestore()
                                  .collection("campus_ambassadors")
                                  .doc(doc.id)
                                  .update({
                                    users: usersArr
                                  });
                              } else {
                                console.log("In else block");
                                var usersArr = [];
                                usersArr.push(user.user.uid);
                                firebase
                                  .firestore()
                                  .collection("campus_ambassadors")
                                  .doc(doc.id)
                                  .update({
                                    users: usersArr
                                  });
                              }
                              firebase
                                .firestore()
                                .collection("users")
                                .doc(user.user.uid)
                                .set({
                                  name: self.name,
                                  college: self.college,
                                  username: self.username,
                                  email: self.email,
                                  pno: self.pno,
                                  wpno: self.wpno,
                                  uid: user.user.uid,
                                  isManipal: self.isManipal,
                                  sameNos: self.phoneNos,
                                  referred: true,
                                  referralcode: self.code,
                                  referredUid: doc.data().uid,
                                  campamb: self.campamb
                                })
                                .then(
                                  function() {
                                    console.log("Successful");
                                  },
                                  function(error) {
                                    console.log(error.message);
                                  }
                                );
                            },
                            function(error) {
                              console.log(error.message);
                            }
                          );
                      });
                    } else {
                      alert("Referral Code not valid.");
                    }
                  },
                  function(error) {
                    alert(error.message);
                    return;
                  }
                );
            } else {
              firebase
                .auth()
                .createUserWithEmailAndPassword(self.email, self.password)
                .then(
                  function(user) {
                    firebase
                      .firestore()
                      .collection("users")
                      .doc(user.user.uid)
                      .set({
                        name: self.name,
                        college: self.college,
                        username: self.username,
                        email: self.email,
                        pno: self.pno,
                        wpno: self.wpno,
                        uid: user.user.uid,
                        isManipal: self.isManipal,
                        sameNos: self.phoneNos,
                        referred: false,
                        campamb: self.campamb
                      })
                      .then(
                        function() {
                          console.log("Successful");
                        },
                        function(error) {
                          console.log(error.message);
                        }
                      );
                  },
                  function(error) {
                    console.log(error.message);
                  }
                );
            }
          }
        });
    },
    validateManipal() {
      var self = this;
      if (this.phoneNos) {
        this.wpno = this.pno;
      }
      if (
        this.name == "" ||
        this.regno == "" ||
        this.password == "" ||
        this.repassword == "" ||
        this.username == "" ||
        this.email == "" ||
        this.pno == "" ||
        this.wpno == ""
      ) {
        if (this.name == "") {
          alert("Name empty");
        } else if (this.regno == "") {
          alert("Registration Number empty");
        } else if (this.password == "") {
          alert("Password empty");
        } else if (this.repassword == "") {
          alert("Password again empty");
        } else if (this.username == "") {
          alert("Username empty");
        } else if (this.email == "") {
          alert("Email empty");
        } else if (this.pno == "") {
          alert("Phone Number empty");
        } else {
          alert("Whatsapp Number empty");
        }
        return false;
      }
      if (this.password != this.repassword) {
        alert("Both passwords don't match.");
        return false;
      }
      return true;
    },
    registerManipal() {
      var result = this.validateManipal();
      var self = this;
      if (!result) {
        return;
      }
      console.log(result);
      firebase
        .firestore()
        .collection("users")
        .where("username", "==", self.username)
        .get()
        .then(
          function(querySnapshot) {
            console.log(querySnapshot);
            if (querySnapshot.size > 0) {
              alert(
                "Username already exists. Please try with another username."
              );
            } else {
              firebase
                .auth()
                .createUserWithEmailAndPassword(self.email, self.password)
                .then(
                  function(user) {
                    firebase
                      .firestore()
                      .collection("users")
                      .doc(user.user.uid)
                      .set({
                        name: self.name,
                        regno: self.regno,
                        username: self.username,
                        email: self.email,
                        isManipal: true,
                        pno: self.pno,
                        wpno: self.wpno,
                        sameNos: self.phoneNos
                      })
                      .then(
                        function() {
                          console.log("Successful");
                        },
                        function(error) {
                          console.log(error.message);
                        }
                      );
                  },
                  function(error) {
                    console.log(error.message);
                  }
                );
            }
          },
          function(error) {
            console.log(error);
          }
        );
    }
  }
});
