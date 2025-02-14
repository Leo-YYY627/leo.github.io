window.onload = function() {
    var name = localStorage.getItem('loggedInUsername');
    let ktext = localStorage.getItem('loggedInktext');
    var flag1 = null;
  
    if (name == "null") {
      localStorage.setItem('loggedInUsername', null);
      window.location.replace('login.html');
    }else{
      const accountInfoElement = document.getElementById('account-info');
      accountInfoElement.textContent = `账号：${name}`;
    }
  };

  

