document.addEventListener('DOMContentLoaded', function() {
    const alleDagenSection = document.querySelector('.alleDagen');
    const ditMaandElement = document.getElementById('ditMaand');
    const ditJaarElement = document.getElementById('ditJaar');
    const linksButton = document.querySelector('.links');
    const rechtsButton = document.querySelector('.rechts');
    const dagenVanDeWeek = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];

    let huidigeDatum = new Date();

    function createCalendar(month, year) {
        // Vul de maand en het jaar in de navigatie
        ditMaandElement.textContent = new Intl.DateTimeFormat('nl-NL', { month: 'long' }).format(huidigeDatum);
        ditJaarElement.textContent = huidigeDatum.getFullYear();

        // Leeg de sectie met alle dagen
        alleDagenSection.innerHTML = '';

        // Bepaal de eerste dag van de maand
        const firstDayOfMonth = new Date(year, month, 1);
        const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 voor zondag, 1 voor maandag, enz.

        // Bepaal het aantal dagen in de huidige maand
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Voeg lege blokken toe voor de eerste week tot de startdag van de maand
        for (let i = 0; i < startingDayOfWeek; i++) {
            const emptyBlock = document.createElement('figure');
            emptyBlock.classList.add('alleDagen__block');
            alleDagenSection.appendChild(emptyBlock);
        }

        // Voeg de dagen van de maand toe
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('figure');
            dayElement.classList.add('alleDagen__block');
            dayElement.textContent = i;
            alleDagenSection.appendChild(dayElement);
        }
    }

    // Laad de kalender bij het initialiseren
    createCalendar(huidigeDatum.getMonth(), huidigeDatum.getFullYear());

    // Event listener voor de links-knop
    linksButton.addEventListener('click', function() {
        huidigeDatum.setMonth(huidigeDatum.getMonth() - 1);
        createCalendar(huidigeDatum.getMonth(), huidigeDatum.getFullYear());
    });

    // Event listener voor de rechts-knop
    rechtsButton.addEventListener('click', function() {
        huidigeDatum.setMonth(huidigeDatum.getMonth() + 1);
        createCalendar(huidigeDatum.getMonth(), huidigeDatum.getFullYear());
    });
});