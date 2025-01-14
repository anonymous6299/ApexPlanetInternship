const id = 237;
const images = document.getElementById("slider");
var MaxMargin=-200;
var MarCh=50;



const imgArr = Array.from({length:5},(_,index)=>{
    return `https://picsum.photos/id/${id+index}/800/400`
})
images.innerHTML=`${
    imgArr.map((item)=>{
        return `<img src=${item} alt="img" style="margin-left:0rem">`
    })
}`.split(",").join(" ")



const ImageToBeMoved = images.firstElementChild;
ImageToBeMoved.style.transition="margin-left 0.4s";
window.addEventListener(('resize'),()=>{
    ImageToBeMoved.style.marginLeft="0rem"
    if (window.innerWidth<=880) {
        MarCh=37.5;
        MaxMargin=-150
    }
    if (window.innerWidth<=680) {
        MarCh=25;
        MaxMargin=-100;
    }
    if (window.innerWidth<=420){
        MarCh=12.5;
        MaxMargin=-50;
    }

})

const moveToNext = () => {
    const left = parseFloat(ImageToBeMoved.style.marginLeft);
    if (left===MaxMargin) {
        ImageToBeMoved.style.marginLeft="0rem";
    }
    else{
        ImageToBeMoved.style.marginLeft=`${left-MarCh}rem`;
    }

}
const moveToPrev = () => {
    const left = parseFloat(ImageToBeMoved.style.marginLeft);
    if (left===0) {
        ImageToBeMoved.style.marginLeft=`${MaxMargin}rem`;
    }
    else{
        ImageToBeMoved.style.marginLeft=`${left+MarCh}rem`;
    }

}
// const getJokes = async() => {
//     const resp = await (await fetch("https://api.api-ninjas.com/v1/jokes",{
//         method:'GET',
//         headers:{
//             'Content-Type':'application/json',
//             'X-Api-Key':"lvPZGD/xEpENnSl9ySPYAw==mhNpUWfac1poH14a"
//         }
//     })).json();
//     const [response] = resp
//     document.getElementById("joke").innerText=response.joke
// }
// getJokes();