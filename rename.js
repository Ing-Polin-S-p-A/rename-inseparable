const fs = require('fs');

let argv = require('minimist')(process.argv.slice(2));

const source = (undefined != argv.s) ? argv.s : './steps';
const dest = (undefined != argv.d) ? argv.d : './converted/';

fs.readdir(source, function (err, files) {
    if (err) {
        console.log(err.message)
    } else {
    files.forEach(element => {
        console.log(element)
        let newFileArray = []; 

        const allFileContents = fs.readFileSync(source + '/' + element, 'utf-8');
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


        let newFile = fs.createWriteStream(dest + 'new-' + element);

        try {
        fs.writeFileSync( './converted/new-' + element, newFileArray.join('\n'));

        } catch {
            console.log(err.log)
        }

    });
    }


});