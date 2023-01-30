// function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.name}
${LicenseBadge(answers.license)} 
## Table of Content
  - [Project Description](#description)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Installation](#installation)
  - [Questions](#questions)
  - [License](#license)

## Description
  ${answers.description}

## Usage
  Run the command " ${answers.usage} "and answer the prompted Questions

## Installation
  Command to install dependencies : ${answers.install}\n
  Command to run tests : ${answers.tests}

## Contributing
  ${answers.contribute}

## Questions
  E-mail Address : ${answers.email}\n
  GitHub Username: ${answers.github}

## License
  Licensed under the ${answers.license} License
  
`;
}

module.exports = generateMarkdown;
