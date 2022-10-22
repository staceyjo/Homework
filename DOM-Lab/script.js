// Menu data structure
let menuLinks = [
    { text: 'about', href: '/about' },
    {
      text: 'catalog', href: '#', subLinks: [
        { text: 'all', href: '/catalog/all' },
        { text: 'top selling', href: '/catalog/top' },
        { text: 'search', href: '/catalog/search' },
      ]
    },
    {
      text: 'orders', href: '#', subLinks: [
        { text: 'new', href: '/orders/new' },
        { text: 'pending', href: '/orders/pending' },
        { text: 'history', href: '/orders/history' },
      ]
    },
    {
      text: 'account', href: '#', subLinks: [
        { text: 'profile', href: '/account/profile' },
        { text: 'sign out', href: '/account/signout' },
      ]
    },
  ];
  
  const mainEl = document.querySelector('main');
  // console.log(mainEl);
  mainEl.style.backgroundColor = 'var(--main-bg)';
  mainEl.innerHTML = '<h1>SEI Rocks</h1>';
  mainEl.classList.add("flex-ctr");
  // console.log(mainEl);
  
  const topMenuEl = document.querySelector('#top-menu');
  // console.log(topMenuEl);
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  topMenuEl.classList.add('flex-around');
  
  // let i = 0;
  // menuLinks.forEach((arg) => {
  //     let aEl = document.createElement('a');
  //     aEl.setAttribute('href', arg.href);
  //     aEl.innerHTML = arg.text;
  //     console.log(i);
  //     i++;
  //     topMenuEl.append(aEl);
  // })
  
  // for(let i = 0; i < menuLinks.length; i++){
  //     let aEl = document.createElement('a');
  //     aEl.setAttribute('href', menuLinks[i].href);
  //     aEl.innerHTML = menuLinks[i].text;
  //     topMenuEl.append(aEl);
  // }
  
  let i = 0;
  for (let arg of menuLinks) {
    let aEl = document.createElement('a');
    aEl.setAttribute('href', arg.href);
    aEl.innerHTML = arg.text;
    // console.log(i);
    i++;
    topMenuEl.append(aEl);
  }
  
  let subMenuEl = document.querySelector('#sub-menu');
  subMenuEl.style.height = '100%';
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  subMenuEl.classList.add("flex-around");
  
  subMenuEl.style.position = 'absolute';
  subMenuEl.style.top = '0';
  
  // 5.1
  const topMenuLinks = topMenuEl.querySelectorAll('a');
  // console.log(topMenuLinks);
  
  let showingSubMenu = false;
  
  // 5.2
  topMenuEl.addEventListener('click', (evt) => {
    evt.preventDefault();
    // console.log(evt.target.tagName);
    if (evt.target.tagName !== 'A') {
      return;
    } else {
      // console.log(evt.target.classList);
    }
  
    // 5.3
    if (evt.target.classList.contains('active')) {
      // console.log('in if statement to remove active')
      evt.target.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = '0';
      return;
    }
  
    // 5.4
    topMenuLinks.forEach((arg) => {
      arg.classList.remove('active');
      // console.log(arg);
    })
  
    // 5.5
    evt.target.classList.add('active');
  
    // 5.6
  
    // showingSubMenu = evt.target.hasOwnProperty('sublinks')
    let text = evt.target.textContent;
    // console.log(text);
    let currentLink = {};
  
    for(let i = 0; i < menuLinks.length; i++){
      // console.log("something is happening");
      // console.log(menuLinks[i]);
  
      // console.log(menuLinks[i].hasOwnProperty('subLinks'))
      if(text === menuLinks[i].text){
        showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')
        currentLink = menuLinks[i];
      }
    }
    // console.log(showingSubMenu);
    // console.log(currentLink);
  
  // 5.7
    if(showingSubMenu === true){ 
      // console.log(menuLinks[i].subLinks);
      buildSubMenu(currentLink);
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
    // console.log(subMenuEl);
  
  // 5.8
    function buildSubMenu (){
      subMenuEl.innerHTML = "";
      console.log(subMenuEl);
      currentLink.subLinks.forEach((link) => {
        let newText = document.createElement('a');
        newText.setAttribute('href', link.href);
        newText.textContent = link.text;
        subMenuEl.append(newText);
      })
    }
  
  })
  
  // 6.0
  subMenuEl.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.tagName !== 'A') {
      return;
    } else {
      console.log(evt.target.tagName);
    }
  
    // 6.1
    showingSubMenu = false;
    subMenuEl.style.top = '0';
  
    // 6.2
    topMenuLinks.forEach((arg) => {
      arg.classList.remove('active');
      // console.log(arg);
    })
  
    // 6.3
    mainEl.innerHTML = `<h1>${currentLink.text}</h1>`;
  })

