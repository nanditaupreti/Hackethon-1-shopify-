const { default: jsPDF } = require("jspdf");
const puppeteer=require("puppeteer");
const fs=require("fs");
let path=require("path");
let mainDirPath="";
(async function main(){
try{
const browser=await puppeteer.launch({headless:false,
   defaultViewport:null,
   args:["--start-maximized","--disable notification"]});
   console.log("browser opened");
   let page=await browser.newPage();
   await page.goto("https://experts.shopify.com/");
   console.log("site opened");
   await page.click("a[href='/create-a-job']");
   await page.type("#PolarisTextField2","miloh31398@secbuf.com",{delay:100});
   await page.keyboard.press('Enter',{delay:1000});
   await page.waitForSelector(".ui-password__input.next-input.next-input--invisible.js-password-input.transferable-input");
   await page.type(".ui-password__input.next-input.next-input--invisible.js-password-input.transferable-input","123456789",{delay:1000});
   await page.waitFor(1000);
   await page.click(".ui-button.ui-button--primary.ui-button--size-large.captcha__submit");
   console.log("logged in");
   await page.waitForSelector(".Polaris-Stack__Item_yiyol>.Polaris-Link_yj5sy");
   await page.click(".Polaris-Stack__Item_yiyol>.Polaris-Link_yj5sy");
  
   // let services= await page.$$("._1QICn.qxAvk");
         
           await page.click('a[href="/services/marketing-and-sales"]');
           await page.click('a[href="/services/marketing-and-sales/email-marketing"]')
           let nameValue1= [];
           await page.waitForSelector("._3PwHx");
           let nameArr=await page.$$("._3PwHx");
   
           for (let j = 0; j < nameArr.length; j++){
            nameValue1[j] = await page.evaluate(
            function (element) { return element.textContent}, nameArr[j]);

        }
  

        
      await page.click("a[href='/services/store-setup']");
      await page.click('a[href="/services/store-setup/customize-design"]');
      let nameValue2=[];
      await page.waitForSelector("._3PwHx");
        let nameArr2=await page.$$("._3PwHx");
           for (let j = 0; j < nameArr2.length; j++){
            nameValue2[j] = await page.evaluate(
            function (element) { return element.textContent}, nameArr2[j]);
        }
  

        
        await page.click('a[href="/services/development-and-troubleshooting"]');
        await page.click('a[href="/services/development-and-troubleshooting/custom-apps-integrations"]');
        let nameValue3=[];
        await page.waitForSelector("._3PwHx");
          let nameArr3=await page.$$("._3PwHx");
             for (let j = 0; j < nameArr3.length; j++){
              nameValue3[j] = await page.evaluate(
              function (element) { return element.textContent}, nameArr3[j]);
          }
     



        await page.click('a[href="/services/visual-content-and-branding"]');
        await page.click('a[href="/services/visual-content-and-branding/develop-brand-strategy"]');
        let nameValue4=[];
        await page.waitForSelector("._3PwHx");
          let nameArr4=await page.$$("._3PwHx");
             for (let j = 0; j < nameArr4.length; j++){
              nameValue4[j] = await page.evaluate(
              function (element) { return element.textContent}, nameArr4[j]);
          }
          


          await page.click('a[href="/services/content-writing"]');
        await page.click('a[href="/services/content-writing/write-product-descriptions"]');
        let nameValue5=[];
        await page.waitForSelector("._3PwHx");
          let nameArr5=await page.$$("._3PwHx");
             for (let j = 0; j < nameArr5.length; j++){
              nameValue5[j] = await page.evaluate(
              function (element) { return element.textContent}, nameArr5[j]);
          }
        

          await page.click('a[href="/services/expert-guidance"]');
        await page.click('a[href="/services/expert-guidance/business-strategy-guidance"]');
        let nameValue6=[];
        await page.waitForSelector("._3PwHx");
          let nameArr6=await page.$$("._3PwHx");
             for (let j = 0; j < nameArr6.length; j++){
              nameValue6[j] = await page.evaluate(
              function (element) { return element.textContent}, nameArr6[j]);
          }
          fileMaker(nameValue1,nameValue2,nameValue3,nameValue4,nameValue5,nameValue6);
   

 }
catch(err){
console.log("err found"+err);
}
})();


  
 
   function fileMaker(valueArr1,valueArr2,valueArr3,valueArr4,valueArr5,valueArr6){
      
      let topicFromInput=valueArr1;
      let cwd=process.cwd();
       let mainDirPath1=path.join(cwd);
   
      let cTopicPath=path.join(mainDirPath1,"content Writing");
       fs.mkdirSync(cTopicPath); 
    for(let i=0;i<topicFromInput.length;i++){
          let modulePath=path.join(cTopicPath,"content"+i+".txt");
        fs.writeFileSync(modulePath,valueArr1[i]);
      
    }
    let cTopicPath1=path.join(mainDirPath1,"Development and Trouble");
       fs.mkdirSync(cTopicPath1); 
    for(let i=0;i<valueArr2.length;i++){
          let modulePath1=path.join(cTopicPath1,"development"+i+".txt");
        fs.writeFileSync(modulePath1,valueArr2[i]);
      
    }
    let cTopicPath2=path.join(mainDirPath1,"Expert guidance");
       fs.mkdirSync(cTopicPath2); 
    for(let i=0;i<valueArr3.length;i++){
          let modulePath2=path.join(cTopicPath2,"expert"+i+".txt");
        fs.writeFileSync(modulePath2,valueArr3[i]);
      
    }
    let cTopicPath3=path.join(mainDirPath1,"Marketing and sales");
       fs.mkdirSync(cTopicPath3); 
    for(let i=0;i<valueArr4.length;i++){
          let modulePath3=path.join(cTopicPath3,"marketing"+i+".txt");
        fs.writeFileSync(modulePath3,valueArr4[i]);
      
    }
    let cTopicPath4=path.join(mainDirPath1,"Store setup");
       fs.mkdirSync(cTopicPath4); 
    for(let i=0;i<valueArr5.length;i++){
          let modulePath4=path.join(cTopicPath4,"Store"+i+".txt");
        fs.writeFileSync(modulePath4,valueArr5[i]);
      
    }
    let cTopicPath5=path.join(mainDirPath1,"Development and Trouble");
       fs.mkdirSync(cTopicPath5); 
    for(let i=0;i<valueArr6.length;i++){
          let modulePath5=path.join(cTopicPath5,"development"+i+".txt");
        fs.writeFileSync(modulePath5,valueArr6[i]);
      
    }
    
   }
