const fs = require('fs');
const path = './steps';

fs.readdir(path, function (err, files) {

    files.forEach(element => {
        console.log(element)
        let newFileArray = []; 

        const allFileContents = fs.readFileSync(path + '/' + element, 'utf-8');
        allFileContents.split(/\r?\n/).forEach(line => {
            
            let code = element.replace('.stp', '')

            let n = line.search(/'(.*?)PRT'/gm);
            if (n != -1) {
                let newLine = line.replace(/'(.*?)PRT'/gm, `'` + code + "." + "$1" + "PRT'");       
                newFileArray.push(newLine);
            } else {
                newFileArray.push(line);
            }          
        });


        let newFile = fs.createWriteStream('./converted/new-' + element);

        fs.writeFileSync( './converted/new-' + element, newFileArray.join('\n'));

    });
});