const accountInfoElement = null;
const statusInputElement = null;
var kd = null;
var ks = null;

var flag2 = 1;

var flag3 = 0;
function aa(){
  if(flag3 >=10){ 
    kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
    ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
    const client = new OSS({
      region: 'oss-cn-hangzhou',
      accessKeyId: kd,
      accessKeySecret: ks,
      bucket: 'web-leoyyy'
    });
    // 删除文件
    const filePath = 'printMi/webpage/1.txt';
    client.delete(filePath).then(response => {
    }).catch(error => {
    });

    const filePath2 = 'printMi/webpage/我的打印转换.docx';
    client.delete(filePath2).then(response => {
    }).catch(error => {
    });
    return;
  }
  if(flag2 == 2) return;
  var inputElement = document.querySelector('.number-money-input');
  inputElement.value = "文件页数：正在加载中..";
  setTimeout(aaa, 400);
}

function aaa(){
  if(flag2 == 2) return;
  var inputElement = document.querySelector('.number-money-input');
  inputElement.value = "文件页数：正在加载中....";
  setTimeout(aaaa, 400);
}

function aaaa(){
  flag3++;
  if(flag2 == 2) return;
  var inputElement = document.querySelector('.number-money-input');
  inputElement.value = "文件页数：正在加载中......";
  setTimeout(aa, 400);
}

var flag5 = 0;

function inputfile(){
  if(flag5 == 1){
    return;
  }
  localStorage.setItem('filepagenumber', null);
  var inputElement = document.querySelector('.file-name-input');
  inputElement.value = "文件名称：";
  var inputElement2 = document.querySelector('.number-money-input');
  inputElement2.value = "文件页数：";
  flag2 = 1;
  flag3 = 0;
  var files = event.target.files; // 获取选中的文件列表
  if (files.length > 0) {
      var inputElement = document.querySelector('.file-name-input');
      inputElement.value = "文件名称："+files[0].name;
      var button = document.querySelector('.upload-button');
      button.disabled = true;
      var button2 = document.querySelector('.confirm-button');
      button2.disabled = true;
      var button3 = document.querySelector('.exit-button');
      button3.disabled = true;
      flag5 = 1;
  }
  for (var i = 0; i < files.length; i++) {
    (function (currentFile) {
      // 使用自执行函数来创建独立的作用域，解决闭包导致的变量问题
      var reader = new FileReader();
      reader.onload = function (e) {
        var fileExtension = currentFile.name.split('.').pop().toLowerCase();
        if (fileExtension === 'docx' || fileExtension === 'doc') {
          // 更准确地处理.docx和.doc文件，从从服务端获取页数
          kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
          ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
          const client = new OSS({
            region: 'oss-cn-hangzhou',
            accessKeyId: kd,
            accessKeySecret: ks,
            bucket: 'web-leoyyy'
          });
          async function isExistObject(name, options = {}) {
            try {
              await client.head(name, options);
              setTimeout(isExistObject("printMi/webpage/1.txt"), 1000);
            } catch (error) {
              if (error.code === "NoSuchKey") {
                wordfilepage();
              }
            }
          }
          const name = "printMi/webpage/1.txt";
          isExistObject(name);

          setTimeout(aa, 400);
        } else if (fileExtension === 'pdf') {
          var button = document.querySelector('.upload-button');
          button.disabled = false;
          var button2 = document.querySelector('.confirm-button');
          button2.disabled = false;
          var button3 = document.querySelector('.exit-button');
          button3.disabled = false;
          flag5 = 0;
            kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
            ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
              const client = new OSS({
              region: 'oss-cn-hangzhou',
              accessKeyId: kd,
              accessKeySecret: ks,
              bucket: 'web-leoyyy'
            });
            async function isExistObject6(name, options = {}) {
            try {
              await client.head(name, options);
              // 处理.pdf文件
              var loadingTask = pdfjsLib.getDocument(e.target.result);
              loadingTask.promise.then(function (pdf) {
              var pageCount = pdf.numPages;
              localStorage.setItem('filepagenumber', pageCount);
              if (files.length > 0) {
                if (files.length > 0) {
                var inputElement = document.querySelector('.number-money-input');
                inputElement.value = "文件页数："+pageCount+"页·············您无需支付！";
                }
              }
              });
            } catch (error) {
            if (error.code === "NoSuchKey") {
              // 处理.pdf文件
              var loadingTask = pdfjsLib.getDocument(e.target.result);
              loadingTask.promise.then(function (pdf) {
              var pageCount = pdf.numPages;
              localStorage.setItem('filepagenumber', pageCount);
              if (files.length > 0) {
                if (files.length > 0) {
                var inputElement = document.querySelector('.number-money-input');
                inputElement.value = "文件页数："+pageCount+"页·············应付金额：￥"+pageCount*0.25+"元";
                }
              }
              });
              }
            }
          }
          const name = "printMi/user/id2-1/" + localStorage.getItem('loggedInUsername') + "/合作伙伴/partner.txt";
          isExistObject6(name);
        }
      };
      reader.readAsArrayBuffer(currentFile);
    })(files[i]);
  }
}

