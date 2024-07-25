 Here is a summarized version of the bundling process with Webpack in short points:

1. **Initialize a Node.js Project**:
   - Create a new directory.
   - Run `npm init -y` to initialize.

2. **Install Webpack**:
   - Run `npm install webpack webpack-cli --save-dev`.

3. **Create Source Files**:
   - Create a `src` directory.
   - Add your JavaScript files (e.g., `index.js`, `math.js`, `utils.js`).

4. **Configure Webpack**:
   - Create `webpack.config.js`.
   - Set entry point, output file, and mode.

5. **Update `package.json`**:
   - Add a build script: `"build": "webpack"`.

6. **Run Webpack**:
   - Execute `npm run build` to bundle the files.

7. **Verify Output**:
   - Check the `dist` directory for the bundled `bundle.js`.
   - Create an `index.html` file to include the bundle and open it in a browser.