initURL: async function (Args) {

  console.log("initialiezed")
 
  


  console.log("initialiezed")
      const screenshotTarget = document.body;
     var base64image="test"
      const createdScript = document.createElement('script');
      createdScript.src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
      createdScript.async = true;
      createdScript.onload = () => {
      html2canvas(screenshotTarget).then((canvas) => {
      base64image = canvas.toDataURL("image/png");
  

  //console.log("ARGS", Args )
  console.log(domLoade)
  _args = Args;
  var cssRef=document.querySelectorAll("[rel=stylesheet]");
  var buttons = document.getElementsByTagName('button');
  var links = document.getElementsByTagName('a');
  var formSubmits=document.getElementsByTagName("input");
  let buttonObj = [];
  let linkObj = [];
  let formSubmitsObj=[];
  var cssRefLinks=[]

  //console.log("buttons :",buttons)
  //console.log("links :",links)
  //console.log("formSubmits :" ,formSubmits)

  for(let i=0;i<cssRef.length;i++){
          //console.log("cssRef :",cssRef[i].href)
          cssRefLinks.push(cssRef[i].href)
      }

  for (let item of buttons) {
      item.innerText && item.innerText.length > 0 && buttonObj.push({ text: item.innerText.replace(/[^a-zA-Z ]/g, ""), nodename: item.nodeName})
  }
  for (let item of links) {
      //console.log("***** Link", item.nodeName)
      item.innerText && item.innerText.length > 0 && linkObj.push({ text: item.innerText?item.innerText.replace(/[^a-zA-Z ]/g, ""):item.innerHTML, nodename: item.nodeName})
  }
  for (let item of formSubmits){
      //console.log("*****Form", item.nodeName)
      //console.log("*****FormType :",item.getAttribute("type"))
      if(item.getAttribute("type") == "submit"){  
          //console.log(item.getAttribute("value") && item.getAttribute("value").length > 0)
              item.getAttribute("value") && item.getAttribute("value").length > 0 && formSubmitsObj.push({ text: item.getAttribute("value"), nodename: item.nodeName})
      }
  }
      console.log("initialiezed2")
  //console.log("screenshot :",base64image)
fetch('https://hyper-target-api-develpment.netlify.app/.netlify/functions/website/initializeUrl', {
  method: 'POST', // or 'PUT'
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({websiteId: _args[0] , userId: _args[1] ,uuId: sessionStorage.getItem("key") , isLoadedHyper:isLoadedForClick , url: location.host + location.pathname,domain:window.location.host,utm_params:getUtmParams(window.location.search),source:document.referrer ,clickEvents: { anchors: linkObj, buttons: buttonObj,formSubmits:formSubmitsObj},screenshot:base64image,cssLinks:cssRefLinks,socialRef:sessionStorage.getItem("socialRef"),socialUtms:sessionStorage.getItem("socialUtms")}),
  })
  .then((response) => response.json())
  .then((data) => {
      console.log(data)
      if(data?.sessionStorageSaveSource?.needupdate){
          sessionStorage.setItem("socialRef",data.sessionStorageSaveSource.data.source);
          sessionStorage.setItem("socialUtms",data.sessionStorageSaveSource.data.utm_params);
      }
      //console.log('Hyper-Tracked succees!',data);
  })
  .catch((error) => {
      console.error('Hyper-Tracked-Error:', error);
  });
 
});
  };
 document.body.appendChild(createdScript)
domLoade=true
e.preventDefault();

 
},