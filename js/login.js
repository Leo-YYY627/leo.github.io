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

var flag=false;

function oss(){
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
          flag = true;
          window.alert("登录成功！");
          window.location.replace('calculator.html');
        } catch (error) {
          if (error.code === "NoSuchKey") {
            window.alert("账号或密码错误！");
          }
        }
      }
      const name = "printMi/user/id2-1/"+username+"/"+password+".txt";
      isExistObject(name);
}

function decrypt(str, key) {
    let encrypted = "";
    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (j >= key.length) j = 0;
      encrypted += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(j));
    }
    return encrypted;
  }

