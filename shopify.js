const puppeteer=require("puppeteer");

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
   
   let services= await page.$$(".Polaris-Stack__Item_yiyol");
//    let links= await page.$$("._3zp18");
   let value= [];
           for (let i = 0; i < services.length; i++){
               value[i] = await page.evaluate(
            function (element) { return element.innerText }, services[i]);
           }
           console.log(value);
           await page.click('a[href="/services/marketing-and-sales"]');
           await page.click('a[href="/services/marketing-and-sales/email-marketing"]')
        //    const nameArr = await page.$$eval('._2nyp3>a', el => el.map(x => x.getAttribute('aria-label')));
        //    const href = await page.$$eval(".title-and-badge.style-scope.ytd-video-renderer>a", el => el.map(x => x.getAttribute("href")));
        //    let nameArr= await page.$$('h2[class="_1QICn qxAvk"]');
        //    console.log(nameArr);
           let Namevalue= [];
          let namewosplit=[];
           await page.waitForSelector("._3PwHx");
        let nameArr=await page.$$("._3PwHx");
        // console.log(nameArr.length);
           for (let j = 0; j < nameArr.length; j++){
            Namevalue[j] = await page.evaluate(
            function (element) { return element.textContent}, nameArr[j]);
        }
        console.table(Namevalue);

 }
catch(err){
console.log("err found"+err);
}
})();