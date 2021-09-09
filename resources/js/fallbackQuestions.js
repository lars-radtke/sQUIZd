const QUESTIONS = [
	{
		question: "Who are the best Web Dev Coaches?",
		isBookmarked: false,
		showAnswer: false,
		answer: "Lene, Lukas and Marc",
		addition: ", obviously!",
	},
	{
		question: "What do you call a group of penguins on land?",
		isBookmarked: false,
		showAnswer: false,
		answer: "Waddle",
		addition: ". When in water, they are called a raft!",
	},
	{
		question: "What does the latin sentence 'Post hoc ergo propter hoc' translate into?",
		isBookmarked: false,
		showAnswer: false,
		answer: "After this, therefore because of this",
		addition: ".",
	},
	{
		question: "Where does the Kiwi fruit originate from?",
		isBookmarked: false,
		showAnswer: false,
		answer: "China",
		addition: ". That's why it's also called the Chinese Gooseberry.",
	}
]

if (JSON.parse(localStorage.getItem("localQuestions")) == null) {
	localStorage.setItem("localQuestions", JSON.stringify(QUESTIONS.slice()))
}

let questionsData = JSON.parse(localStorage.getItem("localQuestions"))