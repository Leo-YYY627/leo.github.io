window.onload = function() {
    var name = localStorage.getItem('loggedInUsername');
    let ktext = localStorage.getItem('loggedInktext');
    var flag1 = null;
  
    if (name == "null") {
      localStorage.setItem('loggedInUsername', null);
      localStorage.setItem('loggedInktext', null);
      window.location.replace('login.html');
    }else{
      const accountInfoElement = document.getElementById('account-info');
      accountInfoElement.textContent = `账号：${name}`;
    }
    var divElement = document.getElementById('pay-money');
    divElement.textContent = "您需要支付：￥"+localStorage.getItem('filepagenumber')*0.25+"元";

    const myurl = document.getElementById('myurl');
    myurl.src = "http://api.chuckfang.com/LeoYYY_627/Leo%E6%89%93%E5%8D%B0/%E6%89%93%E5%8D%B0%E6%88%90%E5%8A%9F";
  };

  

