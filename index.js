
function createPopup(text) {
    alert("AAA")
    // Create the pop-up element
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = text;
  
    // Add the pop-up to the target element
    document.getElementById('target').appendChild(popup);
    setTimeout(() => {
      popup.style.opacity = 0;
    }, 2000);
  }
  