var username = null;
var password = null;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    username = document.getElementById('username').value;
    password = document.getElementById('password').value;

    oss();         
});

var flag=false;

const client = new OSS({
    region: 'oss-cn-hangzhou',
    authorizationV4: true,
    accessKeyId: 'LTAI5tHvdTGrEuf4m4XpWwsa',
    accessKeySecret: 'bAEQd9wVr77rUdbXBjFEQKIsvk8Xpp',
    bucket: 'web-leoyyy'
  });

function oss(){
      async function isExistObject(name, options = {}) {
        try {
          await client.head(name, options);
          flag = true;
          window.alert("登录成功");
        //   printFormPage();
        } catch (error) {
          if (error.code === "NoSuchKey") {
            window.alert("账号或密码输入错误！");
          }
        }
      }
      // 判断指定Object是否存在。
      // 填写不包含Bucket名称在内的Object的完整路径，例如exampleobject.txt。
      const name = "printMi/user/id2-1/"+username+"/"+password+".txt";
      isExistObject(name);
}


