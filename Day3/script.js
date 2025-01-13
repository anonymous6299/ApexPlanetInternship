const id = 237;
const margins=["23rem","-67rem","-157rem","-247rem","-337rem"]
const images = document.getElementById("slider");
const imgArr = Array.from({length:5},(_,index)=>{
    return `https://picsum.photos/id/${id+index}/800/400`
})

images.innerHTML=`${
    imgArr.map((item)=>{
        return `<img src=${item} alt="img" style="margin-right: 40rem;">`
    })
}`.split(",").join(" ")

const moveToNext = () => {
    const left = images.style.marginLeft;
    const pos = margins.findIndex((item,index)=>{
    return item===left})
    if (pos+1>4) {
        images.style.marginLeft=margins[0];
    }
    else{
        images.style.marginLeft=margins[pos+1];
    }

}
const moveToPrev = () => {
    const left = images.style.marginLeft;
    const pos = margins.findIndex((item,index)=>{
    return item===left})
    if (pos-1<0) {
        images.style.marginLeft=margins[4];
    }
    else{
        images.style.marginLeft=margins[pos-1];
    }
}
const getJokes = async() => {
    const resp = await (await fetch("https://api.api-ninjas.com/v1/jokes",{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'X-Api-Key':"lvPZGD/xEpENnSl9ySPYAw==mhNpUWfac1poH14a"
        }
    })).json();
    const [response] = resp
    document.getElementById("joke").innerText=response.joke
}
getJokes();