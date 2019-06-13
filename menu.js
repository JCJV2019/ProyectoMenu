function menuBuilder1(mMetaM) {
    // Meta Menu
    mMetaM.forEach((e) => {
        createMenu(e,eval(e.mArray));
    });
}

function createMenu(eMeta,mMenu) {
    // Generación de un menu.
    let cont = document.querySelector(eMeta.classFather);
    let elem = document.createElement('ul');
    // Style ul
    let tagStyle = fTagStyle(eMeta);
    if(eMeta.position !== '')
        tagStyle+= 'position:'+eMeta.position+';';
    elem.setAttribute('style',tagStyle);
    elem.setAttribute('class',eMeta.nameMenu+" open");
    let subCont = cont.appendChild(elem);
    // Opciones
    mMenu.forEach((e) => {
        elem = document.createElement('li');
        elem.setAttribute('class',e.nameItem);
        // Style li
        tagStyle = fTagStyle(e);
        elem.setAttribute('style',tagStyle);
        elem.setAttribute('title',e.msg);
        elem.innerHTML = e.option;
        subCont1 = subCont.appendChild(elem);

        // Generar evento
        if(e.action !== '')
            subCont1.addEventListener('click', optionClick);
        //
    });
}

function fTagStyle(e) {
    let tagStyle = "";
    if(e.backgroundColor !== '')
        tagStyle+= 'background-color:'+e.backgroundColor+';';
    if(e.color !== '')
        tagStyle+= 'color:'+e.color+';';
    if(e.padding !=="")
        tagStyle+= 'padding:'+e.padding+';';
    if(e.margin !=="")
        tagStyle+= 'margin:'+e.margin+';';
    if(e.border !=="")
        tagStyle+= 'border:'+e.border+';';
    if(e.borderRadius !=="")
        tagStyle+= 'border-radius:'+e.borderRadius+';';
    if(e.fontSize !=="")
        tagStyle+= 'font-size:'+e.fontSize+';';
    if(e.top !=="")
        tagStyle+= 'top:'+e.top+';';
    if(e.left !=="")
        tagStyle+= 'left:'+e.left+';';
        return tagStyle
}

function optionClick(e) {
    alert("Pulsada la opccion: " + e.target.textContent);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

menuBuilder1(mMetaMenu);



