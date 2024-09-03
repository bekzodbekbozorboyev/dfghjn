let regularHeart = document.getElementById("notliked");
let faHeart = document.getElementById("liked");

export function markLike() {
  regularHeart.style.display = "none";
  faHeart.style.display = "block";
}
