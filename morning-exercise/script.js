// Directions

// Complete the following in your .js file

// 1. Create a radio object
// 2. Give it a property called stations and make the value an array of station objects
// 3. Give each station object a property called name and songs. 
// Name should be a string and should be an array of song objects.
// 4. Song object should have two properties: title and artist
// 5. Create a currentStation property on your radio object
// 6. Create a method on your radio object that changes the station. 
// 7. When the station is changed, pick a song from that station 
// console.log("Now Playing:" + song,title + "by" + song.artist)

const radio = {
    currentStation: 0,
    stations: [
      {
        name: "92.9",
        songs: [
          {
            title: "Beat It",
            artist: "Michael Jackson"
          },
          {
            title: "Man In The Mirror",
            artist: "Mihcael Jackson"
          }
        ]
      },
      {
        name: "97.9",
        songs: [
          {
            title: "Wanna Be Startin' Something",
            artist: 'Michael Jackson'
          },
          {
            title: 'Billie Jean',
            artist: "Michael Jackson"
          }
        ]
      },
      {
        name: "99.7",
        songs: [
          {
            title: "Leave Me Alone",
            artist: 'Michael Jackson'
          },
          {
            title: 'Bad',
            artist: "Michael Jackson"
          }
        ]
      },
    ],
    
    changeStation: () => {
      let newStation 
  
      if (radio.currentStation === radio.stations.length - 1) {
        newStation = radio.stations[radio.currentStation = 0]
      } else {
        newStation = radio.stations[radio.currentStation += 1]
      }
      
      const song = newStation.songs[Math.floor(Math.random() * newStation.songs.length)]
  
      console.log(`Station: ${newStation.name} | ${song.title} by ${song.artist}`)

      updateDOM(newStation.name, song)
    }
  }
  
  // radio.changeStation() 

// Directions
// This morning we will be taking the radio object 
// that you built yesterday and integrate that into the DOM

/*
Setup:
1. In the same folder as yesterday, make an index.html and style.css file.

2. Link your CSS and JS to the index.html

Requirements:
1. There must be HTML elements that display the current station and song on the radio.

2. There must be a button that when pressed, will change the station. 
The elements that display the current station and song should be updated when the button is pressed.*/

const radioEl = document.querySelector(".radio")
const stationEl = document.querySelector(".station")
const songEl = document.querySelector(".song")
const changeBtn = document.querySelector("#changebutton")

changeBtn.addEventListener("click", radio.changeStation)

function updateDOM (stationName, songObj) {
  stationEl.textContent = stationName

  songEl.textContent = `Now Playing: ${songObj.title} by ${songObj.artist}`
}

radio.changeStation()

// const currStation = document.querySelector("#current-station")
// const currSong = document.querySelector("#current-song")
// const currArtist = document.querySelector("#artist")

// btn.addEventListener('click', (evt) => {
//   const button = document.createElement('button')
//   radio.changeStation()
//   document.querySelector('h3').innerHTML = `Station: ${newStation.name} | Now Playing: ${song.title} by ${song.artist}`
    
// })


/*
Don't overcomplicate this. 
You already have all of the contents in your radio object to display.

Think about the HTML element you can use and how we can manipulate them once an event occurs.
Look back on the W4D2 lesson, where we added comments to the <ul> with the click of a button!
*/