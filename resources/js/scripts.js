const HEADLINE_START = document.querySelector("#h2__start")
const HEADLINE_CREATE = document.querySelector("#h2__create")
const HEADLINE_PROFILE = document.querySelector("#h2__profile")

const BUTTON_START = document.querySelector("#footer__button--start")
const BUTTON_CREATE = document.querySelector("#footer__button--create")
const BUTTON_PROFILE = document.querySelector("#footer__button--profile")

let ButtonBookmarks = document.querySelector("#toggle__bookmarks")

let bookmarks = document.querySelectorAll(".tile__bookmark")
	bookmarks.forEach(function(i){
	i.addEventListener("click", () => {
		i.parentNode.classList.toggle("bookmarked")
		i.classList.toggle("tile__bookmark--active")
	
})})

function toggleBookmarkFilter() {
	ButtonBookmarks.classList.toggle("questions__toggle-bookmarks--active")

	let notBookmarked = document.querySelectorAll("article.tile:not(.bookmarked)")
	notBookmarked.forEach(tile => {
		tile.classList.toggle("tile--hidden")
	})
}

function buttonStart() {
	HEADLINE_START.classList.add("h2--active")
	HEADLINE_CREATE.classList.remove("h2--active")
	HEADLINE_PROFILE.classList.remove("h2--active")

	BUTTON_START.classList.add("footer__button--active")
	BUTTON_CREATE.classList.remove("footer__button--active")
	BUTTON_PROFILE.classList.remove("footer__button--active")

	window.scrollTo(0,0)
}

function buttonCreate() {
	HEADLINE_START.classList.remove("h2--active")
	HEADLINE_CREATE.classList.add("h2--active")
	HEADLINE_PROFILE.classList.remove("h2--active")

	BUTTON_START.classList.remove("footer__button--active")
	BUTTON_CREATE.classList.add("footer__button--active")
	BUTTON_PROFILE.classList.remove("footer__button--active")

	window.scrollTo((window.innerWidth)+1,0)
}

function buttonProfile() {
	HEADLINE_START.classList.remove("h2--active")
	HEADLINE_CREATE.classList.remove("h2--active")
	HEADLINE_PROFILE.classList.add("h2--active")

	BUTTON_START.classList.remove("footer__button--active")
	BUTTON_CREATE.classList.remove("footer__button--active")
	BUTTON_PROFILE.classList.add("footer__button--active")

	window.scrollTo((window.innerWidth)*2+1,0)
}

ButtonBookmarks.onclick = toggleBookmarkFilter

let answerButtons = document.querySelectorAll(".tile__answer-button")
answerButtons.forEach(function(i){
	i.addEventListener("click", () => {
		i.nextSibling.classList.toggle("tile__answer--hidden")
})})

BUTTON_START.onclick = buttonStart
BUTTON_CREATE.onclick = buttonCreate
BUTTON_PROFILE.onclick = buttonProfile
