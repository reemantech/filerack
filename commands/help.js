function helpFn() {
  console.log(`
  syntax:\tfilerack command _directoryPath_\n
  commands listed below:\t description\n
          organize\t - organize the files in a folder in the current working directory(by default) or in specified directory\n 
          tree\t - display the tree representation of the files and folders in terminal\n
          help\t - self explanatory\n
      `);
}


module.exports={
    helpKey:helpFn,
}
