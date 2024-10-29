const 
toggleDisplay = (className,
display) 
=> {

[...document.getElementsByClassName(className)].forEach(element
=> {

element.style.display
= 
display;

});

};


const 
hideCommon = () 
=> toggleDisplay('all',
'none');

const 
hideAsdf = () 
=> toggleDisplay('all',
'none');
