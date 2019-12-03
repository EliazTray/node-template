module.exports = {
  // for node project
  // ! 这个文件并非有效，只是作为样板而存在
  "root": true,
  "extends": [
    "egg",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error"
  }
}
