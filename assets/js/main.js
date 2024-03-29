const start_quiz = document.querySelector('#start_quiz');

if (start_quiz) {
    start_quiz.addEventListener('click', () => {
        window.location = " ./quiz_form.html";
    });
}

let index = 0;
let randomID = 0;
let numOfQuestions = 0;

fetch('https://opentdb.com/api_category.php')
        .then(res => {
            return res.json();
        })
        .then(data => {
            categories = data.trivia_categories;
            console.log(categories);
            console.log(categories.length);
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
            if (random_btn) {
                random_btn.addEventListener('click', () => {
                    window.location = " ./question.html?amount=" + numOfQuestions + "&category=" + randomID + "&difficulty=" + randomDiff;
            })
            }
        })
