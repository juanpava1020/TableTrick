document.addEventListener('DOMContentLoaded', function () {
    const tableContainer = document.querySelector('.num-mesas');

    
    const tables = [
        { id: 1, occupied: false },
        { id: 2, occupied: true },
        { id: 3, occupied: false },
        { id: 4, occupied: true },
        { id: 5, occupied: false },
        { id: 6, occupied: false },
        { id: 7, occupied: false },
        { id: 8, occupied: true },
    ];

  
    tables.forEach(table => {
        const tableElement = document.createElement('div');
        tableElement.classList.add('table');
        if (table.occupied) {
            tableElement.classList.add('occupied');
        }
        tableElement.textContent = table.id;
        tableElement.dataset.id = table.id;
        tableElement.addEventListener('click', () => {
            if (!table.occupied) {
                document.querySelectorAll('.table.selected').forEach(el => el.classList.remove('selected'));
                tableElement.classList.add('selected');
            }
        });
        tableContainer.appendChild(tableElement);
    });
});
