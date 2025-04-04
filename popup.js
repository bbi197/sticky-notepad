document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('noteInput');
    const shapes = document.getElementById('shapes');
    const floatingNotes = document.getElementById('floatingNotes');

    shapes.addEventListener('click', (event) => {
        if (event.target.classList.contains('shape')) {
            const shape = event.target.textContent;
            noteInput.value += shape;
        }
    });

    noteInput.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 'Enter') {
            const noteText = noteInput.value;
            createFloatingNote(noteText);
            noteInput.value = '';
        }
    });

    function createFloatingNote(text) {
        const note = document.createElement('div');
        note.classList.add('floating-note');
        note.textContent = text;
        note.style.left = Math.random() * window.innerWidth + 'px';
        note.style.top = Math.random() * window.innerHeight + 'px';
        floatingNotes.appendChild(note);
    }
});