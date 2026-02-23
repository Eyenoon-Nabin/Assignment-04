//element dhorlam
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

//interview click korle count barbe
for (let btn of interviewButtons) {
    btn.addEventListener('click', function (event) {
        interviewCount++;
        interviewCountElement.innerText = interviewCount;

        const card = event.target.closest('.job-card');


        card.setAttribute('data-status', 'interview');
        const badge = card.querySelector('span');
        badge.innerText = 'INTERVIEW';
        badge.className = 'bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-md';
    });
}
//rejecte click korle count
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
//Tab Change Function 
function showCardsByStatus(status) {
    let visibleCount = 0;
    for (let card of allCards) {
        if (status === 'all' || card.getAttribute('data-status') === status) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    }
    if (visibleCount === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}
tabAll.addEventListener('click', function () { showCardsByStatus('all'); });
tabInterview.addEventListener('click', function () { showCardsByStatus('interview'); });
tabRejected.addEventListener('click', function () { showCardsByStatus('rejected'); });

//Tab Color Change
const allTabButtons = [tabAll, tabInterview, tabRejected];
function updateTabColors(activeTab, colorClass) {

    for (let tab of allTabButtons) {
        tab.classList.remove('btn-primary', 'btn-success', 'btn-error', 'text-white', 'px-6');
        tab.classList.add('btn-outline', 'border-gray-300', 'text-gray-600', 'px-4');
    }
    activeTab.classList.remove('btn-outline', 'border-gray-300', 'text-gray-600', 'px-4');
    activeTab.classList.add(colorClass, 'text-white', 'px-6');
}

function showCardsByStatus(status) {
    let visibleCount = 0;

    for (let card of allCards) {
        if (status === 'all' || card.getAttribute('data-status') === status) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    }

    if (visibleCount === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}

tabAll.addEventListener('click', function () {
    showCardsByStatus('all');
    updateTabColors(tabAll, 'btn-primary');
});

tabInterview.addEventListener('click', function () {
    showCardsByStatus('interview');
    updateTabColors(tabInterview, 'btn-success');
});

tabRejected.addEventListener('click', function () {
    showCardsByStatus('rejected');
    updateTabColors(tabRejected, 'btn-error');
});