# Contribution Guide for Anime-Ecstasy

Welcome to Anime-Ecstasy! We appreciate your interest in contributing. Please follow the guidelines below to ensure a smooth contribution process.

## Contribution Flow

1. **Fork the Repository**
   - Fork the repository from the `deploy` branch to your own GitHub account.

2. **Clone Your Fork**
   - Clone your forked repository to your local machine:
     ```bash
     git clone https://github.com/<your-username>/Anime-Ecstasy.git
     cd Anime-Ecstasy
     ```

3. **Set Up the Project**
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```
   - The app should now be running locally (usually at `http://localhost:5173`).

4. **Create a New Branch**
   - Always create a new branch from `deploy` for your work:
     ```bash
     git checkout -b <feature/bugfix/issue-type>/<short-description>
     ```

5. **Make Your Changes**
   - Implement your fix, feature, or documentation update.
   - Ensure your code follows the existing style and passes linting:
     ```bash
     npm run lint
     ```

6. **Commit and Push**
   - Commit your changes with a clear message:
     ```bash
     git add .
     git commit -m "<type>: <short description>"
     git push origin <your-branch-name>
     ```

7. **Raise a Pull Request (PR)**
   - Open a PR **from your branch to the `test` branch** of the main repository.
   - Fill out the PR template (see below for format).
   - Tag relevant code owners if necessary: `@Chandu6702 @mithalikp25`

8. **Review and Merge**
   - Your PR will be reviewed by the maintainers.
   - Once approved and tested, it will be merged into `test` and later deployed from `deploy`.

## Issue Types

When raising an issue, please use one of the following types:
- **Bug**: For broken logic or UI
- **Feature**: For implementing something new from scratch
- **Enhancement**: For improving any logic or UI
- **Doc**: For updating documentation

## Issue Format

Please use the following format when raising an issue:
```
**Type:** Bug/Feature/Enhancement/Doc
**Description:**
A clear and concise description of the problem or proposal.
**Steps to Reproduce (for bugs):**
1. Go to '...'
2. Click on '...'
3. See error
**Expected Behavior:**
A clear description of what you expected to happen.
**Screenshots (if applicable):**
**Additional Context:**
```

## Pull Request (PR) Format

When raising a PR, please use the following format:
```
**Type:** Bug/Feature/Enhancement/Doc
**Description:**
A brief description of what your PR does.
**Related Issue:**
Link to the issue this PR addresses (if any).
**Checklist:**
- [ ] My code follows the code style of this project
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation (if needed)
- [ ] My changes generate no new warnings or errors
- [ ] I have tested my changes locally
```

## Deployment
- The `deploy` branch is the main branch for deployment.
- All PRs should be made to the `test` branch. After review and testing, changes will be merged into `deploy` for production deployment.

## Code Owners
- The following users are code owners and may review/approve your PRs: `@Chandu6702 @mithalikp25`

## License
- This project is licensed under the MIT License. By contributing, you agree that your contributions will be licensed under the same.

---
Thank you for contributing to Anime-Ecstasy! If you have any questions, feel free to open an issue or reach out to the maintainers. 