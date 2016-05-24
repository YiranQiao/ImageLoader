const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const prograssEmitter = new MyEmitter();
export default class ImageLoader{

  constructor(){
    this._store={};

  }

  load(images){
    let total=0;
    let loaded=0;
    var IMLoaderPromise=new Promise((resolve, reject)=>{
      Object.getOwnPropertyNames(images).forEach((key)=>{
        total++;
        let url =images[key];
       // console.log("url"+url);
        let img= new Image();
        img.src=url;
        img.onload = () => {
          loaded++;
       //   console.log('current is '+loaded);
          this._store[key]=img;
          prograssEmitter.emit("prograss",loaded,total);
          if(total==loaded){
            resolve();
          }
        }
        img.onerror=(e)=>{
          console.log("33333"+e);
        }
      });
    });

    IMLoaderPromise.then(()=>{

      console.log("done loading!");
      alert("load images finished!");
    }).catch((err)=>{

       alert("load images faild! The reason is "+err);
    });
  }



on(element){

 // console.log("this emit load start!");
  prograssEmitter.on("prograss",(current,total)=>{
   // console.log("this emit !");
   let percentStr=(current/total)*100+"%";
   element.style.width=percentStr;
   element.innerHTML="current load "+current+", total is "+total+" "+percentStr;
  // console.log("this emit load done!");
 });
}


}
