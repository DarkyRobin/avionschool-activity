const justiceLeague = [
    {name: 'Superman', superpowers: 'Super strength'},
    {name: 'Batman', superpowers: 'Super rich'},
    {name: 'Wonder Woman', superpowers: 'Super lasso'},
    {name: 'Lastikman', superpowers: 'Super elastic'},
    {name: 'Gagamboy', superpowers: 'Super Sticky'},
]
let superheroList = document.getElementById('superheroList');

for(i = 0; i < justiceLeague.length; i++){
    let newSupes = document.createElement('li');
    let showSS = document.createElement('button');
    showSS.textContent = `${justiceLeague[i].superpowers}`;
    newSupes.textContent = `Super Hero name: ${justiceLeague[i].name}`;
    superheroList.append(newSupes);
    superheroList.append(showSS);
}

window.addEventListener('dblclick', function() {
    console.log(`Hooooiiii! Pogi double click na.`);
});

window.addEventListener('load', function() {
    console.log(`Akoy na lo load na.`);
});

window.addEventListener('resize', function() {
    console.log(`Ui resize`);
});