new Vue({
  el: '#register',
  data: {
    name: '',
    college: '',
    code: '',
    password: '',
    repassword: '',
    username: '',
    email: '',
    isManipal: false,
    pno: '',
    wpno: '',
    phoneNos: false
  },
  methods: {
    validate () {
      if (this.phoneNos) {
        this.wpno = this.pno
      }
      if (this.college.toLowerCase() === 'muj' || this.college.toLowerCase() === 'muj') {
        this.isManipal = true
      }
      if (this.name == '' || this.college == '' || this.password == '' || this.repassword == '' || this.username == ''
      || this.email == '' || this.pno == '' || this.wpno == '') {
        if (this.name == '') {
          alert('Name empty');
        }
        else if (this.college == '') {
          alert('College empty');
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
        }
      })
      return true
    },
    register () {
      var result = this.validate()
      var self = this
      if (!result) {
        return
      }
      firebase.firestore().collection('campus_ambassadors').where('referralcode', '==', self.code)
      .get()
      .then(function (querySnapshot) {
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(function (doc) {
            firebase.auth().createUserWithEmailAndPassword(self.email, self.password)
            .then(function (user) {
              firebase.firestore().collection('users').doc(user.user.uid).set({
                name: self.name,
                college: self.college,
                username: self.username,
                email: self.email,
                pno: self.pno,
                wpno: self.wpno,
                uid: user.user.uid,
                isManipal: self.isManipal,
                sameNos: self.phoneNos,
                referralcode: self.code,
                referredUid: doc.data().uid
              })
              .then(function () {
                console.log('Successful')
              }, function (error) {
                console.log(error.message)
              })
            }, function (error) {
              console.log(error.message)
            })
          })
        } else {
          alert('Referral Code not valid.')
        }
      }, function (error) {
        alert(error.message)
        return
      })
    }
  }
})