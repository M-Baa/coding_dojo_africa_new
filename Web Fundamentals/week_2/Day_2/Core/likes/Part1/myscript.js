let likes = 0;
const likeButton = document.querySelector('#likeButton');
const likeCount = document.querySelector('#likeCount');

likeButton.addEventListener('click', incrementLikes);

function incrementLikes() {
  likes++;
  likeCount.textContent = likes + (likes === 1 ? ' Like' : ' Likes');
}