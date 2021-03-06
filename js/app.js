// En knapp som återställer allt till originalutseendet
// Alla ändringar som du har gjort ska ändras tillbaka
// Byt ut minst ett foto
// Ändra bakgrundsfärg på minst ett element
// Ändra text på minst ett element
// Ändra färg på minst en knapp
// Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)
// Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen)
// Listan ska innehålla flera li element
// Varje li element ska ha en synlig border. (Valfritt utseende)






//-------------------------------- skapa resetKnapp-----------------------------------

let skapaResetKnapp = () => {
    let headerNav = document.getElementById('header-navigation')
    let resetKnapp = document.createElement('button');
    let changeKnapp = document.createElement('button');
    headerNav.appendChild(changeKnapp);
    resetKnapp.innerHTML = ' Reset ';
    changeKnapp.innerHTML = ' Change ';

    changeKnapp.style.marginLeft = '10px';
    changeKnapp.style.background = 'blue';
    changeKnapp.style.color = 'white';
    changeKnapp.style.width = '70px';

    resetKnapp.style.marginLeft = '10px';
    resetKnapp.style.width = '70px';
    resetKnapp.style.background = 'red';
    resetKnapp.style.color = 'white';


    resetKnapp.addEventListener('click', () => {
        headerNav.removeChild(resetKnapp);       /* resetKnapp ta bort sig själv först */
        location.reload();
    })
    changeKnapp.addEventListener('click', () => {
        ChangeFunction();
        // location.reload();
        headerNav.appendChild(resetKnapp);
        headerNav.removeChild(changeKnapp);
    })

}

skapaResetKnapp();






//-----------------------Change Function-----------------------
let body = document.querySelector('body');
let newBtnsContainer = document.createElement('div');
newBtnsContainer.style.display = 'flex';
newBtnsContainer.style.flexDirection = 'column';

body.insertBefore(newBtnsContainer, body.childNodes[1]);
let newBtns;

let ChangeFunction = () => {
    let buttonLista = ['Byt ut Fire Sinus Hoodie foto ( Den i mitten )', 'Ändra bakgrundsfärg för Fire Sinus Hoodie texten ( Den i mitten )', 'Ändra text på rubriken och underrubriken för  Fire Sinus Hoodie ( Den i mitten ) ', 'Ändra färg på alla knappar i de tre article ', 'Ta bort Ash Sinus Hoodie article (den första) ', 'Lägg till en lista ( längst ner ) '];
    for (let x = 0; x < buttonLista.length; x++) {
        newBtns = document.createElement('button');
        newBtns.className = ("newBtns-Class");
        newBtns.textContent = buttonLista[x];
        newBtnsContainer.appendChild(newBtns);
        // newBtns.style.background = 'red';
        newBtns.style.color = 'rgb(141, 0, 0)';
        newBtns.style.fontSize = '25px';
        newBtns.style.padding = '20px 0';
        newBtns.style.fontWeight = 'bold';
        newBtns.style.cursor = 'pointer';
        console.log(newBtns)
    }


    aktiveraButtons()

    // -------------------hover- new buttons -----------

    // let hoverClass = document.querySelector('.hover-Class');
    // hoverClass.style.background='green';



    newBtnsContainer.addEventListener('mousemove', function (event) {
        let hColor = event.x ;
        for (i= 0; i<newBtns.length; i++){
        switch (event.target) {
            case newBtns[i]:
                newBtns[i].style.background = `hsl( ${hColor}, 80%, 70%)`;
                newBtns[i].style.color = `hsl( 150, 60%, 20%)`;
        }
    }



        // if (event.target == newBtns[1]) {

        //     newBtns[1].style.background = 'blue';
        // }
        // if (event.target == newBtns[i]) {
        //     newBtns[i].style.background='green'
        // }
    }
    )


    console.log(newBtns[0]);
    // console.log(newBtnsContainerArr); 
    // 


    //
}







