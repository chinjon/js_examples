function Song(title, author, year, album) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.album = album;
}

function printSong() {
  console.log(`${this.title} - ${this.author}`)
}

const maidenhead = new Song("Maidenhead", "Protomartyr", 2014, "Under Color of Official Right")

printSong.call(maidenhead)