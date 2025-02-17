const accountInfoElement = null;
const statusInputElement = null;
var kd = null;
var ks = null;

var flag2 = 1;

var flag3 = 0;
//word
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
//pdf
function aaaaa(){
  if(flag2 == 2) return;
  var inputElement = document.querySelector('.number-money-input');
  inputElement.value = "文件页数：正在加载中..";
  setTimeout(aaaaaa, 400);
}

function aaaaaa(){
  if(flag2 == 2) return;
  var inputElement = document.querySelector('.number-money-input');
  inputElement.value = "文件页数：正在加载中....";
  setTimeout(aaaaaaa, 400);
}

function aaaaaaa(){
  if(flag2 == 2) return;
  var inputElement = document.querySelector('.number-money-input');
  inputElement.value = "文件页数：正在加载中......";
  setTimeout(aaaaa, 400);
}

var flag5 = 0;
var flag6 = 0;

function inputfile(){
  flag7 = 0;
  kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
          ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
          const client = new OSS({
            region: 'oss-cn-hangzhou',
            accessKeyId: kd,
            accessKeySecret: ks,
            bucket: 'web-leoyyy'
          });
    async function isExistObject10(name, options = {}) {
    try {
      await client.head(name, options);
              flag6 = 0;
    } catch (error) {
      if (error.code === "NoSuchKey") {
        alert("服务离线，无法选中文件，谢谢！");
        flag6 = 1;
        return;
      }
    }
    }
    const name = "printMi/service/action.txt";
    isExistObject10(name);

  if(flag5 == 1 || flag6 == 1){
    return;
  }
  localStorage.setItem('filepagenumber', null);
  var inputElement = document.querySelector('.file-name-input');
  inputElement.value = "文件名称：";
  var inputElement2 = document.querySelector('.number-money-input');
  inputElement2.value = "文件页数：";
  flag2 = 1;
  flag3 = 0;
  var files = files = event.target.files; // 获取选中的文件列表
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
            setTimeout(aaaaa, 400);
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
                    if(localStorage.getItem('filepagenumber')!="null" && localStorage.getItem('filepagenumber')!= "NaN"){
                      
                    }
                    var button = document.querySelector('.upload-button');
                    button.disabled = false;
                    var button2 = document.querySelector('.confirm-button');
                    button2.disabled = false;
                    var button3 = document.querySelector('.exit-button');
                    button3.disabled = false;
                    flag5 = 0;
                    flag2 = 2;
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
                    if(localStorage.getItem('filepagenumber')!="null" && localStorage.getItem('filepagenumber')!= "NaN"){
                      
                    }
                    var button = document.querySelector('.upload-button');
                    button.disabled = false;
                    var button2 = document.querySelector('.confirm-button');
                    button2.disabled = false;
                    var button3 = document.querySelector('.exit-button');
                    button3.disabled = false;
                    flag5 = 0;
                    flag2 = 2;
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

function inputfile2(){
  kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
          ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
          const client = new OSS({
            region: 'oss-cn-hangzhou',
            accessKeyId: kd,
            accessKeySecret: ks,
            bucket: 'web-leoyyy'
          });
    async function isExistObject11(name, options = {}) {
    try {
      await client.head(name, options);
              flag6 = 0;
              localStorage.setItem('filepagenumber', null);
              var inputElement = document.querySelector('.file-name-input');
              inputElement.value = "文件名称：";
              var inputElement2 = document.querySelector('.number-money-input');
              inputElement2.value = "文件页数：";
              flag2 = 1;
              flag3 = 0;
              var files = files = file2;
              if(files != null && flag6 != 1){
                var inputElement = document.querySelector('.file-name-input');
                inputElement.value = "文件名称："+files.name;
                var button = document.querySelector('.upload-button');
                button.disabled = true;
                var button2 = document.querySelector('.confirm-button');
                button2.disabled = true;
                var button3 = document.querySelector('.exit-button');
                button3.disabled = true;
                files.length = 1;
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
                        setTimeout(aaaaa, 400);
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
                                if(localStorage.getItem('filepagenumber')!="null" && localStorage.getItem('filepagenumber')!= "NaN"){
                                  
                                }
                                var button = document.querySelector('.upload-button');
                                button.disabled = false;
                                var button2 = document.querySelector('.confirm-button');
                                button2.disabled = false;
                                var button3 = document.querySelector('.exit-button');
                                button3.disabled = false;
                                flag5 = 0;
                                flag2 = 2;
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
                                if(localStorage.getItem('filepagenumber')!="null" && localStorage.getItem('filepagenumber')!= "NaN"){
                                  
                                }
                                var button = document.querySelector('.upload-button');
                                button.disabled = false;
                                var button2 = document.querySelector('.confirm-button');
                                button2.disabled = false;
                                var button3 = document.querySelector('.exit-button');
                                button3.disabled = false;
                                flag5 = 0;
                                flag2 = 2;
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
                  })(files);
                }
    } catch (error) {
      if (error.code === "NoSuchKey") {
        alert("服务离线，无法选中文件，谢谢！");
        flag6 = 1;
        return;
      }
    }
    }
    const name = "printMi/service/action.txt";
    isExistObject11(name);

  if(flag5 == 1 || flag6 == 1){
    return;
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
    var file = fileInput.files[0];
    if(flag7 == 1){
      file = file2;
    }
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
        var file = fileInput.files[0];
        if(flag7 == 1){
          file = file2;
        }
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
    localStorage.setItem('loggedInUserIdToName', null);
    // localStorage.setItem('loggedInktext', null);
    window.location.replace('login.html');
  }else{
    idToName(name);
  }
};

