new Vue({
  el: '#details',
  data: {
    ucode: '',
    disabled: false,
    loading: false,
    userData: {},
    currUcode: '',
    keyss: {
      event: 'Name',
      email: 'E-mail',
      bandName: 'Band Name',
      value: 'No. of participants',
      songdewlink: 'Songdew Link',
      videoLink: 'Video Link',
      teamName: 'Team Name',
      pNo: 'Phone No.',
      pno: 'Phone No.',
      regno: 'Registration No.'
    }
  },
  methods: {
    display() {
      if (!this.ucode) {
        alert('Enter a valid ucode')
        return
      }

      if (this.ucode != this.currUcode) {
        return
      }
      this.currUcode = this.ucode
      this.loading = true
      this.disabled = true
      var self = this
      var userdb = firebase.firestore().collection('users')
      userdb
        .where('ucode', '==', self.ucode)
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.size > 0) {
            querySnapshot.forEach(function(doc) {
              console.log(doc.data())
              this.userData = doc.data()
            })
            self.loading = false
            self.disabled = false
          } else {
            self.loading = false
            self.disabled = false
            alert('Invalid Ucode')
          }
        })
        .catch(err => {
          console.log(err)
        })

      // setTimeout(() => {
      //   this.loading = false
      //   this.userData = {
      //     name: 'Apoorv Agarwal',
      //     username: 'aapoorv41',
      //     college: 'MUJ',
      //     pno: 8057989577,
      //     email: 'aapoorv41@gmail.com',
      //     events: [
      //       {
      //         event: 'focus',
      //         genre: 'metal',
      //         value: 2
      //       }
      //     ]
      //   }
      // }, 1500)
    }
  }
})
