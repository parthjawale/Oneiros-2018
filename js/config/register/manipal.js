new Vue({
  el: '#register',
  data: {
    name: '',
    regno: '',
    password: '',
    repassword: '',
    username: '',
    email: '',
    pno: '',
    wpno: '',
    phoneNos: false
  },
  methods: {
    validate () {
      if (this.phoneNos) {
        this.wpno = this.pno
      }
      if (this.name == '' || this.regno == '' || this.password == '' || this.repassword == '' || this.username == ''
      || this.email == '' || this.pno == '' || this.wpno == '') {
        if (this.name == '') {
          alert('Name empty');
        }
        else if (this.regno == '') {
          alert('Registration Number empty');
        }
        else if (this.password == '') {
          alert('Password empty');
        }
        else if (this.repassword == '') {
          alert('Password again empty');
        }
        else if (this.username == '') {
          alert('Username empty');
        }
        else if (this.email == '') {
          alert('Email empty');
        }
        else if (this.pno == '')  {
          alert('Phone Number empty');
        }
        else {
          alert('Whatsapp Number empty');
        }
        return false;
      }
      if (this.password != this.repassword) {
        alert('Both passwords don\'t match.');
        return false;
      }
      firebase.firestore().collection('users').where('username', '==', this.username)
      .get()
      .then(function (querySnapshot) {
        if (querySnapshot.size > 0) {
          alert('Username already exists. Please try with another username.');
          return false
        } else {
          return true
        }
      })
    },
    register () {
      var result = this.validate()
      var self = this
      if (!result) {
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(function (user) {
        firebase.firestore().collection('users').doc(user.user.uid).set({
          name: self.name,
          regno: self.regno,
          username: self.username,
          email: self.email,
          isManipal: true,
          pno: self.pno,
          wpno: self.wpno,
          sameNos: self.phoneNos
        })
        .then(function () {
          console.log('Successful')
        }, function (error) {
          console.log(error.message)
        })
      }, function (error) {
        console.log(error.message)
      })
    }
  }
})