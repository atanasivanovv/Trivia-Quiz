/* This extracts the query string */
const queryString = window.location.search;

const start_btn = document.querySelector('.quiz_btn');
let topic = document.querySelector('#topic_input');
let difficullty = document.querySelector('#diff_input');
let number_of_questions = document.querySelector('#num_of_questions');
let warning = document.querySelector('#warning');

console.log(queryString);

// Categories

    fetch('https://opentdb.com/api_category.php')
        .then(res => {
            return res.json();
        })
        .then(data => {
            categories = data.trivia_categories;

            let select = document.getElementById('topic_input');

            for(let i = 0; i < categories.length; i++) {
                let category = document.createElement('option');
                category.text = categories[i].name;
                category.value = categories[i].name;
                select.appendChild(category);
            }
        })
  
// Questions

console.log(number_of_questions.value);
start_btn.addEventListener('click', () => {
    if(number_of_questions.value <= 0 || number_of_questions.value >= 11) {
        warning.style.display='block';
        warning.style.animation = 'none';
        warning.offsetHeight;
        warning.style.animation =  null;
        return;
    }
    let topic_id = 0;
    for(let i = 0; i < categories.length; i++) {
        if(topic.value == categories[i].name) {
            topic_id = categories[i].id;
            break;
        }
    }
    window.location = "./question.html?amount=" + number_of_questions.value + "&category=" + topic_id + "&difficulty=" + difficullty.value;     
});

let index = 0;
let randomID = 0;
let numOfQuestions = 0;


fetch('https://opentdb.com/api_category.php')
        .then(res => {
            return res.json();
        })
        .then(data => {
            categories = data.trivia_categories;
            index = Math.floor(Math.random() * categories.length);
            randomID = categories[index].id;
            numOfQuestions = Math.floor(Math.random() * 9) + 1;

            let randomDiff = '';
            let randomDiffNumber = Math.floor(Math.random() * 3);
                if (randomDiffNumber === 0) 
                    randomDiff = 'easy';
                else if (randomDiffNumber === 1)
                    randomDiff = 'medium';
                else 
                    randomDiff = 'hard';

            const random_btn = document.querySelector('.random_btn');
            const random_nav_btn = document.querySelector('.random_nav_btn');

            random_btn.addEventListener('click', () => {
                window.location = " ./question.html?amount=" + numOfQuestions + "&category=" + randomID + "&difficulty=" + randomDiff;
            })
            random_nav_btn.addEventListener('click', () => {
                window.location = " ./question.html?amount=" + numOfQuestions + "&category=" + randomID + "&difficulty=" + randomDiff;
            })
        })
