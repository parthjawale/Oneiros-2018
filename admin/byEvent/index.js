new Vue({
  el: "#admin-events",
  data: {
    clubs,
    selectedClub: "",
    selectedEvent: "",
    usersarr: [],
    namearr: [],
    disabled: false
  },
  methods: {
    changeclub() {
      this.selectedEvent = "";
    },
    display() {
      var self = this;
      self.disabled = true;
      firebase
        .firestore()
        .collection("events")
        .doc(self.selectedEvent.name)
        .get()
        .then(function(doc) {
          self.usersarr = doc.data().users;
          self.disabled = false;
        });
    }
  }
});
