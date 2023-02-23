(function(){
    "use strict";

        const myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

        let currentImage = 0;

        document.getElementById('next').onclick = nextPhoto;
        document.getElementById('previous').onclick = previousPhoto;

        function nextPhoto(){
            //increment the currentImage
            currentImage++;

            if(currentImage > myImages.length-1){
                currentImage = 0;
            }

            //goes into the array "myImages" and find the array correspondent to the currentImage
            document.getElementById('myimage').src = myImages[currentImage];

        };

        function previousPhoto(){
            //decrement the currentImage so it goes backwards
            currentImage--;
            //currentImage has to count till less then 0 and does the oposite of the nextPhoto function
            if(currentImage < 0){
                currentImage = 4;
            }

            document.getElementById('myimage').src = myImages[currentImage];

        }
})();

//this is an immediately invoked function expression