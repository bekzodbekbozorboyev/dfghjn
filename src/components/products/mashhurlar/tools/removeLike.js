let regularHeart = document.getElementById("notliked");
let faHeart = document.getElementById("liked");

export function removeLike() {
  faHeart.style.display = "none";
  regularHeart.style.display = "block";
}
