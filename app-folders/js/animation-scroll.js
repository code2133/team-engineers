/*const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0 ){
    window.addEventListener('scroll',animOnScroll);
    function animOnScroll(params){
        for (let index = 0; index < animItems.length; index++) {
            const currentItem = animItems[index];
            const animItemsHeight = currentItem.offsetHeight;
            const animItemsOffset = offset(currentItem).top;
            const animStart = 4;

            let animItemsPoint = window.innerHeight - animItemsHeight / animStart;
            
            if (animItemsHeight > window.innerHeight){
                animItemsPoint = window.innerHeight - animItemsHeight / animStart;
            }

            if((scrollY > animItemsOffset - animItemsPoint) && scrollY < (animItemsOffset + animItemsHeight)){
                currentItem.classList.add('_active');
            }else{
                currentItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX / document.documentElement.scrollLeft,
        scrollTop = window.scrollY / document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}*/

/*const sections = [...document.querySelectorAll('._anim-items')];
let currentSectionIndex = 0;
let isMobile = window.innerWidth <= 1100; // Проверка ширины экрана

function scrollToSection(index) {
  if (index >= 0 && index < sections.length) {
    for (let i = 0; i < sections.length; i++) {
      if (i === index) {
        sections[i].classList.remove('hidden');
      } else {
        sections[i].classList.add('hidden');
      }
    }
    sections[index].scrollIntoView({ behavior: 'smooth' });
  }
}

function handleWheel(event) {
  if (!event.defaultPrevented) {
    if (!isMobile) { // Проверка, является ли устройство мобильным
      event.preventDefault();
      
      const direction = event.deltaY > 0 ? 1 : -1;
      currentSectionIndex += direction;

      if (currentSectionIndex < 0) {
        currentSectionIndex = 0;
      } else if (currentSectionIndex >= sections.length) {
        currentSectionIndex = sections.length - 1;
      }

      scrollToSection(currentSectionIndex);
    }
  }
}

window.addEventListener('wheel', handleWheel, { passive: false });

*/
