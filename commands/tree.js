let fs = require('fs');
let path = require('path');

function treeFn(dirPath) {
//   console.log("tree command implemented");
    if (dirPath == undefined) {
        // errorHandler.invalidPath();
        treeHelper(process.cwd(),"");
        return;
    } else {
        // -check for the valid current path
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath,"");
        } else {
            errorHandler.invalidPath();
            return;
        }
    }

}
    
function treeHelper(dirPath, indent){
    let isFile = fs.lstatSync(dirPath).isFile();

    if(isFile == true){
        let fileName = path.basename(dirPath);
        console.log(indent+"├──" + fileName );
    }else{
        let dirName = path.basename(dirPath);
        console.log(indent+"└──"+ dirName);

        let childrens = fs.readdirSync(dirPath);

        for(let i=0;i<childrens.length; i++){
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent+"\t");
        }
    }
}

module.exports={
    treeKey: treeFn,
}