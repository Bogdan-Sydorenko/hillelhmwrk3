function createPythagorasTable(size) {

    const table = document.createElement('div');

    for (let i = 1; i <= size; i++) {
        const row = document.createElement('row');
        row.classList.add('row');

        for (let j = 1; j <= size; j++) {
            const cell = document.createElement('cell');
            cell.classList.add('cell');
            cell.textContent = i * j;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    return table;
}

const container = document.querySelector('#tableContainer');

const pythagorasTable = createPythagorasTable(10);

pythagorasTable.classList.add('table');

container.appendChild(pythagorasTable);
