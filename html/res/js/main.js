$(document).ready(()=>{
  const ip = $(".player-count").attr("data-ip");
  const port = $(".player-count").attr("data-port");

  $.get(`https://mcapi.us/server/status?ip=${ip}&port=${port}`, (result)=>{
    if (result.online) {
      $(".player-count").html(result.players.now);
    } else {
      $(".playercount").html("Server isn't online!");
    }
  });

  $(document).on("click",".server-ip",(e)=>{
    e.preventDefault();
    let t = $(".server-ip").html();
    let copy = document.createElement("textarea");
    copy.style.position = "absolute";
    copy.style.left = "-99999px";
    copy.style.top = "0";
    copy.setAttribute("id", "ta");
    document.body.appendChild(copy);
    copy.textContent = 'play.ultracraft.xyz';
    copy.select();
    document.execCommand("copy");
    $(".server-ip").html("<span class='extrapad'>IP Copied!</span>");
    setTimeout(function(){
      $(".server-ip").html(t);
      var copy = document.getElementById("ta");
      copy.parentNode.removeChild(copy);
    },800);
  });
  $(document).on('mousemove', function(e){
    $('.custom-cursor-sword').css({
      transform: 'matrix(1, 0, 0, 1, '+ (e.pageX) +', '+ (e.pageY - $(window).scrollTop()) +')',
    });
  });
});