var pageCount = null;
document.getElementById('fileInput').addEventListener('change', function(event) {
  inputfile();
});

function wordfilepage(){
      kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
      ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
      const client = new OSS({
        region: 'oss-cn-hangzhou',
        accessKeyId: kd,
        accessKeySecret: ks,
        bucket: 'web-leoyyy'
      });

    const file = fileInput.files[0];
    if (!file) {
      alert("请选择一个文件！");
      return;
    }else{
      const fileContent = '';
      const fileName = '1.txt';
      // 将文本内容转为Blob对象（模拟文件）
      const blob = new Blob([fileContent], { type: 'text/plain' });
      const file = new File([blob], fileName);

      async function uploadToOSS() {
        try {
          // 执行上传操作
          const result = await client.put("printMi/webpage/1.txt", file);
        } catch (e) {
          // 执行操作失败
        }
      }

      async function uptransfile(){
        const file = fileInput.files[0];
        try {
          var flagFileType = 0;
          // 根据文件扩展名设置MIME类型
          let mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"; // 默认.docx
     
          if (file.type === "application/msword") { // 对于.doc文件
            mimeType = "application/msword";
            flagFileType = 1;
          } else if (file.type === "application/pdf") { // 对于.pdf文件
            return;
          }
    
          if(flagFileType <= 1){
            const result = await client.put(`printMi/webpage/我的打印转换.docx`, file, {
            mime: mimeType,
            });
          }
          uploadToOSS();
          repeatedTask();
        } catch (e) {
          alert("文件转换上传失败，请重试，谢谢！");
        }
      }

      uptransfile();
    }
}

function repeatedTask() {
      kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
      ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
      const client = new OSS({
        region: 'oss-cn-hangzhou',
        accessKeyId: kd,
        accessKeySecret: ks,
        bucket: 'web-leoyyy'
      });

      const fileContent = '';
      const fileName = '12.txt';
      // 将文本内容转为Blob对象（模拟文件）
      const blob = new Blob([fileContent], { type: 'text/plain' });
      const file = new File([blob], fileName);

      const ossFileUrl = 'https://web-leoyyy.oss-cn-hangzhou.aliyuncs.com/printMi/webpage/1.txt';
 
  // 使用Fetch API获取文件内容
  fetch(ossFileUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.text(); // 获取文本内容
      })
      .then(text => {
          const numberText = text.trim();
          const number = parseFloat(numberText);
          localStorage.setItem('filepagenumber', number);
      })
      .catch(error => {
      });

      if(localStorage.getItem('filepagenumber')=="null" || localStorage.getItem('filepagenumber')== "NaN"){
        setTimeout(repeatedTask, 1000);
      }else{
        flag2 = 2;
        async function uploadToOSS() {
          try {
            const result = await client.put("printMi/webpage/12.txt", file);
          } catch (e) {
          }
        }
  
        uploadToOSS();
        var button = document.querySelector('.upload-button');
        button.disabled = false;
        var button2 = document.querySelector('.confirm-button');
        button2.disabled = false;
        var button3 = document.querySelector('.exit-button');
        button3.disabled = false;
        flag5 = 0;
        
            async function isExistObject7(name, options = {}) {
            try {
              await client.head(name, options);
                var inputElement = document.querySelector('.number-money-input');
                inputElement.value = "文件页数："+localStorage.getItem('filepagenumber')+"页·············您无需支付！";
            } catch (error) {
            if (error.code === "NoSuchKey") {
                var inputElement = document.querySelector('.number-money-input');
                inputElement.value = "文件页数："+localStorage.getItem('filepagenumber')+"页·············应付金额：￥"+localStorage.getItem('filepagenumber')*0.25+"元";
              }
            }
          }
          const name = "printMi/user/id2-1/" + localStorage.getItem('loggedInUsername') + "/合作伙伴/partner.txt";
          isExistObject7(name);

        
        // alert("文档页数: "+localStorage.getItem('filepagenumber'));
      }      
}

