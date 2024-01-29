const countdownElement = document.getElementById('countdown');

const countdown = (num, callback) => {
  if (num <= 0) {
    callback();
  } else {
    countdownElement.innerHTML = num;
    setTimeout(() => countdown(num - 1, callback), 1000);
  }
};

countdown(10, () => {
  countdownElement.innerHTML = '<span style="font-size: 24px; color: green;">Happy Independence Day</span>';
});