let aktiveraButtons = () => {
    newBtns = document.querySelectorAll('.newBtns-Class')


    newBtns[0].addEventListener('click', () => {
        let img = document.querySelector('.art-2 img');
        img.setAttribute('src', 'img/hoodie-forrest.png')
        newBtnsContainer.removeChild(newBtns[0])
    })


    newBtns[1].addEventListener('click', () => {
        let articleEven = document.querySelector('main .art-2');
        articleEven.style.background = 'rgb(106, 148, 96';
        newBtnsContainer.removeChild(newBtns[1])
    })

    newBtns[2].addEventListener('click', () => {
        let h2Texten = document.querySelector('.art-2 h2');
        h2Texten.innerHTML = 'Nice Green Hoodie';
        let h3Texten = document.querySelector('.art-2 h3');
        h3Texten.innerHTML = 'Green';
        newBtnsContainer.removeChild(newBtns[2])

    })

    newBtns[3].addEventListener('click', () => {
        let articleBtn = document.querySelectorAll('article button');
        articleBtn.forEach(x => x.style.background = 'rgb(156, 126, 62)');
        newBtnsContainer.removeChild(newBtns[3])

    })
    newBtns[4].addEventListener('click', () => {
        let main = document.getElementsByTagName('main');
        let theFirstArticle = document.querySelector('.art-1');
        let mainImg = document.querySelectorAll('main article figure img')
        main[0].removeChild(theFirstArticle);
        mainImg.forEach(x => x.style.width = '60%')
        newBtnsContainer.removeChild(newBtns[4])


    })
    newBtns[5].addEventListener('click', () => {
        let listArray = ['Kundtjänst', 'Frågor', 'Nyheter', 'om oss']
        var newLista = document.createElement("ul");
        for (let i = 0; i < listArray.length; i++) {
            var listItem = document.createElement("li");
            var listItemtext = document.createTextNode(listArray[i]);
            listItem.style.border = 'solid 3px black';
            listItem.style.color = 'black';
            listItem.style.padding = '3px 30px';
            listItem.appendChild(listItemtext);
            newLista.appendChild(listItem);
        }

        var footer = document.querySelector('footer');
        footer.style.flexDirection = ' column';
        footer.style.alignItems = 'center';
        newLista.style.display = ' flex';
        newLista.style.justifyContent = 'space-between';
        newLista.style.width = ' 1000px';
        newLista.style.fontWeight = ' bold';
        newLista.style.listStyle = 'none';
        footer.appendChild(newLista);
        newBtnsContainer.removeChild(newBtns[5])


    })

}
    //----- skapa function för att få tillbaka originalutseendet---------


    // let originalutseendet = () => {
    //     img.setAttribute('src', 'img/hoodie-fire.png')
    //     articleEven.style.background = 'white';
    //     h2Texten.innerHTML = 'Sinus Hoodie';
    //     h3Texten.innerHTML = 'Fire';
    //     articleBtn.forEach(x => x.style.background = '#222');
    //     // main[0].appendChild(theFirstArticle);
    //     main[0].insertBefore(theFirstArticle, main[0].childNodes[0]);
    //     mainImg.forEach(x => x.style.width = '80%')
    //     footer.removeChild(newLista);

    // }
    // -----------------------------------------------------------------------------------



//     //---------- Byt ut minst ett foto --------
//     let img = document.querySelector('.art-2 img');
//     img.setAttribute('src', 'img/hoodie-forrest.png')
//     // -----------------------------------------------------------------------------------



// }

//     //----------------- Ändra bakgrundsfärg -------------------

//     let articleEven = document.querySelector('main article:nth-child(even)');
//     articleEven.style.background = 'rgb(106, 148, 96';


//     // -------------- Ändra texten ------------------


//     let h2Texten = document.querySelector('.art-2 h2');
//     h2Texten.innerHTML = 'Nice Green Hoodie';
//     let h3Texten = document.querySelector('.art-2 h3');
//     h3Texten.innerHTML = 'Green';



//     //---------------- Ändra färg på knapp--------------

//     let articleBtn = document.querySelectorAll('article button');
//     articleBtn.forEach(x => x.style.background = 'rgb(156, 126, 62)');


//     // ------------------------Ta bort element -----------------


//     let main = document.getElementsByTagName('main');
//     let theFirstArticle = document.querySelector('.art-1');
//     let mainImg = document.querySelectorAll('main article figure img')
//     main[0].removeChild(theFirstArticle);
//     mainImg.forEach(x => x.style.width = '60%')

//     console.log(main);
//     console.log(theFirstArticle);
//     console.log(document);


//     // ------------- Lägg till en lista med flera li och border  ---------------

//     let listArray = ['Kundtjänst', 'Frågor', 'Nyheter', 'om oss']
//     var newLista = document.createElement("ul");
//     for (let i = 0; i < listArray.length; i++) {
//         var listItem = document.createElement("li");
//         var listItemtext = document.createTextNode(listArray[i]);
//         listItem.style.border = 'solid 3px black';
//         listItem.style.color = 'black';
//         listItem.style.padding = '3px 30px';
//         listItem.appendChild(listItemtext);
//         newLista.appendChild(listItem);
//     }

//     var footer = document.querySelector('footer');
//     footer.style.flexDirection = ' column';
//     footer.style.alignItems = 'center';
//     newLista.style.display = ' flex';
//     newLista.style.justifyContent = 'space-between';
//     newLista.style.width = ' 1000px';
//     newLista.style.fontWeight = ' bold';
//     newLista.style.listStyle = 'none';
//     footer.appendChild(newLista);