function idToName(id){
    kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
    ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
    const client = new OSS({
      region: 'oss-cn-hangzhou',
      accessKeyId: kd,
      accessKeySecret: ks,
      bucket: 'web-leoyyy'
    });
    // 要下载的文件路径和本地保存路径
    const fileKey = 'printMi/user/UserIdToName.txt';
    // const localFilePath = 'C:/Users/Public/Documents/Leo打印/UserIdToName.txt';
 
    // 下载文件
    client.get(fileKey).then(result => {
    const fileContent = result.content.toString();
 
    // 将文件内容按行分割成数组
    const lines = fileContent.split('\n');
 
    // 查找特定学号
    const studentId = id;
    let UserName = null;
 
    lines.forEach(line => {
    const [id, name] = line.split(',');
    if (id.trim() === studentId) {
      UserName = name.trim();
    }
    });
 
    if (UserName) {
      localStorage.setItem('loggedInUserIdToName', UserName);
      const accountInfoElement = document.getElementById('account-info');
      accountInfoElement.textContent = `用户：${UserName}`;
    } else {
      localStorage.setItem('loggedInUserIdToName', null);
      const accountInfoElement = document.getElementById('account-info');
      accountInfoElement.textContent = `账户：${localStorage.getItem('loggedInUsername')}`;
    }
 
    // 清理下载的本地文件（可选）
    // fs.unlinkSync(localFilePath);
    }).catch(err => {
    console.error('下载文件时出错:', err);
    });
}
  
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
    var file = fileInput.files[0];
    if(flag7 == 1){
      file = file2;
    }
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
            uploadbaoliu();
            // alert("服务在线，正在上传，请等待，谢谢！");
            async function isExistObject8(name, options = {}) {
              try {
                await client.head(name, options);
                  // alert("正在打印，请等待，谢谢！");
                  hiddenFetch2();
                  flag7 = 0;
                  window.open('mate.html', '_blank');
              } catch (error) {
              if (error.code === "NoSuchKey") {
                  hiddenFetch();
                  flag7 = 0;
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
    var file = fileInput.files[0];
    if(flag7 == 1){
      file = file2;
    }
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

function hiddenFetch() {
  var UserToName = localStorage.getItem('loggedInUserIdToName');
  var myurl = null;
  if(UserToName == "null"){
    myurl = "https://api.chuckfang.com/LeoYYY_627/Leo打印服务通知/"+ "用户:" +localStorage.getItem('loggedInUsername') + "——网页端%0A" +"文档:" + filename2 +"··"+ localStorage.getItem('filepagenumber') +"页··" + localStorage.getItem('filepagenumber')*0.25+"元";
  }else{
    myurl = "https://api.chuckfang.com/LeoYYY_627/Leo打印服务通知/"+ "用户:" +localStorage.getItem('loggedInUserIdToName') + "——网页端%0A" +"文档:" + filename2 +"··"+ localStorage.getItem('filepagenumber') +"页··" + localStorage.getItem('filepagenumber')*0.25+"元";
  }
  fetch(myurl)
 .then(response => response.json())
 .then(data => {
      console.log('请求成功，数据如下:', data);
    })
 .catch(error => {
      console.error('请求失败:', error);
    });
}

function hiddenFetch2() {
  var UserToName = localStorage.getItem('loggedInUserIdToName');
  var myurl = null;
  if(UserToName == "null"){
    myurl = "https://api.chuckfang.com/LeoYYY_627/Leo打印服务通知/"+ "用户:" +localStorage.getItem('loggedInUsername') + "——网页端%0A" +"文档:" + filename2 +"··"+ localStorage.getItem('filepagenumber') +"页··" + "无需支付";
  }else{
    myurl = "https://api.chuckfang.com/LeoYYY_627/Leo打印服务通知/"+ "用户:" +localStorage.getItem('loggedInUserIdToName') + "——网页端%0A" +"文档:" + filename2 +"··"+ localStorage.getItem('filepagenumber') +"页··" + "无需支付";
  }
  fetch(myurl)
 .then(response => response.json())
 .then(data => {
      console.log('请求成功，数据如下:', data);
    })
 .catch(error => {
      console.error('请求失败:', error);
    });
}

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

var filename2 = "";

function uploadbaoliu(){
      kd = decrypt(plainkdText, localStorage.getItem('loggedInktext'));
      ks = decrypt(plainksText, localStorage.getItem('loggedInktext'));
      const client = new OSS({
        region: 'oss-cn-hangzhou',
        accessKeyId: kd,
        accessKeySecret: ks,
        bucket: 'web-leoyyy'
      });
  async function uptransfile2(){
    var file = fileInput.files[0];
    if(flag7 == 1){
      file = file2;
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

      var fullPath = file.name;
 
      // 使用 split('.') 方法分割字符串
      var parts = fullPath.split('.');
      // 获取文件名和文件类型
      var filename = parts[0];
      var filetype = parts[1];
      filename2 = fullPath;

      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let uid = '';
      for (let i = 0; i < 5; i++) {
        uid += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      const result = await client.put("printMi/user/id2-1/" + localStorage.getItem('loggedInUsername') + "/文件记录/" + filename +"("+uid+")"+"."+filetype, file, {
        mime: mimeType,
      });
    } catch (e) {
      alert("文件转换上传失败，请重试，谢谢！");
    }
  }

  uptransfile2();
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
  var file1 = fileInput.files[0];
  if(flag7 == 1){
    file1 = file2;
  }
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
        localStorage.setItem('filepagenumber', null);
        localStorage.setItem('loggedInUserIdToName', null);
        window.location.replace('login.html');
      }
  });

// 注销按钮
function zhuxiao(){
  var userConEx = confirm("您确定注销登录？");
  if(userConEx){
    window.
    localStorage.setItem('loggedInUsername', null);
    localStorage.setItem('loggedInktext', null);
    localStorage.setItem('loggedInUserIdToName', null);
    localStorage.setItem('filepagenumber', null);
    window.location.replace('login.html');
  }
}

var flag7 = 0;
var file2;
document.getElementById('body').addEventListener('dragover', function(e) {
  e.preventDefault();
});

document.getElementById('body').addEventListener('drop', function(e) {
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    file2 = file;
    if (file && (file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type === 'application/pdf')) {
      flag7 = 1;
      inputfile2();
    } else {
        alert('请上传Word或PDF格式的文件');
    }
});

document.getElementById('fileInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
    if (file) {

    }
});
