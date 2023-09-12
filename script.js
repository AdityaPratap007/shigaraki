let editor = ace.edit("editor");
editor.setTheme("ace/theme/eclipse");
editor.setOption('enableLiveAutocompletion', true);
editor.session.setMode("ace/mode/html");

let exEditor = ace.edit("ex-editor");
exEditor.setTheme("ace/theme/dracula");
exEditor.session.setMode("ace/mode/html");
exEditor.setReadOnly(true);

let solEditor = ace.edit("sol-editor");
solEditor.setTheme("ace/theme/dracula");
solEditor.session.setMode("ace/mode/html");
solEditor.setReadOnly(true);

editor.setValue(`<div class="calculator-card">\n\t<div class="display">\n\t</div>\n\t<div class="buttons">\n\t</div>\n</div>`);

exEditor.setValue(`\n<!-- How to create nested divs -->\n<div class="class-name">\n\t<div class="nested-class">\n\t</div>\n</div>`);

solEditor.setValue(`\n<!-- Here's how you can implement this-->\n<div class="calculator-card">\n\t<div class="display">\n\t</div>\n\t<div class="buttons">\n\t</div>\n</div>`);

exEditor.clearSelection();
exEditor.renderer.$cursorLayer.element.style.opacity = 0;
solEditor.clearSelection();
solEditor.renderer.$cursorLayer.element.style.opacity = 0;


const btnHeight = document.querySelector('.example-btn').offsetHeight;

function showDiv(id) {
    const divs = document.querySelectorAll('.small-row1 .large-701>div');
    divs.forEach(btn => {
        btn.classList.add('hidden');
        btn.style.animation = 'none';
    });

    document.querySelector(`.${id}`).classList.remove('hidden');
    // document.querySelector(`.${id}`).style.animation = 'pinchin 0.5s ease';
}


const btns = document.querySelectorAll('.btns1>div');
btns.forEach(btn => {
    btn.addEventListener('mouseover', handleHover);
});

function handleHover(event) {
    const btns = document.querySelectorAll('.btns1 div');
    btns.forEach(btn => btn.classList.remove('btn-selected'));
    event.target.classList.add('btn-selected');
    const index = event.target.getAttribute('data-value');
    updatearrow(index);
}

function updatearrow(index) {
    const rowNumber = parseInt(index);
    const rowElement = document.querySelector(`.r${rowNumber}`);

    const arrow = document.querySelector('.arrow');
    arrow.style.transition = 'transform 0.2s ease-in-out';
    arrow.style.transform = `translateY(${rowElement.offsetTop - arrow.parentElement.offsetTop}px)`;
}
// ---------
