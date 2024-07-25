# ts-node-crud-package
A simple CRUD package using TypeScript and Node.js, with Express and MongoDB.

## Installation

### Global Dependencies

First, make sure you have TypeScript installed globally. If you encounter permission issues, consider one of the following solutions:

1. **Using `sudo` (Linux/macOS)**:
    ```sh
    sudo npm install -g typescript
    ```

2. **Changing npm's default directory**:
    ```sh
    mkdir "${HOME}/.npm-global"
    npm config set prefix "${HOME}/.npm-global"
    echo 'export PATH=$PATH:$HOME/.npm-global/bin' >> ~/.bashrc
    source ~/.bashrc
    npm install -g typescript
    ```

3. **Using a Node version manager (`nvm`)**:
    ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    nvm install node
    nvm use node
    npm install -g typescript
    ```

### Package Installation

To install the package in your project, run:
```sh
npm install ts-node-crud-package
