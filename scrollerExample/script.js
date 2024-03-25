// array of text
const text_change = [
    'This is the first graphic!',
    'A second graphic!',
    'A Third one!',
    'Fourth, and one more on the way...',
    'Last Graphic!',
]

// selects the graphics Container
let graphic_container_text = document.getElementById('graphic-text');



// sets up the scroller instance, pass in an array of all the scenes
const scroller = new Scroller({
    // select all your slides
    scenes: document.querySelectorAll('.scene'),
    // select your graphic container
    container: document.querySelector('.graphic-container'),
  });
  
  // Scroller has a tiny event emitter embedded in it!
  
  // the `enter` event is triggered every time a scene crosses the threshold
  scroller.on('scene:enter', d => {
    // Add an active class to the div when it crosses in
    // d.element.classList.add('active');
    // console.log the d property
    // console.log(d);
    
    // change the text in the graphc container when it comes in
    // graphic_container_text.innerText = text_change[d.index];
  });
  
  // the `exit` event is triggered every time a scene exits the threshold
  scroller.on('scene:exit', d => {
    // remove active class when it leaves 
    // d.element.classList.remove('active');
  });


  //don't worry about the stuff below here, but make sure to put it in at the end --------------------
  
  scroller.on('init', () => {
    // intializes the scroller, 
    console.log('Everything is ready to go!');
  });
  
  // starts up the IntersectionObserver
  scroller.init();
  