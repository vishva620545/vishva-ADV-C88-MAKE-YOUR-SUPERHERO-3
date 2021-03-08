var canvas=new fabric.Canvas('myCanvas');

Block_width=30;
Block_height=30;

Boy_x=10;
Boy_y=10;

var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);   
    player_object.set({
        top:Boy_y,
        left:Boy_x
    });  
    canvas.add(player_object);
    });
}

function new_image(get_img)
{
    fabric.Image.fromURL(get_img, function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(Block_width);
    block_image_object.scaleToHeight(Block_height);   
    block_image_object.set({
        top:Boy_y,
        left:Boy_x
    });  
    canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
    console.log("p and shift");
    Block_width=Block_width+10;
    Block_height=Block_height+10;
    document.getElementById("current_width").innerHTML = Block_width;
    document.getElementById("current_height").innerHTML = Block_height;
}

if(e.shiftKey == true && keyPressed == '77')
{
    console.log("m and shift");
    Block_width=Block_width-10;
    Block_height=Block_height-10;
    document.getElementById("current_width").innerHTML = Block_width;
    document.getElementById("current_height").innerHTML = Block_height;
}
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
      {
         down();
         console.log("down");
      }

      if(keyPressed == '37')
      {
         left();
         console.log("left");
      }

      if(keyPressed == '39')
      {
         right();
         console.log("right");
      }
      if(keyPressed == '87')
      {
         new_image('wall.jpg');
         console.log("w");
      }
      if(keyPressed == '71')
      {
         new_image('ground.png');
         console.log("g");
      }
      if(keyPressed == '76')
      {
         new_image('light_green.png');
         console.log("l");
      }
      if(keyPressed == '84')
      {
         new_image('trunk.jpg');
         console.log("t");
      }
      if(keyPressed == '82')
      {
         new_image('roof.jpg');
         console.log("r");
      }
      if(keyPressed == '89')
      {
         new_image('yellow_wall.png');
         console.log("y");
      }
      if(keyPressed == '68')
      {
         new_image('dark_green.png');
         console.log("d");
      }
      if(keyPressed == '85')
      {
         new_image('unique.png');
         console.log("u");
      }
      if(keyPressed == '67')
      {
         new_image('cloud.jpg');
         console.log("c");
      }
}
