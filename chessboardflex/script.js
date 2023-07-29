const rows = document.getElementsByClassName('row');
for(i = 0; i < rows.length; i++) {
    let cell = rows[i].getElementsByClassName('cell');
    for(l = 0; l < cell.length; l++) {
        if(l%2 === 0) {
            cell[l].style.backgroundColor = '#4062bb';
        } else {
            cell[l].style.backgroundColor = '#ebebeb';
        }
    }
}