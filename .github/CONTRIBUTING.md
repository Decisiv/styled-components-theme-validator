# CONTRIBUTING

## TABLE OF CONTENTS

- [For Developers](#for-developers)
  - [Pull request process](#pull-request-process)
- [For Maintainers](#for-maintainers)
  - [Conventional commit messages](#conventional-commit-messages)
  - [Pull request merge process](#pull-request-merge-process)
- [Contributor Covenant Code of Conduct](#contributor-covenant-code-of-conduct)

# For Developers

When contributing to this repository, please first discuss the change you wish
to make by creating an issue. Please note we have a code of conduct. Please
follow it in all your interactions with the project.

## Pull Request Process

- Create a fork of this repository, then clone the fork to your local
  development environment:

  `git clone https://github.com/Decisiv/styled-components-theme-validator.git`

- Create a branch with a meaningful name reflecting the bug fix or new feature:

  `git checkout -b my-new-feature`

- Make your changes (including updates/additions to tests) and commit:

  `git add` `git commit`

- Make sure that the tests still pass:

  `yarn review`

- Push your branch:

  `git push -u origin my-new-feature`

- [Submit a pull request](https://github.com/Decisiv/styled-components-theme-validator/compare)
  to the upstream `styled-components-theme-validator` repository.
- Enter a descriptive title for the pull request and fill in the PR template,
  describing the proposed changes.
- Wait for a maintainer to review your PR. Follow up on any comments from the
  reviewer, and wait for a maintainer to merge the PR.

# For Maintainers

This repository uses
[`semantic-release`](https://semantic-release.gitbooks.io/semantic-release) to
manage an automatic release process, which includes...

- bumping the version number, as appropriate, following the
  [Semantic Versioning](https://semver.org/) specification
- building and publishing the NPM module
- creating a
  [new release on GitHub](https://github.com/Decisiv/styled-components-theme-validator/releases),
  including a change-log

## Conventional commit messages

To support this, any merges or commits to the `master` branch must follow a
formalized commit message convention. We are using
["Conventional Commits"](https://conventionalcommits.org/). All commits on the
`master` branch should consist of a **header**, a **body** and a **footer**. The
header has a special format that includes a **type**, a **scope** and a
**subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory but the **scope** of the header is optional. If
omitting the scope, also omit the parentheses.

### Type

The **type** should be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space,
  formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Scope

The **scope** should be the Jira ticket number, if applicable. If there is no
Jira message, the scope may be omitted, or some other clarifying value may be
provided.

### Subject

The **subject** should be a brief description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

The **body** is the appropriate location for a longer description of the change
being committed (or merged).

Just as in the subject, use the imperative, present tense: "change" not
"changed" nor "changes".

### Footer

The **footer** should contain any information about **Breaking Changes**. A
"breaking change" is one that requires a change in client code in order for the
client to successfully incorporate the change. Breaking changes trigger a major
version bump upon release.

Breaking Changes should start with the word `BREAKING CHANGE:` with a space or
two newlines. The rest of the commit message is then used to describe details of
the breaking change.

### Examples

_A minimal commit message:_

```
ci: tweak the configuration for NPM module deployment
```

_An example with all fields completed:_

```
feat(JIRA-999): change the font weight "bold" to "heavy"

This change is really just an example of something that would break the API.

BREAKING CHANGE: theme.fontWeights.bold has been removed and is replaced by
  theme.fontWeights.heavy.

  To migrate please replace all references to theme.fontWeights.bold with
  theme.fontWeights.heavy
```

## Pull request merge process

In almost every instance it is preferable to **squash and merge** pull requests
into `master`. This provides a clean commit history and the opportunity for the
maintainer to replace a potentially noisy set of git log messages with a single
commit log entry matching the required
[conventional commit message](#conventional-commit-messages) format.

GitHub provides UI tools for performing this squash and merge. Please use those
tools for consistency.

## Contributor Covenant Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of
experience, nationality, personal appearance, race, religion, or sexual identity
and orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or
  advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic
  address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, or to ban temporarily or permanently any
contributor for other behaviors that they deem inappropriate, threatening,
offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team npmjs@decisiv.com. All complaints will
be reviewed and investigated and will result in a response that is deemed
necessary and appropriate to the circumstances. The project team is obligated to
maintain confidentiality with regard to the reporter of an incident. Further
details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 1.4, available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/
