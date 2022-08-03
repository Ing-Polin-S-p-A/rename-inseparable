# Rename Inseparable 

this simple script allows you to rename "child" components in one step.

the script is written in nodejs. You must have nodejs installed on your PC. Please install node with the instructions from [node documentation](https://nodejs.org/it/download/).

to be able to run the program:

```bash
node rename.js
```

this command renames the childs elements of the drawings in step format contained in the `steps` folder and generates the result in the `converted` folder.

the following optional parameters are present:

- -s = modify the source folder (then steps)
- -d = change destination folder (then converted)

this is an example:

```bash
node rename.js -s sorgente -d destinazione
```

This example rename the steps located into `sorgente` folder in `destinazione` folder.
