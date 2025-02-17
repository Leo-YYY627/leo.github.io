window.onload = function() {
    var name = localStorage.getItem('loggedInUsername');
    let ktext = localStorage.getItem('loggedInktext');
    var flag1 = null;
  
    if (name == "null") {
      localStorage.setItem('loggedInUsername', null);
      localStorage.setItem('loggedInUserIdToName', null);
      window.location.replace('login.html');
    }else{
      var UserToName = localStorage.getItem('loggedInUserIdToName');
      if(UserToName == "null"){
        const accountInfoElement = document.getElementById('account-info');
        accountInfoElement.textContent = `账号${name}`;
      }else{
        const accountInfoElement = document.getElementById('account-info');
        accountInfoElement.textContent = `用户：${localStorage.getItem('loggedInUserIdToName')}`;
      }
    }
  };

  

