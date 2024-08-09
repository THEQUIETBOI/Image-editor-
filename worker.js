document.addEventListener("DOMContentLoaded", () => {
  const frame = document.getElementById("iframe");
  const button = document.getElementById("updateButton"); // Assumes you have a button with this ID

  button.addEventListener("click", () => {
      const url = canvas();
      frame.src = url;
  });
});

function canvas() {
  const word = document.getElementById("text").value;
  const height = document.getElementById("height").value;
  const width = document.getElementById("width").value;
  const color = document.getElementById("color").value;
  const font = `${document.getElementById("font").value}px bold`;
const background = document.getElementById("background").value;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
 ctx.fillStyle = background;
ctx.fillRect(0, 0, width, height);
  ctx.textAlign = "center";
  ctx.fillStyle = color;
  
  ctx.font = font;
  ctx.fillText(word, width / 2, height / 2);

  return canvas.toDataURL("image/png");
}





function bye() {


}