/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jackson Kendall",
    photo: "images/profile.jpg",
    favoriteFoods: [
        'lasagna', 'pasta', 'dutch babies', 'burritos'
    ],
    hobbies: ['driving', 'watching movies', 'going on dates with my wife', 'napping'],
    placesLived: []
}; 
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Eagle River, AK',
        length: '13 years'
    },
    {
        place: 'Herriman, UT',
        length: '9 years'
    });
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */


