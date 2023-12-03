import Img from './img.png';

function addImage() {
    const image = document.createElement('img');
    image.alt ="this is image"
    image.src = Img;
    image.width = 200
    console.log("Hello")
    document.body.appendChild(image);
}

export default addImage;