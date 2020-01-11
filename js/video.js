
export function videoResponsive() { let mq576 = window.matchMedia("(max-width: 576px)"),
        video = document.getElementById("video");
  
        if (mq576.matches) { video.innerHTML = '<a href="./media/infografia.mp4" target="_blank" class="texto-video">Ver video</a>'
      
        } else { video.innerHTML = '<video class="video" src="media/infografia.mp4" controls>'
        }
      };
