const boat = document.getElementById('boat');
const btn = document.getElementById('btn');
const mast = document.getElementById('mast');
const sails = document.querySelectorAll('.sail');

btn.addEventListener('click', () => {
    btn.disabled = true;                 // no double-clicks restarting the sequence
    btn.classList.add('hull');           // 1. button becomes a hull
    btn.textContent = 'Поплыли!';

    setTimeout(() => mast.classList.add('up'), 800);                        // 2. mast
    setTimeout(() => sails.forEach(s => s.classList.add('up')), 1800);      // 3. sails
    setTimeout(() => boat.classList.add('away'), 2800);                     // 4. sail away
});