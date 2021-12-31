
// output a promt 
process.stdout.write('prompt > ');

//the Stdin data event fires after a user types in a line 
process.stdin.on('data', (data) => {
    
    const cmd = data.toString().trim();//takes "data" makes it strings and aliass it to CMD
    if(cmd === "pwd"){ // if CMD is the string "pwd" ...
        process.stdout.write(process.cwd()); //write working directory list
    } else { //otherwise give old format
        process.stdout.write( "you wrote " + cmd);
        }
    process.stdout.write('\nprompt > ') // reoutputs a promt 
})