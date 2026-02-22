// 1 element dhorlam
const interviewCountElement = document.getElementById('interview-count');
const rejectedCountElement = document.getElementById('rejected-count');
const emptyState = document.getElementById('empty-state');
const allCards = document.querySelectorAll('.job-card');

//tab button dhorlam
const tabAll = document.getElementById('tab-all');
const tabInterview = document.getElementById('tab-interview');
const tabRejected = document.getElementById('tab-rejected');

let interviewCount = 0;
let rejectedCount = 0;

const interviewButtons = document.querySelectorAll('.btn-success');
const rejectedButtons = document.querySelectorAll('.btn-error');

//2 interview click korle count barbe
for (let btn of interviewButtons) {
    btn.addEventListener('click', function (event) {
        interviewCount++;
        interviewCountElement.innerText = interviewCount;

        const card = event.target.closest('.job-card');


        card.setAttribute('data-status', 'interview');
        const badge = card.querySelector('span');
        badge.innerText = 'INTERVIEW';
        badge.className = 'bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-md'; >> //use ai here
    });
}
//3 rejecte click korle count
for (let btn of rejectedButtons) {
    btn.addEventListener('click', function (event) {
        rejectedCount++;
        rejectedCountElement.innerText = rejectedCount;

        const card = event.target.closest('.job-card');
        card.setAttribute('data-status', 'rejected');

        const badge = card.querySelector('span');
        badge.innerText = 'REJECTED';
        badge.className = 'bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-md';
    });
}
