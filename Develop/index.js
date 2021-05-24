const markDown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer')
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: projectNameInput => {
              if (projectNameInput) {
                return true;
              } else {
                console.log('Please enter your project name!');
                return false;
              }
            }  
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your app.',
            validate: projectDescriptionInput => {
              if (projectDescriptionInput) {
                return true;
              } else {
                console.log('Project descreption required!');
                return false;
              }
            }  
        },
        {
            type: 'input',
            name: 'githubusername',
            message: 'Whst is your github username?',
            validate: gitUserNameInput => {
                if (gitUserNameInput) {
                  return true;
                } else {
                  console.log('Github username required!');
                  return false;
                }
              }  
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Is there any installation instructions?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Give a description of the usage of your app',
            validate: projectusageInput => {
              if (projectusageInput) {
                return true;
              } else {
                console.log('Usage description required!');
                return false;
              }
            }  
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Provide a list of collaborators if any'
        },
        {
            type: 'input',
            name: 'test',
            message: 'list tests for your application'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose your license if any',
            choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0']
        },
        {
            type: 'input',
            name: 'features',
            message: 'List features of your app'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'List contributers for your app'
        }
])
};

const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileName, data, err => {
            if (err) {
              reject(err);
              return;
            }
            resolve({
              ok: true,
              message: 'File created!'
            });
          });
    });
}

promptQuestions()
.then(readMeData => {
    return markDown(readMeData)
})
.then(readMeFile => {
    return writeToFile(readMeFile)
})