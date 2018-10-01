new Vue({
  el: "#login",
  data: {
    username: "",
    password: "",
    userexists: false
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
                    alert("You're already logged in.");
                    window.location = "/eventregistrations";
                  },
                  function(error) {
                    alert(error.message);
                  }
                );
            },
            function(error) {
              alert(error.message);
            }
          );
      }
    }
  },
  created() {
    var self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location = "/eventregistrations";
        self.userexists = true;
      }
    });
  }
});
