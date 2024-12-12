//1
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

// for
for (let i = 0; i < friends.length; i++){
    string += friends[i];
    if(i < friends.length - 1 ){
        string += ', ';
    }
}
console.log(string);

// join()
console.log(friends.join(', '))

// 2.splice
const cards = ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5'] ;
console.log(cards);
let newCard = cards.splice(0,3); //Видалені елементи зберігаються в змінній newCard
console.log(newCard);
console.log(cards);

const u = cards.concat(newCard);
console.log(u);

// 3
const cardToRemove = 'Card-3';
console.log(u.indexOf(cardToRemove));

for(let i = 0; i < u.length; i++) {
    if(u[i] === cardToRemove) {
        u.splice(i, 1);
    }
}
console.log(u);

// 4
const cardToInsert = 'New-Card'; 
const cardToUpdate = 'Updated-Card';

// новий елемент ін. 3
u.splice(3, 0, cardToInsert);

// 5 оновлюємо елемент на індексі 0
u[0] = cardToUpdate;

console.log(u);