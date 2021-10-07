// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if none, return empty string
  if (license === 'None') {
    return '';
  } else if (license === 'MIT/Apache-2.0') {
    return `![license badge](https://img.shields.io/badge/license-MIT%2FApache--2.0-blue.svg)`
  } else {
    return `![license badge](https://img.shields.io/badge/license-${license}-green.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return '';
  } else {
    return `* [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
  ## License
  This project is licensed under the ${license} License.
  `;
  }
  return ''
}

// function to check contributionConfirm to create the contribution section
function contributingSection(confirm, answer) {
  if (confirm) {
    return `
  ## Contributing
  If you would like to contribute to my project or have ideas for improvements please ${answer}
  `;
  }
  return `
  ## Contributing
  I appreciate your interest in improving this project, however I am not accepting contributions at this time.
  `;
}

// function to create the contribution table of contents link
function contributingLink(confirm) {
  if (confirm) {
    return `* [Contributing](#contributing)`
  } else {
    return ''
  };
};

// function to create the tests section

// function to create the tests table of contents link

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(mockData);

  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation-instructions)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  ${contributingLink(data.contributionConfirm)}

  ## Installation Instructions
  ${data.installInstructions}

  ## Usage
  ${data.useInstructions}

  ${contributingSection(data.contributionConfirm, data.contribution)}

  ## Questions
  If you have any questions or need to report bugs please reach out to me at [${data.github}](https://www.github.com/${data.github}) or ${data.email}
  
  
${renderLicenseSection(data.license)}
`;
}

module.exports = {generateMarkdown};
