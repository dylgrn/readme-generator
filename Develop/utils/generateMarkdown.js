// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  }
  return `
## Badges

![badge](https:img.shields.io/badge/license-${license.license}-brightgreen)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  }
  return `
  ## License

  ![badge](https:img.shields.io/badge/license-${license.license}-brightgreen)
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }
  return `
  ## License

  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
generateMarkdown = input => {
  return `
# ${input.title}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Description 
${input.description}
  
## Installation

${input.installation}
  
## Usage

${input.usuage} 
  
## Credits

${input.credits}

${renderLicenseSection(license)}

${renderLicenseBadge(license)}
  
## Features

${input.features}

## Contributing

${input.contributing}

## Tests

${input.test}

## https://github.com/${input.githubusername}
`;
}

module.exports = generateMarkdown;
