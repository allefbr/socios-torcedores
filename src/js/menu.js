const win = $(window);

function addElemClass( el, cls ) {
    return el.addClass( cls );
}

function removeElemClass(el, cls ){
    return el.removeClass( cls );
}

export default function scrollAddClass( elem, elemTarget, cls ) {    
    const target = $(elemTarget);

    if ( elem.length <= 0 ) return;

    // observa scroll
    let scrollTop = $(target).scrollTop();    

    win.scroll( ( el ) => {
        let scrollTop = $(target).scrollTop();

        return ( scrollTop > 0 ) ? 
            addElemClass( elem, cls ) :
            removeElemClass( elem, cls ) ;
    });

    elem.addClass( cls );
}