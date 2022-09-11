window.onscroll =function(){
    var header = document.getElementById('head');
    var ar = document.getElementById('a');
    var b = document.getElementById('b');
    var c = document.getElementById('c');
    var d = document.getElementById('d');
    var i = document.getElementById('i');
    var f = document.getElementById('f');

 

    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        header.style.backgroundColor= 'white';
        ar.style.color= 'black';
        b.style.color= 'black';
        c.style.color= 'black';
        d.style.color= 'black';
        i.style.color= 'black';
        f.style.color= 'black'; 
    }
    else{
        header.style.backgroundColor= 'transparent';
        ar.style.color= 'white';
        b.style.color= 'white';
        c.style.color= 'white';
        d.style.color= 'white';
        i.style.color= 'white';
        f.style.color= 'white';
    }
}