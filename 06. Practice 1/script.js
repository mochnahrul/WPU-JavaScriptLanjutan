const videos = Array.from(document.querySelectorAll("[data-duration]"));
const videoJS = videos.filter((video) => video.textContent.includes("JAVASCRIPT"));
const pTotalVideo = document.querySelector(".total-video");
const pTotalDuration = document.querySelector(".total-duration");

const totalVideoJS = videoJS.length;

let getTime = videoJS
  .map((item) => item.dataset.duration)
  .map((time) => {
    const parts = time.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((total, second) => total + second);

const hour = Math.floor(getTime / 3600);
getTime = getTime - hour * 3600;
const minute = Math.floor(getTime / 60);
const second = getTime - minute * 60;

pTotalVideo.textContent = `${totalVideoJS} video`;
pTotalDuration.textContent = `${hour} jam, ${minute} menit, ${second} detik`;