setTimeout(servicestatuss, 100);
function servicestatuss(){
    kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
    ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
    const client = new OSS({
      region: 'oss-cn-hangzhou',
      accessKeyId: kd,
      accessKeySecret: ks,
      bucket: 'web-leoyyy'
    });
    async function isExistObject(name, options = {}) {
    try {
      await client.head(name, options);
      async function isExistObject2(name2, options2 = {}) {
        try {
          await client.head(name2, options2);
          
          var inputElement = document.querySelector('.status-input');
          inputElement.value = "服务状态：在线/在忙";
                  
        } catch (error) {
          if (error.code === "NoSuchKey") {
            var inputElement = document.querySelector('.status-input');
            inputElement.value = "服务状态：在线";
          }
        }
        }
        const name2 = "printMi/statc/1.txt";
        isExistObject2(name2);
              
    } catch (error) {
      if (error.code === "NoSuchKey") {
        var inputElement = document.querySelector('.status-input');
        inputElement.value = "服务状态：离线";
      }
    }
    }
    const name = "printMi/service/action.txt";
    isExistObject(name);

    setTimeout(servicestatuss, 500);
}

window.onload = function() {
  var name = localStorage.getItem('loggedInUsername');
  let ktext = localStorage.getItem('loggedInktext');
  localStorage.setItem('filepagenumber', null);
  var flag1 = null;

  if (name == "null") {
    localStorage.setItem('loggedInUsername', null);
    localStorage.setItem('loggedInktext', null);
    window.location.replace('login.html');
  }else{
    const accountInfoElement = document.getElementById('account-info');
    accountInfoElement.textContent = `账号：${name}`;
  }
};
  
  function statc(){
    kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
    ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
    const client = new OSS({
      region: 'oss-cn-hangzhou',
      accessKeyId: kd,
      accessKeySecret: ks,
      bucket: 'web-leoyyy'
    });
    const fileContent = '';
    const fileName = '1.txt';
    // 将文本内容转为Blob对象（模拟文件）
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const file = new File([blob], fileName);

    async function uploadToOSS() {
      try {
        // 执行上传操作
        const result = await client.put("printMi/statc/1.txt", file);
      } catch (e) {
        // 执行操作失败
      }
    }

    uploadToOSS();
  }

  const uploadButton = document.getElementById("uploadButton");
  const fileInput = document.getElementById("fileInput");

