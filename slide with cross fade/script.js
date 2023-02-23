(function(){
    "use strict";

        let currentImage = 0;
        const myphotos = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
        const container = document.getElementById('content');
        const nextBtn = document.getElementById('next');
        const previousBtn = document.getElementById('previous');

        //adding the next button event listener
        nextBtn.addEventListener('click', function(event){
            event.preventDefault();

            currentImage++;
            if(currentImage > myphotos.length-1){
                currentImage=0;
            }
            //swapImage();

            //adding the new slide on top
            //1.create a new image element
            const newSlide = document.createElement('img');
            //2.setting the source attribute
            newSlide.src = `slides/${myphotos[currentImage]}`;
            //3.setting the class name
            newSlide.className = "fade-in-img";
            //4.appending to the container
            container.appendChild(newSlide);

            //remove extra children 
            if(container.children.length > 2){
                container.removeChild(container.children[0]);
            }
        });

        //adding the PREVIOUS button event listener
        previousBtn.addEventListener('click', function(event){
            event.preventDefault();

            currentImage--;
            if(currentImage < 0){
                currentImage= myphotos.length-1; //(which is 4)
            }
            
            //swapImage();

            //adding the same 1 to 4 components
            const newSlide = document.createElement('img');
            newSlide.src = `slides/${myphotos[currentImage]}`;
            newSlide.className = "fade-in-img";
            container.appendChild(newSlide);

            //remove extra children 
            if(container.children.length > 2){
                container.removeChild(container.children[0]);
            }
        });

        //refactoring the code with a function
        /*
       function swapImage(){
            const newSlide = document.createElement('img');
            newSlide.src = `slides/${myphotos[currentImage]}`;
            newSlide.className = "fade-in-img";
            container.appendChild(newSlide);

            if(container.children.length > 2){
                container.removeChild(container.children[0]);
            }
       }
        */
})();

//this is an immediately invoked function expression