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