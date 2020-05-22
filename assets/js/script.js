
function toggleMenu() {
    var x = document.getElementById("hide-menu");
    if( x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else
    {
        x.style.visibility = "hidden";
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-5rem";
    document.getElementById("hide-menu").style.visibility = "hidden";
}
  prevScrollpos = currentScrollPos;
}

function copy(val) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = val;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("이메일 주소가 복사되었습니다.")
  }
