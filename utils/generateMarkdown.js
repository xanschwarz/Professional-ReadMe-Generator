// Initialize variable to pass information for the badge to be displayed.
let badge;

// Function that returns a license badge based on which license is chosen by the user.
// If there is no license, return an empty string.
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    badge = 'Apache%202.0';
  }
  else if (license === 'GNU General Public License v3.0') {
    badge = 'GPL%20v3.0';
  }
  else if (license === 'MIT License') {
    badge = 'MIT';
  }
  else if (license === 'BSD 2-Clause "Simplified" License') {
    badge = 'BSD%202--Clause';
  }
  else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    badge = 'BSD%203--Clause';
  }
  else if (license === 'Boost Software License 1.0') {
    badge = 'BSL%201.0';
  }
  else if (license === 'Creative Commons Zero v1.0 Universal') {
    badge = 'CC0%20v1.0';
  }
  else if (license === 'Eclipse Public License 2.0') {
    badge = 'EPL%202.0';
  }
  else if (license === 'GNU Affero General Public License v3.0') {
    badge = 'AGPL%20v3.0';
  }
  else if (license === 'GNU General Public License v2.0') {
    badge = 'GPL%20v2.0';
  }
  else if (license === 'GNU Lesser General Public License v2.1') {
    badge = 'LGPL%20v2.1';
  }
  else if (license === 'Mozilla Public License 2.0') {
    badge = 'MPL%202.0';
  }
  // Last option uses 'else if' to exclude 'None' option.
  else if (license === 'The Unlicense') {
    badge = 'Unlicense';
  }

  if (license !== 'None') {
    // Includes spacing to go in the ReadMe and sets up to be used as a link.
    renderedBadge = `

[![badge](https://img.shields.io/badge/license-${badge}-brightgreen)]`;
    return renderedBadge
  }
  else {
    return ``
  }
}

// Function that returns the license link.
// If there is no license, return an empty string.
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return `(https://choosealicense.com/licenses/apache-2.0/)`;
  }
  else if (license === 'GNU General Public License v3.0') {
    return `(https://choosealicense.com/licenses/gpl-3.0/)`;
  }
  else if (license === 'MIT License') {
    return `(https://choosealicense.com/licenses/mit/)`;
  }
  else if (license === 'BSD 2-Clause "Simplified" License') {
    return `(https://choosealicense.com/licenses/bsd-2-clause/)`;
  }
  else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return `(https://choosealicense.com/licenses/bsd-3-clause/)`;
  }
  else if (license === 'Boost Software License 1.0') {
    return `(https://choosealicense.com/licenses/bsl-1.0/)`;
  }
  else if (license === 'Creative Commons Zero v1.0 Universal') {
    return `(https://choosealicense.com/licenses/cc0-1.0/)`;
  }
  else if (license === 'Eclipse Public License 2.0') {
    return `(https://choosealicense.com/licenses/epl-2.0/)`;
  }
  else if (license === 'GNU Affero General Public License v3.0') {
    return `(https://choosealicense.com/licenses/agpl-3.0/)`;
  }
  else if (license === 'GNU General Public License v2.0') {
    return `(https://choosealicense.com/licenses/gpl-2.0/)`;
  }
  else if (license === 'GNU Lesser General Public License v2.1') {
    return `(https://choosealicense.com/licenses/lgpl-2.1/)`;
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `(https://choosealicense.com/licenses/mpl-2.0/)`;
  }
  else if (license === 'The Unlicense') {
    return `(https://choosealicense.com/licenses/unlicense/)`;
  }
  else {
    return ``;
  }
}

// Function that returns the license section of README.
// If there is no license, return an empty string.
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}

The license under which this project is covered is the ${license}. Learn more about that license [here]${renderLicenseLink(license)}`
  }
  else {
    return ``
  }
}

// Function to generate markdown for README. Calls license functions as appropriate.
function generateMarkdown(data) {
  let markdown = `# ${data.title}${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

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

## License${renderLicenseSection(data.license)}

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
