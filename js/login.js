var username = null;
var password = null;
var ktext = null;
var kd = null;
var ks = null;


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    ktext = document.getElementById('key').value;
    kd = decrypt(plainkdText, ktext);
    ks = decrypt(plainksText, ktext);
    // alert(kd+ks);
    
    oss();
});

const plainkdText = '}eqxDspDwS	KTYE[tVfTZUw';
const plainksText = 'EwbEgBuGxfzfz`iafUeyfyJYHC';

function oss(){
    var checkbox = document.getElementById('privacy-agreement-checkbox');
 
    // 检查复选框是否被选择
    if (checkbox.checked) {
        const client = new OSS({
            region: 'oss-cn-hangzhou',
            authorizationV4: true,
            accessKeyId: kd,
            accessKeySecret: ks,
            bucket: 'web-leoyyy'
          });
    
          async function isExistObject(name, options = {}) {
            try {
              await client.head(name, options);
            //   window.alert("登录成功！");
              localStorage.setItem('loggedInUsername', username);
              localStorage.setItem('loggedInktext', ktext);
              localStorage.setItem('filepagenumber', null);
              window.location.replace('print.html');
            } catch (error) {
              if (error.code === "NoSuchKey") {
                window.alert("账号或密码错误！");
              }
            }
          }
          const name = "printMi/user/id2-1/"+username+"/"+password+".txt";
          isExistObject(name);
    } else {
        alert('请勾选《用户和隐私协议》');
    }
    
}

function forgetpwd(){
    alert("请联系管理员，谢谢！");
}

function decrypt(str, key) {
    let encrypted = "";
    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (j >= key.length) j = 0;
      encrypted += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(j));
    }
    return encrypted;
  }
