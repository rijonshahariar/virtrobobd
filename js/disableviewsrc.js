
  document.onkeydown = function(e) {
       if (e.ctrlKey && 
           (e.keyCode === 67 || 
            e.keyCode === 86 || 
            e.keyCode === 85 || 
            e.keyCode === 117)) {
           alert('NOT ALLOWED :D');
           return false;
       } else {
           return true;
       }
};
   