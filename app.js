function changebackgroundcolor(){

    var arkaplanRenk="#"+Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor=arkaplanRenk;

    var yaziRenk="#"+Math.floor(Math.random()*16777215).toString(16);

    document.body.style.color=yaziRenk;


    
    var yaziTipi=['Arial','Helvetica','Verdana','Times New Roman'];
    var randomFont = yaziTipi[Math.floor(Math.random() * yaziTipi.length)];
     document.body.style.fontFamily=randomFont;
}