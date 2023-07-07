function helpFn() {
  console.log(`
  syntax:\tfilerack command _directoryPath_\n
  commands listed below:\n
          organize \n
          tree \n
          help\n
      `);
}


module.exports={
    helpKey:helpFn,
}