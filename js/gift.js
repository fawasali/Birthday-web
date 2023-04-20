AOS.init();

var musik = ""

var Audio =  document.querySelector(".audio");
if(musik){
    audio.src = musik;
}

function mulai() {
    Audio.play();
    window.scrollTo(0, 0);
    document.querySelector(".open").style = "opacity = 0;";
    document.querySelector(".body").style = "overflow-y: scroll";
    setTimeout(function(){
        document.querySelector(".open").style.display = "none";
    },1200);
}

function wa(isi){
    window.open("https://api.whatsapp.com/send?phone=6285253010239") 
}

async function tanya(){
    var {
        value : kado
    } = await swal.fire({
        imageUrl:'resources/foto.png',
            title:'Kirim Jawabannnya'
    });

    if (kado){
        await swal.fire({
            imageUrl:'resources/wa.png',
            title:'Ke wa ku ya hehe'
        });
        wa(kado);
    }else{
        await swal.fire({
            icon : 'eror',
            title: 'Jangan Dikosongin Dong'
        });
        tanya();
    }
}