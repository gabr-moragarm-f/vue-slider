var app = new Vue({
  el: '#root',
  data:{
    imgs:['https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
    'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
    'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
    'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'],
    imgIndex: 0,
  },
  methods: {
    next: function() { // Bottoni prev e next per lo slider
      if (this.imgIndex >= this.imgs.length - 1) {
        this.imgIndex = 0;
      }else {
        this.imgIndex += 1;
      }
    },
    prev: function() {
      if (this.imgIndex <= 0) {
        this.imgIndex = this.imgs.length - 1;
      }else {
        this.imgIndex -= 1;
      }
    },
    indexBoleean: function(index) { //funzione che permette il spostarsi dell'active dei pallini di .nav
      if (index === this.imgIndex) {
        return 'active fas fa-circle';
      }else {
        return 'fas fa-circle';
      }
    }
  }
});

Vue.config.devtools = true;
