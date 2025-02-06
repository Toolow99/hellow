function moveRandomE1(elm) {
    elm.style.postion ="absolute";
    elm.style.top =Math.floor(math.random() * 90 + 5) + "%" ;
    elm.style.left = math.floor(math.random() * 90+ 5)+ "%" ;
}

const moveRandom =document.querySelector("#move-random");

moveRandom.addEventListener ("mouseenter", function(e)
{
    moveRandomE1(e.traget);
});