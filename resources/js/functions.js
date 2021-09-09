function loadQuestions(){
	questionsData.forEach((question, index) => {
		// create article
		let article = document.createElement("article")

		// add css classes
		article.classList.add("tile")
		if (question.userAnswer == question.answer){
		article.classList.add("tile--correct")
		}

		// insert element into the HTML file
		document.getElementById("questions__main").append(article)
		

		// create question
		let headline = document.createElement("p")
	
		// add css class
		headline.classList.add("tile__question")
	
		// retrieve and pass data from the the current iterations array object
		headline.textContent = question.question
	
		// insert question into the article
		article.append(headline)

		// create bookmark
		let bookmark = document.createElement("div")

		// set the bookmarks role and aria-label for accessability
		bookmark.setAttribute("role", "button")
		bookmark.setAttribute("aria-label", "Bookmark this question")
	
		// add css classes
		bookmark.classList.add("tile__bookmark")
	
		// add Eventlistener
		bookmark.addEventListener("click", () => {
			if (bookmark.classList.contains("tile__bookmark--active")){
				if (document.getElementById("toggle__bookmarks").classList.contains("questions__toggle-bookmarks--active")){
					bookmark.parentNode.classList.add("tile--hidden")
				}
				bookmark.classList.remove("tile__bookmark--active")
				bookmark.parentNode.classList.remove("bookmarked")
				question.isBookmarked = false
			} else {
				bookmark.classList.add("tile__bookmark--active")
				bookmark.parentNode.classList.add("bookmarked")
				question.isBookmarked = true
			}
			localStorage.setItem("localQuestions", JSON.stringify(questionsData))
		})
	
		// insert bookmark into the article
		article.append(bookmark)	

		// create squid image
		let squid = document.createElement("div")
	
		// add css classes
		squid.classList.add("tile__squid")
		if (question.userAnswer == question.answer){
			squid.classList.add("tile__squid--correct")
		}
	
		// insert image into the article
		article.append(squid)
		// create label element
		let label = document.createElement("label")
	
		// add css classes
		label.classList.add("tile__label", "tile__answer-label")
	
		// insert label text
		label.textContent = "Your answer:"
	
		// insert label into the article
		article.append(label)
	
		// create input element
		let input = document.createElement("textarea")
	
		// set input attributes for hinting
		input.setAttribute("placeholder","Type in your answer here.")
	
		// add css class
		input.classList.add("tile__answer-area")
	
		// retrieve and pass data from the current iterations array object, if available
		if ((question.userAnswer != null) && (question.userAnswer.trim().length > 0)){
			input.value = question.userAnswer
		}
	
		// add event listener
		input.addEventListener("change", () => {
			if (input.value == question.answer){
				input.parentNode.previousSibling.classList.add("tile__squid--correct")
				input.parentNode.parentNode.classList.add("tile--correct")
			} else {
				input.parentNode.previousSibling.classList.remove("tile__squid--correct")
				input.parentNode.parentNode.classList.remove("tile--correct")
			}
			question.userAnswer = input.value
			localStorage.setItem("localQuestions", JSON.stringify(questionsData))
		})
	
		// insert input into label element
		label.append(input)	

		// create button element
		let button = document.createElement("button")
		
		// add css class
		button.classList.add("tile__answer-button")
		
		// insert button text
		button.textContent = "Show answer"
	
		// insert button click event
		button.addEventListener("click", () => {
			button.nextSibling.classList.toggle("tile__answer--hidden")
			if (question.showAnswer == false){
				question.showAnswer = true
			} else {
				question.showAnswer = false
			}
			localStorage.setItem("localQuestions", JSON.stringify(questionsData))
		})
	
		// insert button into article
		article.append(button)

		// create p element
		let answer = document.createElement("p")
		
		// add css classes
		answer.classList.add("tile__answer", "tile__answer--hidden")
		if (question.showAnswer == true){
			answer.classList.remove("tile__answer--hidden")
		}
	
		// retrieve and pass data from array
		answer.textContent = question.addition
	
		// insert answer into article
		article.append(answer)
	
		// create span element
		let span = document.createElement("span")
		
		// retrieve and pass date from value
		span.textContent = question.answer
	
		// insert span into paragraph
		answer.prepend(span)
		
})}

function toggleBookmarks(){
	if (document.getElementById("toggle__bookmarks").classList.contains("questions__toggle-bookmarks--active")){
		let unhide = document.querySelectorAll("article.tile:not(.bookmarked)")
		unhide.forEach(el => {
			el.classList.remove("tile--hidden")
		})
		document.getElementById("toggle__bookmarks").classList.remove("questions__toggle-bookmarks--active")
	} else {
		let hide = document.querySelectorAll("article.tile:not(.bookmarked)")
		hide.forEach(el => {
			el.classList.add("tile--hidden")
		})
		document.getElementById("toggle__bookmarks").classList.add("questions__toggle-bookmarks--active")
	}
}

function switchSections(){
	let subheadlines = document.querySelectorAll(".subheadline")
	subheadlines.forEach((subheadline) => {
		subheadline.classList.remove("subheadline--active")
	})
	
	let buttons = document.querySelectorAll(".footer__button")
	buttons.forEach((button) => {
		button.classList.remove("footer__button--active")
	})

	let sections = document.querySelectorAll(".section")
	sections.forEach((section) => {
		section.classList.remove("section--active")
	})
}

function goToStart(){
	switchSections()
	document.querySelector("#subheadline__start").classList.add("subheadline--active")
	document.querySelector("#footer__button--start").classList.add("footer__button--active")
	document.querySelector("#section__questions").classList.add("section--active")
	document.getElementById("questions__main").textContent = ""
	document.getElementById("toggle__bookmarks").classList.remove("questions__toggle-bookmarks--active")
	loadQuestions()
	
}

function goToCreate(){
	switchSections()
	document.querySelector("#subheadline__create").classList.add("subheadline--active")
	document.querySelector("#footer__button--create").classList.add("footer__button--active")
	document.querySelector("#section__create").classList.add("section--active")
}

function goToProfile(){
	switchSections()
	document.querySelector("#subheadline__profile").classList.add("subheadline--active")
	document.querySelector("#footer__button--profile").classList.add("footer__button--active")
	document.querySelector("#section__profile").classList.add("section--active")
}

function discard() {
	let discard = document.querySelectorAll(".create__answer-area")
	discard.forEach((el) => {
		el.value = ""
	})
}

function submit(){
	let newObj = {
		question: document.getElementById("create__question").value,
		isBookmarked: true,
		showAnswer: false,
		answer: document.getElementById("create__answer").value,
		addition: document.getElementById("create__addition").value
	}
	if ((typeof newObj.question === "string" && newObj.question.length > 0) && (newObj.answer.length > 0)){
	questionsData.push(newObj)
	localStorage.setItem("localQuestions", JSON.stringify(questionsData))
	discard()
	}
}