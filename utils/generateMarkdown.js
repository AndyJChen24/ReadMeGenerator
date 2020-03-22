function generateMarkdown(data,user) {
  
  return `
  ![CI](https://github.com/AndyJChen24/ReadMeGenerator/workflows/CI/badge.svg)
  
  # ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents
    * Installation
    * Usage
    * Credits
    * License
    * Tests

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.contribution}

  ## License
  ${data.license}

  ## Tests
  ${data.test}

  ## Questions
  *If you have any questions please visit my github*
  ${user.data.login}
  *github:* ${user.data.url}
  <img src = "${user.data.avatar_url}" width ="150px" height="150px">
  *email:* ${user.data.email}

`;
}
module.exports = generateMarkdown;
