const container = document.getElementsByTagName('body')[0];

export const info = input => container.innerHTML += '<div class="info">' + input + '</div>';
export const success = input => container.innerHTML += '<div class="success">' + input + '</div>';
export const fail = input => container.innerHTML += '<div class="fail">' + input + '</div>';
