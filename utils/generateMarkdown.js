// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// Conditionals to check if sections are empty and concatenate if they are not?
function generateMarkdown(data) {
  const markdown = `# ${data.title}

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
