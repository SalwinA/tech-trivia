const questionBank =[
    {
        id: 1,
        question: 'The Firefox browser logo is not a fox? It is actually a type of species which are protected in Asia.',
        option1: 'Slow Loris',
        option2: 'Red Panda',
        option3: 'Giant Panda',
        correctAnswer: 'option2'
    },
    {
        id: 2,
        question: 'The first apple logo was featured by the famous physicist sitting under an apple tree?',
        option1: 'Galileo Galilei',
        option2: 'Isaac Newton',
        option3: 'Albert Einstein',
        correctAnswer: 'option2'
    },
    {
        id: 3,
        question: 'The average computer user blinks only _____ times per minute, while the normal rate is 20 times per minute.',
        option1: '7',
        option2: '2',
        option3: '10',
        correctAnswer: 'option1'
    },
    {
        id: 4,
        question: 'The “Google” name was created mistakenly. The original name was supposedly.,',
        option1: 'Googel',
        option2: 'Googolplex',
        option3: 'Googol',
        correctAnswer: 'option3'
    },
    {
        id: 5,
        question: 'This font from Microsoft was a controversial font after the 9/11 attacks in 2001 where the first plane was first to hit.',        
        option1: 'Arial Narrow',
        option2: 'Lucida Console',
        option3: 'Wingdings',
        correctAnswer: 'option3'
    },
    {
        id: 6,
        question: 'The first VCR or Video Camera Recorder in the year 1956 was the size of a:',        
        option1: 'Piano',
        option2: 'Television',
        option3: 'Radio',
        correctAnswer: 'option1'
    },
    {
        id: 7,
        question: 'That _____ of people try to plug their USB devices upside down?',        
        option1: '86%',
        option2: '50%',
        option3: '30%',
        correctAnswer: 'option1'
    },
    {
        id: 8,
        question: 'The first American alarm clock that was invented could only ring at ____?',        
        option1: '4am',
        option2: '6am',
        option3: '12pm',
        correctAnswer: 'option1'
    },
    {
        id: 9,
        question: 'The first world computer mouse was made of:',        
        option1: 'Metal',
        option2: 'Wood',
        option3: 'Chrome',
        correctAnswer: 'option2'
    },
    {
        id: 10,
        question: 'The Astronauts of Apollo 11 couldn’t get life insurance because it cost a fortune? Instead, they signed:',
        option1: 'Autographs',
        option2: 'Waiver',
        option3: 'Farewell Letter',
        correctAnswer: 'option1'
    },
    {
        id: 11,
        question: 'What was the app Snapchat originally named when launched in 2011?',
        option1: 'Facesnap',
        option2: 'Picaboo',
        option3: 'Chatsnap',
        correctAnswer: 'option2'
    },
    {
        id: 12,
        question: '_____ of people type their word or sentence on google, just to see if they spelled it right?',
        option1: '10%',
        option2: '50%',
        option3: '97%',
        correctAnswer: 'option3'
    },
    {
        id: 13,
        question: 'What does the word “Android” mean?',
        option1: 'A green robot.',
        option2: 'A robot with human appearance.',
        option3: 'An articulated robot.',
        correctAnswer: 'option2'
    },
    {
        id: 14,
        question: 'What is the most used password despite all warnings is?',
        option1: '123456',
        option2: 'abcdef',
        option3: 'abc123',
        correctAnswer: 'option1'
    },
    {
        id: 15,
        question: 'Name the syndrome in which one thinks that their phone is vibrating but isn’t?',
        option1: 'Forced Vibration',
        option2: 'Phantom Vibration',
        option3: 'Damped Vibration',
        correctAnswer: 'option2'
    },
    {
        id: 16,
        question: 'Fear of technology is called ________.',
        option1: 'Glossophobia',
        option2: 'Tripophobia',
        option3: 'Technophobia',
        correctAnswer: 'option3'
    },
    {
        id: 17,
        question: 'What is the first name of the famous character in video game Super Mario?',
        option1: 'Jumperman',
        option2: 'Superjump',
        option3: 'Jumpman',
        correctAnswer: 'option3'
    },
    {
        id: 18,
        question: 'Which combination of keyboard shortcut keys are to open Windows Task Manager?',
        option1: 'Ctrl + Shift + Esc',
        option2: 'Ctrl + Alt + Del',
        option3: 'Ctrl + Alt + F3',
        correctAnswer: 'option1'
    },
    {
        id: 19,
        question: 'What is the name of the first ever video game that was released in the year 1972?',
        option1: 'Super Mario',
        option2: 'Pong',
        option3: 'Solitaire',
        correctAnswer: 'option2'
    },
    {
        id: 20,
        question: 'What does the "M" in MP3 stand for?',
        option1: 'Movie',
        option2: 'Music',
        option3: 'Moving',
        correctAnswer: 'option3'
    }
];

const question = document.querySelector('.question');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
let count =0;
let score = 0;
const showScore = document.querySelector('#showScore');

let questionCount = Math.floor(Math.random()*20);

    

function questionLoad() {
    optionsDeselect();
    const currentQuestion = questionBank[questionCount];
    question.innerText = currentQuestion.question;
    answer1.innerText = currentQuestion.option1;
    answer2.innerText = currentQuestion.option2;
    answer3.innerText = currentQuestion.option3;
}

questionLoad();

function optionsDeselect() {
    answers.forEach(answers => answers.checked = false);
}

function getAnswer() {
    
        let chkdAnswers;
        answers.forEach((curElement) => {
            if(curElement.checked){
                answer = curElement.id;
            }
            
        });
        return answer;
};

submit.addEventListener('click', () => {
    const selctdAnswer = getAnswer();
    

    if(selctdAnswer ===  questionBank[questionCount].correctAnswer){
        score++;
        alert("Correct Answer!!");
    }else {alert("Wrong Answer!!")};
    
    questionCount++;
    count++;
    
    console.log(score);
   
    if(count < 10){
        questionLoad();
    }else if (count = 10) {
        submit.innerText = 'Finish';
        document.getElementById('scoreText').innerHTML = score;
    }
    
});



