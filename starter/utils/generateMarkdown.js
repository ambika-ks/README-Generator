
function LicenseBadge(License){
  const badges={
    Apache:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  return badges[License]
}


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
