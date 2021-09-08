const bookmarksButton = document.querySelector("#toggle__bookmarks")

function toggleBookmarksOn() {
	let notBookmarked = document.querySelectorAll("article.tile:not(.bookmarked)")
	notBookmarked.forEach(tile => {
		tile.classList.add("tile--hidden")
	})
}

function toggleBookmarksOff() {
	let notBookmarked = document.querySelectorAll("article.tile:not(.bookmarked)")
	notBookmarked.forEach(tile => {
		tile.classList.remove("tile--hidden")
	})
}

function createBookmarksClickEvent() {
let bookmarks = document.querySelectorAll(".tile__bookmark")
bookmarks.forEach(function(bookmark){
	bookmark.addEventListener("click", () => {
		bookmark.parentNode.classList.toggle("bookmarked")
		bookmark.classList.toggle("tile__bookmark--active")
		if (bookmarksButton.classList.contains("questions__toggle-bookmarks--active")){
			toggleBookmarksOn()
		}
	})
})}

function toggleBookmarks() {
	if (bookmarksButton.classList.contains("questions__toggle-bookmarks--active")){
		toggleBookmarksOff()
		bookmarksButton.classList.remove("questions__toggle-bookmarks--active")
	} else {
		toggleBookmarksOn()
		bookmarksButton.classList.add("questions__toggle-bookmarks--active")
	}
}

bookmarksButton.onclick = toggleBookmarks

function createAnswerButtonsClickEvent() {
	let answerButtons = document.querySelectorAll(".tile__answer-button")
	answerButtons.forEach(button => {
		button.addEventListener("click", () => {
			button.nextSibling.classList.toggle("tile__answer--hidden")
		})
	})
}

function switchSections() {
	let subheadlines = document.querySelectorAll(".subheadline")
	let footerButtons = document.querySelectorAll(".footer__button")
	subheadlines.forEach(function (subheadline){
		subheadline.classList.remove("subheadline--active")
	})
	footerButtons.forEach(function(button) {
		button.classList.remove("footer__button--active")
	})
}

document.querySelector("#footer__button--start").addEventListener("click", () => {
	switchSections()
	document.querySelector("#subheadline__start").classList.add("subheadline--active")
	document.querySelector("#footer__button--start").classList.add("footer__button--active")
	window.scrollTo(0,0)
})

document.querySelector("#footer__button--create").addEventListener("click", () => {
	switchSections()
	document.querySelector("#subheadline__create").classList.add("subheadline--active")
	document.querySelector("#footer__button--create").classList.add("footer__button--active")
	window.scrollTo((window.innerWidth)+1,0)
})

document.querySelector("#footer__button--profile").addEventListener("click", () => {
	switchSections()
	document.querySelector("#subheadline__profile").classList.add("subheadline--active")
	document.querySelector("#footer__button--profile").classList.add("footer__button--active")
	window.scrollTo(((window.innerWidth)*2)+1,0)
})

createBookmarksClickEvent()
createAnswerButtonsClickEvent()