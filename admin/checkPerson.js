$(document).ready(function() {
  $("body").css("display", "none");
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then(function(doc) {
          if (
            doc.data().admin == undefined ||
            doc.data().admin == null ||
            !doc.data().admin
          )
            window.location = "/";
          else $("body").css("display", "initial");
        });
    } else {
      window.location = "/";
    }
  });
});
