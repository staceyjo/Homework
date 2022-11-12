// Exercise
// 1. Build view engine ( you can only have 1 view engine but multiple templates )
// 2. Make 2 different templates, and use them both in different routes 
// 3. Make 10 routes

// Exercise Bonus: 
// Dynamically add links to your view engine 
// so you can make anchor tags to link your pages together
    // hint: split , loop
    // hint: use an array or object


// Load express
const express = require('express');

// Set port #
const port    = 3000;

// Create express app
const app = express();

// fs is file system
// // this engine requires the fs module
const fs = require('fs')

// define the view engine called myengine
app.engine('myengine', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        // if there is an error, this catches the error 
      if (err) return callback(err)

      // this is an extremely simple view engine we'll be more complex later
      const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        .replace('#content#','<div>'+ options.content + '</div>' )
        .replace("#content2#", "<div>" + options.content2 + "</div>")
        .replace("#style#", options.style);
      return callback(null, rendered)
    })
})


// specify the views directory
app.set('views', './views')

// register the view engine
app.set('view engine', 'myengine') 


// TEMPLATE 1
app.get('/home', function(req, res) {
    res.render('template1', { 
        title: 'Express Lab/Homework', 
        message: ' Welcome! Click the link below to cycle through the templates and routes.', 
        content: '<a href="/Hey-Arnold">Next Page: Template 1 Route 1</a>',
        content2:'</br><img src="https://dmej8g5cpdyqd.cloudfront.net/blog/wp-content/uploads/2017/05/javascript-node-meme-960x720.gif" width="350" height="400">',
        style: "body {background-color: #000000; color: #e6e6e6; text-align: center;}",    
    })
});

app.get('/Hey-Arnold', (req, res) => {
    res.render('template1', { 
        title: 'Hey Arnold', 
        message: ' Move it, Football head!', 
        content: 'Hey Arnold! is an American animated television series created by Craig Bartlett that aired on Nickelodeon from October 7, 1996 to June 8, 2004. The show centers on a fourth grader named Arnold, who lives with his grandparents in an inner-city boarding house. Episodes center on his experiences navigating big city life while dealing with the problems he and his friends encounter. </br></br><a href="/Animaniacs">Next Page: Template 1 Route 2</a>',
        content2:'</br><img src="https://www.syfy.com/sites/syfy/files/styles/amp_featured_image/public/2019/04/hey_arnold.jpg?h=8abcec71" width="350" height="400">',
        style: "body {background-color: #003300; color: #00e573; text-align: center;}",    
    })
})

app.get('/Animaniacs', (req, res) => {
    res.render('template1', { 
        title: 'Animaniacs', 
        message: 'Hello-o-o, nurse!', 
        content: 'Animaniacs is a variety show, with short skits featuring a large cast of characters. While the show had no set format, the majority of episodes were composed of three short mini-episodes, each starring a different set of characters, and bridging segments. Hallmarks of the series included its music, satirical social commentary, pop culture references, character catchphrases, and innuendo directed at an adult audience.</br></br><a href="/Rugrats">Next Page: Template 1 Route 3</a>',
        content2:'</br><img src="https://static01.nyt.com/images/2020/11/18/arts/17animaniacs4/merlin_179583855_1ecb4f17-5736-4c26-98e0-af8db8e664b4-mobileMasterAt3x.jpg" width="350" height="400">',
        style: "body {background-color: #000033; color: #a1e1fa; text-align: center;}",
    })
})

app.get('/Rugrats', (req, res) => {
    res.render('template1', { 
        title: 'Rugrats', 
        message: 'Hang on to your diapers, babies. Were going in!', 
        content: 'Rugrats is an American animated television series created by Arlene Klasky, Gábor Csupó, and Paul Germain for Nickelodeon. The show focuses on a group of toddlers; most prominently—Tommy, Chuckie, Angelica, and twins Phil and Lil, and their day-to-day lives, usually involving life experiences that become much greater adventures in the imaginations of the main characters. </br></br><a href="/Doug">Next Page: Template 1 Route 4</a>',
        content2:'</br><img src="https://akns-images.eonline.com/eol_images/Entire_Site/2018616/rs_600x600-180716155148-600x600.new-rugrats-lp.71618.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top" width="350" height="400">',
        style: "body {background-color: #330000; color: #e8be17; text-align: center;}",    
    })
})

app.get('/Doug', (req, res) => {
    res.render('template1', { 
        title: 'Doug', 
        message: 'Dear Journal, hi, its me, Doug!', 
        content: 'Doug is an animated series, aired on both Nickelodeon and ABC. In the show, an eleven-year-old boy named Doug Funnie moves to Bluffington with his family. There he and his friends have many adventures.</br></br><a href="/Pepper-Ann">Next Page: Template 1 Route 5</a>',
        content2:'</br><img src="https://s3.r29static.com/bin/entry/e8f/960xbm,70/1633483/image.jpg" width="350" height="400">',
        style: "body {background-color: #003333; color: #00dddd; text-align: center;}",
    })
})

