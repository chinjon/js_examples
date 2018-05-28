// explainer: https://www.youtube.com/watch?v=GhbhD1HR5vk

let dog = {
  sound: 'woof',
  talk: function() {
    console.log(this.sound);
  }
}

dog.talk() // 'woof'
let talkFunction = dog.talk;
talkFunction() // undefined

let boundTalkFunction = talkFunction.bind(dog);
boundTalkFunction();