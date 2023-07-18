
// Create canvas variable
var canvas=new fabric.Canvas("myCanvas")
 block_y=1;
 block_x=1;

blockimgwidth = 350;
blockimgheight = 430;

var blockimgobject= "";

function new_image(getimg)
{
	// to upload images
	fabric.Image.fromURL(getimg,function(Img){
        blockimgobject=Img
        blockimgobject.scaleToWidth(blockimgwidth)
        blockimgobject.scaleToHeight(blockimgheight)
        blockimgobject.set({
            top:block_y,
            left:block_x
        })
        canvas.add(blockimgobject)
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image('rr1.png')
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png')
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png')
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png')
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png')
	// upload blue ranger
	}
	
}

