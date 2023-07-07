errorHandler = {
    help: helpHandler,
    invalidPath: invalidPathHandler
}

function helpHandler( ) {
    console.log("💡 type: 'filerack help' without quotes for help\n");

    return;
}
function invalidPathHandler() {
    console.log("✖️  Invalid Path: path does not exist!\n");
    return;
}

module.exports = errorHandler;