app.get('/Pepper-Ann', (req, res) => {
    res.render('template1', { 
        title: 'Pepper Ann', 
        message: 'What the Fuzzy?', 
        content: 'Pepper Ann is an American animated series created by Sue Rose and aired on ABC. It debuted on September 13, 1997, and ended on November 18, 2000. Reruns were also shown on Disneys One Too on UPN during the 2000-2001 season, and later on Disney Channel, and on Toon Disney until 2008. Pepper Ann was the very first animated television series for Disney to be created by a woman, and for fifteen years, would be the only such show, until Daron Nefcys Star vs. the Forces of Evil debuted in 2015. Tom Warburton, who later created Cartoon Networks Codename: Kids Next Door, served as the lead character designer for the series. </br></br><a href="/CatDog">Next Page: Template 2 Route 1</a>',
        content2:'</br><img src="https://variety.com/wp-content/uploads/2021/08/backdrop-1920.jpeg" width="350" height="400">',
        style: "body {background-color: #330033; color: #dd00dd; text-align: center;}",
    })
})


// TEMPLATE 2
app.get('/CatDog', (req, res) => {
    res.render('template2', { 
        title: 'CatDog', 
        message: 'And I love it!', 
        content: 'The series depicts the life of conjoined brothers, with one half being a cat and the other a dog. Nickelodeon at first ordered 40 episodes and planned to debut it in fall 1998. Nick produced the series from Burbank, California, United States.</br></br><a href="/Dexter">Next Page: Template 2 Route 2</a>',
        content2:'</br><img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/11/CatDog-Featured-Cropped.jpg" width="350" height="400">',
        style: "body {background-color: #333300; color: #dddd00; text-align: center;}",
    })
})

app.get('/Dexter', (req, res) => {
    res.render('template2', { 
        title: 'Dexter', 
        message: 'Ahhh, what a fine day for SCIENCE!', 
        content: 'Dexter is the main character and protagonist of Dexters Laboratory. He is a boy genius who has a secret laboratory. His intelligence makes him the brains of the family and he is one of the worlds greatest inventors, having created countless weird and amazing machines and experiments. He is always working on new inventions and creations every day, but his sister Dee Dee is always breaking into his lab and destroying his work. The daily events surrounding Dexters life mainly revolve around his relationship with his sister and everything that happens between the two.</br></br><a href="/Johnny-Bravo">Next Page: Template 2 Route 3</a>',
        content2:'</br><img src="https://i.ytimg.com/vi/dKsPyiT5Lro/maxresdefault.jpg" width="350" height="400">',
        style: "body {background-color: #006600; color: #00e500; text-align: center;}",
    })
})

app.get('/Johnny-Bravo', (req, res) => {
    res.render('template2', { 
        title: 'Johnny Bravo', 
        message: 'Whoa, mama! She digs me!', 
        content: 'The series stars a muscular man named Johnny Bravo who dons a pompadour hairstyle and an Elvis Presley-like voice and has a forward, woman-chasing personality. Plots typically revolve around him trying to get a woman that he has targeted throughout the episode to fall in love with him. He is often beaten up or stunned by his target or companions, or is ditched by them in the end.</br></br><a href="/Recess">Next Page: Template 2 Route 4</a>',
        content2:'</br><img src="https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTgzMTk3MjE3MjE2MDEzNzMx/cartoon-networks-30th-anniversary-retrospective-johnny-bravo.jpg" width="350" height="400">',
        style: "body {background-color: #000066; color: #9999f5; text-align: center;}",    
    })
})

app.get('/Recess', (req, res) => {
    res.render('template2', { 
        title: 'Recess', 
        message: 'Scandalous!', 
        content: 'The series focuses on six elementary school students and their interactions with other students and teachers. One of the many features of the show is how the children form their own society, complete with government and class structure, set against a backdrop of a regular school, giving the show a unique feel. </br></br><a href="/PowerPuff-Girls">Next Page: Template 2 Route 5</a>',
        content2:'</br><img src="https://lumiere-a.akamaihd.net/v1/images/p_recess_21237_22a4242e.jpeg" width="350" height="400">',
        style: "body {background-color: #660000; color: #c29999; text-align: center;}",
    })
})

app.get('/PowerPuff-Girls', (req, res) => {
    res.render('template2', { 
        title: 'PowerPuff Girls', 
        message: 'Sugar, Spice and Everything Nice!', 
        content: 'Each girl represents one of the three perfect ingredients: Bubbles, the blue one, is “sugar” and the cutest and most sensitive of the bunch; Buttercup, the green one, is “spice” and the tough tomboy; Blossom, the pink one, is “everything nice” and generally the leader of the three.</br></br><a href="/home">Back to Home</a>',
        content2:'</br><img src="https://m.media-amazon.com/images/M/MV5BYjM4YmFkOTItMDY1ZS00YzdkLWFhODgtNzZjNGIwZDAwNzlkXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_.jpg" width="350" height="400">',
        style: "body {background-color: #006633; color: #00e573; text-align: center;}",    
    })
})


// Tell the app to listen on port 3000
// for HTTP requests from client
app.listen(3000, () => {
    console.log('listening');
});