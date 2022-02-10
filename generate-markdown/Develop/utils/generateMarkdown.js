// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  if (license ==='Apache') {
    return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license ==='Unlicense') {
    return ''
  }
  if (license ==='MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
  }
  if (license ==='Berkeley Source Distribution (BSD)') {
    return '![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license ==='GNU General Public License (GPL)') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license ==='Mozilla Public License (MPL)') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)'
  }
  if (license ==='Eclipse Public License (EPL)') {
    return '![License: EPL](https://img.shields.io/badge/License-EPL_1.0-red.svg)(https://opensource.org/licenses/EPL-1.0)'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
- ${data.why}
- ${data.problem}
- ${data.learn}

## Table of Contents

- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [Contribute](#Contribute)

## License

- ${renderLicense(data.license)}

Refer to [https://choosealicense.com/](https://choosealicense.com/).

## Installation

To install this application, please follow the steps below:
- ${data.install}

## Usage

![Screenshot of Application](assets/images/screenshot.png)

![Recording of Application](assets/recordings/recording.mp4)

## Features

- ${data.features}

## Credits

- ${data.contributors}
- ${data.thirdparty}

## Tests

- ${data.test}

## Questions 

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

## Contribute

- ${data.contribute}

The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

`;
}

module.exports = generateMarkdown;
