new Vue({
    el:'#app',
    data:{
     height: (window.innerHeight - 60) +'px',
     socialArray:[
         {
             src:'./src/imgs/facebook.ico',
             link:'https://www.facebook.com/profile.php?id=100008930282377'
         },{
             src:'./src/imgs/linkedin.ico',
             link:'https://www.linkedin.com/in/nader-atef-6806b2139/'
         },{
             src:'./src/imgs/google_plus.ico',
             link:'https://plus.google.com/u/0/118143558688056899911'
         }
     ],
     projects:[
         {
             img:'./src/imgs/tictac.png',
             link:'https://naderjs.lib.id/ticvue@dev/#/',
             codeLink:'https://github.com/NaderJS/libticVue',
             name:'Undefeatable tictactoe game',
             id:'pro1'
         },{
             img:'./src/imgs/pomo.png',
             link:'https://naderjs.github.io/Pomodro',
             codelink:'https/github.com/NaderJS/Pomodro/',
             name:'a Pomodoro clock',
             id:'pro2'
         },{
             img:'./src/imgs/twitch.png',
             link:'https://codepen.io/Nader_Camper/full/qmGYZd',
             codeLink:'https://codepen.io/Nader_Camper/pen/qmGYZd',
             name:'Twitch streams status app',
             id:'pro3'
         },{
             img:'./src/imgs/simgame.png',
             link:'https://naderjs.github.io/simgame/',
             codeLink:'https://github.com/NaderJS/simgame',
             name:'a simple simon game',
             id:'pro4'
         },{
             img:'./src/imgs/wiki.png',
             link:'https://codepen.io/Nader_Camper/full/rmQeQB',
             codeLink:'https://codepen.io/Nader_Camper/pen/rmQeQB',
             name:'Wiki Search',
             id:'pro5'
         }
     ],
     codeArray:[
         {
             img:'./src/imgs/fccIcon.jpg',
             link:'https://www.freecodecamp.com/naderjs/'
         },{
             img:'./src/imgs/github.png',
             link:'https://github.com/NaderJS/'
         },{
             img:'./src/imgs/codepen.png',
             link:'https://codepen.io/Nader_Camper/'
         }
     ],
     form:{}
    },
    methods:{

    },
    mounted:function(){
      let self = this
      self.el=document.getElementById('about'); 
      
    },
    computed:{
        scrControl:function(){
            console.log(window)
        }
    }
})