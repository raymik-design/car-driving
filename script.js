/*eslint-disable */
 const blueCar = document.querySelector('.carZ');
 let x = 0;
 let y = 0;
 const speed = 40;
 let flippedXz = false;
 let rotate = 0;
 // if this not an arrow key, we don't care
 function handleKeyDown(event) {
   if (!event.key.includes('Arrow')) {
     return;
   }
   switch (event.key) {
     case 'ArrowUp':
       y = y - 1;
       rotate = -90;
       break;

     case 'ArrowDown':
       y = y + 1;
       rotate = 90;
       break;

     case 'ArrowLeft':
       x = x - 1;
       rotate = 0;
       flippedXz = true;
       break;

     case 'ArrowRight':
       x = x + 1;
       rotate = 0;
       flippedXz = false;
       break;
     default:
       console.log('this is not a valid move');
       break;
   }

   blueCar.setAttribute(
     'style',
     `
     --rotateX: ${flippedXz ? '180deg' : '0'};
     --x: ${x * speed}px;
     --y: ${y * speed}px;
     --rotate: ${rotate}deg`
   );
 }

 window.addEventListener('keydown', handleKeyDown);