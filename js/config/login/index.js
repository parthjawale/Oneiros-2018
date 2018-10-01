new Vue({
  el: "#login",
  data: {
    username: "",
    password: "",
    userexists: false,
    disabled: false,
    error: ""
  },
  methods: {
    getArray(array) {
      if (array) {
        const arr = [];
        for (const key in array.docs) {
          arr.push({
            key: array.docs[key].data(),
            id: array.docs[key].id
          });
        }
        return arr;
      }
    },
    login() {
      if (this.username != "" && this.password != "") {
        var self = this;
        self.disabled = true;
        var email;
        firebase
          .firestore()
          .collection("users")
          .where("username", "==", self.username)
          .get()
          .then(
            function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                email = doc.data().email;
              });
              firebase
                .auth()
                .signInWithEmailAndPassword(email, self.password)
                .then(
                  function(user) {
                    self.error = "Login Successful!";
                    self.disabled = false;
                    setTimeout(() => {
                      window.location = "/";
                    }, 1500);
                  },
                  function(error) {
                    self.error = error.message;
                    self.disabled = false;
                  }
                );
            },
            function(error) {
              self.error = error.message;
              self.disabled = false;
            }
          );
      }
    }
  }
});
