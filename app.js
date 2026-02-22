// Shonkha Dekhanor jayga dhoelam
const interviewCountElement = document.getElementById('interview-count');
const rejectedCountElement = document.getElementById('rejected-count');

let interviewCount = 0;
let rejectedCount = 0;

//Interview & Rejected
const interviewButtons = document.querySelectorAll('.btn-success');
const rejectedButtons = document.querySelectorAll('.btn-error');

// ৩. Interview button o Event Listener
for (let btn of interviewButtons) {
    btn.addEventListener('click', function () {
        interviewCount++;
        interviewCountElement.innerText = interviewCount;
    });
}

//Rejected button o Event Listener
for (let btn of rejectedButtons) {
    btn.addEventListener('click', function () {
        rejectedCount++;
        rejectedCountElement.innerText = rejectedCount;
    });
}