function updataprintfile(){
    kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
    ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
    const client = new OSS({
      region: 'oss-cn-hangzhou',
      accessKeyId: kd,
      accessKeySecret: ks,
      bucket: 'web-leoyyy'
    });
  async function uploadFile() {
    const file = fileInput.files[0];
    if (!file) {
      alert("请选择一个文件！");
      return;
    }

    try {
      var flagFileType = 0;
      // 根据文件扩展名设置MIME类型
      let mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"; // 默认.docx
 
      if (file.type === "application/msword") { // 对于.doc文件
        mimeType = "application/msword";
        flagFileType = 1;
      } else if (file.type === "application/pdf") { // 对于.pdf文件
        mimeType = "application/pdf";
        flagFileType = 2;
      }

      if(flagFileType <= 1){
        const result = await client.put(`printMi/data/我的打印测试.docx`, file, {
        mime: mimeType,
        });
      }else if(flagFileType == 2){
        const result = await client.put(`printMi/data/我的打印测试.pdf`, file, {
            mime: mimeType,
            });
      }
      
    } catch (e) {
      alert("文件上传失败，请重试，谢谢！");
    }
  }

  async function isExistObject3(name, options = {}) {
    if(localStorage.getItem('filepagenumber')=="null" || localStorage.getItem('filepagenumber')== "NaN"){
      alert("文件获取失败，请重试，谢谢！");
      return;
    }
    try {
      await client.head(name, options);
      async function isExistObject4(name2, options2 = {}) {
        try {
          await client.head(name2, options2);
          // inputElement.value = "服务状态：在线/在忙";
          alert("服务在忙，请稍后重试，谢谢！");
                  
        } catch (error) {
          if (error.code === "NoSuchKey") {
            // inputElement.value = "服务状态：在线";
            statc();
            logform();
            uploadFile();
            // alert("服务在线，正在上传，请等待，谢谢！");
            async function isExistObject8(name, options = {}) {
              try {
                await client.head(name, options);
                  // alert("正在打印，请等待，谢谢！");
                  window.open('mate.html', '_blank');
              } catch (error) {
              if (error.code === "NoSuchKey") {
                  window.open('pay.html', '_blank');
                }
              }
            }
            const name = "printMi/user/id2-1/" + localStorage.getItem('loggedInUsername') + "/合作伙伴/partner.txt";
            isExistObject8(name);
          }
        }
        }
        const name2 = "printMi/statc/1.txt";
        isExistObject4(name2);
              
    } catch (error) {
      if (error.code === "NoSuchKey") {
        alert("服务离线，无法打印，谢谢！");
      }
    }
    }
    const name = "printMi/service/action.txt";
    const file = fileInput.files[0];
    if (!file) {
      alert("请选择一个文件！");
      return;
    }else{
      var userConEx2 = confirm("打印页数：“"+localStorage.getItem('filepagenumber')+"页”");
      if(userConEx2){
        isExistObject3(name);
      }else{
        return;
      }
    }
    
}
const plainkdText = '}eqxDspDwS	KTYE[tVfTZUw';
const plainksText = 'EwbEgBuGxfzfz`iafUeyfyJYHC';

function decrypt(str, key) {
  let encrypted = "";
  for (let i = 0, j = 0; i < str.length; i++, j++) {
    if (j >= key.length) j = 0;
    encrypted += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(j));
  }
  return encrypted;
}

function getCurrentDateTime() {
  const now = new Date();
  
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始计数，需加1并补零
  const day = String(now.getDate()).padStart(2, '0'); // 补零
  const hours = String(now.getHours()).padStart(2, '0'); // 补零
  const minutes = String(now.getMinutes()).padStart(2, '0'); // 补零
  const seconds = String(now.getSeconds()).padStart(2, '0'); // 补零
  
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
  return formattedDateTime;
}

function logform(){
  kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
  ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
  const client = new OSS({
    region: 'oss-cn-hangzhou',
    accessKeyId: kd,
    accessKeySecret: ks,
    bucket: 'web-leoyyy'
  });
  const file1 = fileInput.files[0];
  const fileContent = localStorage.getItem('loggedInUsername')+","+file1.name+","+localStorage.getItem('filepagenumber')+","+getCurrentDateTime();
  const fileName = '1.txt';
  // 将文本内容转为Blob对象（模拟文件）
  const blob = new Blob([fileContent], { type: 'text/plain' });
  const file = new File([blob], fileName);

  async function uploadToOSSlog() {
    try {
      // 执行上传操作
      const result = await client.put("printMi/log/打印日志.txt", file);
    } catch (e) {
      // 执行操作失败
    }
  }

  uploadToOSSlog();
}
  
uploadButton.addEventListener("click", updataprintfile);

  // 退出按钮
  const exitButton = document.querySelector('.exit-button');
  exitButton.addEventListener('click', () => {
      var userConEx = confirm("您确定退出登录？");
      if(userConEx){
        window.
        localStorage.setItem('loggedInUsername', null);
        localStorage.setItem('loggedInktext', null);
        localStorage.setItem('filepagenumber', null);
        window.location.replace('login.html');
      }
  });
