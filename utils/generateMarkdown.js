let badge;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    license = 'Apache%202.0';
  }
  else if (license === 'GNU General Public License v3.0') {
    license = 'GPL%20v3.0';
  }
  else if (license === 'MIT License') {
    license = 'MIT';
  }
  else if (license === 'BSD 2-Clause "Simplified" License') {
    license = 'BSD%202--Clause';
  }
  else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    license = 'BSD%203--Clause';
  }
  else if (license === 'Boost Software License 1.0') {
    license = 'BSL%201.0';
  }
  else if (license === 'Creative Commons Zero v1.0 Universal') {
    license = 'CC0%20v1.0';
  }
  else if (license === 'Eclipse Public License 2.0') {
    license = 'EPL%202.0';
  }
  else if (license === 'GNU Affero General Public License v3.0') {
    license = 'AGPL%20v3.0';
  }
  else if (license === 'GNU General Public License v2.0') {
    license = 'GPL%20v2.0';
  }
  else if (license === 'GNU Lesser General Public License v2.1') {
    license = 'LGPL%20v2.1';
  }
  else if (license === 'Mozilla Public License 2.0') {
    license = 'MPL%202.0';
  }
  else if (license === 'The Unlicense') {
    license = 'Unlicense';
  }

  if (license !== 'None') {
    renderedBadge = `

![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br/>`;
    return renderedBadge
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// Conditionals to check if sections are empty and concatenate if they are not?
function generateMarkdown(data) {
  let markdown = `# ${data.title}${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

The license under which this project is covered is the ${data.license}.

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

My contact information:<br/>
GitHub: [${data.github}](https://github.com/${data.github})<br/>
Email: ${data.email}<br/>

Best practices for reaching me with questions regarding the project:<br/>
${data.questions}`
  return markdown;
}

module.exports = generateMarkdown;
