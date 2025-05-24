function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.querySelector('.container').style.display = 'none';
   
  }
  function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.querySelector('.container').style.display = 'flex';
    document.getElementById("tagp2").style.display = "inline-block";
    document.getElementById("tagp2").style.color = "red"
    document.getElementById("tagp").style.textDecoration = "line-through";
  }
  function cancel() {
    document.getElementById("popup").style.display = "none";
    document.querySelector('.container').style.display = 'flex';
  }