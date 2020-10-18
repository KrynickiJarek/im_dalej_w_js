import "../scss/main.scss"
// import {question} from "./questionsBase"


document.addEventListener("DOMContentLoaded", function () {

    const nextQuestion1 = document.querySelector(".next_question1");
    const nextQuestion2 = document.querySelector(".next_question2");
    const showAnswer = document.querySelector(".show_answer");
    const turnBack = document.querySelector(".turn_back");
    const flippingCard = document.querySelector(".flipping_card");


    const questionNumber = document.querySelectorAll(".question_number");
    const questionContent = document.querySelector(".question_content");
    const questionCode = document.querySelector(".question_code");
    const answerContent = document.querySelector(".answer_content");
    const answerCode = document.querySelector(".answer_code");
    const tagList = document.querySelectorAll(".tag_list");


    let randomQuestionNumber = 0;
    const printQuestion = (array) => {
        randomQuestionNumber = Math.floor(Math.random() * (array.length));

        for (let number of questionNumber) {
            number.innerHTML = `Pytanie nr: ${randomQuestionNumber + 1}`
        }
        questionContent.innerHTML = `${array[randomQuestionNumber].questionContent}`
        questionCode.innerHTML = `${array[randomQuestionNumber].questionCode}`
        answerContent.innerHTML = `${array[randomQuestionNumber].answerContent}`
        answerCode.innerHTML = `${array[randomQuestionNumber].answerCode}`
        for (let tag of tagList) {
            tag.innerHTML = `Tagi: ${array[randomQuestionNumber].tags.join(", ")}`
        }
    }

    printQuestion(questions);

    showAnswer.addEventListener("click", () => {
        flippingCard.classList.add("flip")
    })
    turnBack.addEventListener("click", () => {
        flippingCard.classList.remove("flip")
    })
    nextQuestion1.addEventListener("click", () => {
            printQuestion(questions)
        }
    )

    nextQuestion2.addEventListener("click", () => {
            flippingCard.classList.remove("flip")
            setTimeout(function () {
                printQuestion(questions);
            }, 200);
        }
    )


});

///// wyjwalić do innego pliku!
/////od 3.2 - Składnia JSX

const questions = [
    {
        questionContent: `testowa treść pytania`,
        questionCode: `testowy kod pytania`,
        answerContent: `testowa treść odpowiedzi`,
        answerCode: `testowy kod odpowiedzi`,
        tags: ["testTag1", "testTag2"]
    },
    {
        questionContent: `Za co odpowiadają argumenty modułu react-dom?`,
        questionCode: `ReactDOM.render(argument1, argument2)`,
        answerContent: `Argument1 (element) to dowolna przyjmowana przez React rzecz do wyrenderowania,
            Argument2 (miejsce) to element DOM do którego będziemy renderować element.`,
        answerCode: `ReactDOM.render(
                    <h1>Hello, world!</h1>,
                    document.getElementById("app")
                    );`,
        tags: ["JS", "React"]
    },
    {
        questionContent: `W jaki sposób możemy skorzystać z funkcji biblioteki React w pliku JavaScript? `,
        questionCode: ``,
        answerContent: `Należy go zaimportować moduł react jako React:`,
        answerCode: `import React from \"react\";`,
        tags: ["JS", "React"]
    },
    {
        questionContent: `Gdzie i jak importujemy moduł react-dom?`,
        questionCode: ``,
        answerContent: `Moduł react-dom importujemy jednorazowo, tylko w głównym pliku aplikacji,
        wpisując następujący kod:`,
        answerCode: `import ReactDOM from \"react-dom\";`,
        tags: ["JS", "React"]
    },
    {
        questionContent: `Czym jest JSX?`,
        questionCode: ``,
        answerContent: `JSX jest rozszerzeniem języka JavaScript pozwalającym używać tagów przypominających tagi
                        HTML wewnątrz plików JavaScriptowych.`,
        answerCode: ``,
        tags: ["JS", "React"]
    },
    {
        questionContent: `Czy w składi JSX dopuszczalne jest nie wpisanie cudzysłowiu dla wartości atrybutu?`,
        questionCode: `<table border=0>`,
        answerContent: `W składi JSX nie jest dopuszczalne nie wpisanie cudzysłowiu dla wartości atrybutu`,
        answerCode: `<table border="0">`,
        tags: ["JS", "React"]
    },
    {
        questionContent: `Czy w składi JSX wszystkie tagi muszą być zamknięte?`,
        questionCode: `<img src="logo.png">`,
        answerContent: `W składi JSX wszystkie tagi musza być zamknięte. Dopuszcza się zamknięcie
                        znakiem / na końcu elementu.`,
        answerCode: `<img src="logo.png"></img>
                    <img src="logo.png" />`,
        tags: ["JS", "React"]
    },
    {
        questionContent: `W co są zmieniane tagi JSX podczas kompilacji?`,
        questionCode: `<span id="test">Hello, World</span>`,
        answerContent: `Tagi JSX podczas kompilacji są zamieniane w wywołania React.createElement().
                        Wywołania te zwracają obiekt reprezentujący element.`,
        answerCode: `React.createElement(
                      "span",
                      {id: "test"},
                      "Hello, World"
                    );`,
        tags: ["JS", "React"]
    },
    {
        questionContent: `W jaki sposób JSX umożliwia zagnieżdżanie wyrażeń?`,
        questionCode: ``,
        answerContent: `Aby umieścić wyrażenie w dowolnym miejscu elementu JSX należy otoczyć je nawiasami klamrowymi`,
        answerCode: `<span>{2+2}</span>
                    <span>Twoje imię ma {count} znaków</span>
                    <span>{ person.name}</span>
                    <span>{ print(name)}</span>`,
        tags: ["JS", "React"]
    },/////wyrażenia w JSX - zrób zadania i dalej pytania
    // {
    //     questionContent: `Co jest wyrażeniem w JSX?`,
    //     questionCode: ``,
    //     answerContent: `Wyrażeniem jest dowolny kod JavaScript, który coś zwraca`,
    //     answerCode: `<span>{2+2}</span>`,
    //     tags: ["JS", "React"]
    // },
    // {
    //     questionContent: ``,
    //     questionCode: ``,
    //     answerContent: ``,
    //     answerCode: ``,
    //     tags: ["JS", "React"]
    // },
    // {
    //     questionContent: ``,
    //     questionCode: ``,
    //     answerContent: ``,
    //     answerCode: ``,
    //     tags: ["JS", "React"]
    // },
    // {
    //     questionContent: ``,
    //     questionCode: ``,
    //     answerContent: ``,
    //     answerCode: ``,
    //     tags: ["JS", "React"]
    // },
    // {
    //     questionContent: ``,
    //     questionCode: ``,
    //     answerContent: ``,
    //     answerCode: ``,
    //     tags: ["JS", "React"]
    // },
    // {
    //     questionContent: ``,
    //     questionCode: ``,
    //     answerContent: ``,
    //     answerCode: ``,
    //     tags: ["JS", "React"]
    // },



]
