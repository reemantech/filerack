let fs = require('fs');
let path = require('path');

function organizeFn(dirPath) {
    //   console.log("organise command implemented");
    // 1. input -> directory path given
    let destPath;
    if (dirPath == undefined) {
      // errorHandler.invalidPath();
      destPath = process.cwd();
      return;
    } else {
      // check for the valid current path
      let doesExist = fs.existsSync(dirPath);
      if (doesExist) {
  
        // 2. create -> organized_files directory when its not created
        destPath = path.join(dirPath, "organized_files");
        if (fs.existsSync(destPath) == false) {
          fs.mkdirSync(destPath);
        }
  
      } else {
        errorHandler.invalidPath();
        return;
      }
    }
    organizeHelper(dirPath, destPath);
  
    
  }
  
  function organizeHelper(src, dest){
      // 3. identify the category of all the files present in that folder
      let childNames= fs.readdirSync(src);
      // console.log(childNames);
  
      for( let i = 0; i<childNames.length; i++){
          let childAddress = path.join(src, childNames[i]);
  
          let isFile = fs.lstatSync(childAddress).isFile();
  
          if(isFile){
              // console.log(childNames[i]); 
  
              let category = getCategory(childNames[i]);
              // console.log(childNames[i],"belongs to this ", category);
              
              // 4. copy/cut files to organized directory their corresponding caterogy folders
              sendFiles(childAddress, dest, category);
          }
      }
  
    
  }
  function sendFiles(srcFilePath, dest, category){
      let categoryPath = path.join(dest, category);
  
      if(fs.existsSync(categoryPath) == false){
          fs.mkdirSync(categoryPath);
      }
  
      let fileName = path.basename(srcFilePath);
      let destFilePath = path.join(categoryPath,fileName);
      fs.copyFileSync(srcFilePath, destFilePath);
      fs.unlinkSync(srcFilePath); // remove the original file
  }
  function getCategory(fileName){
      let ext = path.extname(fileName);
      ext = ext.slice(1);
  
      for(let type in types){
          let currentType = types[type];
  
          for(let i=0;i <currentType.length; i++){
              if(ext == currentType[i]){
                  return type;
              }
          }
      }
  
      return "others";
  }

  module.exports={
    organizedKey:organizeFn,
  }