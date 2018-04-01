module.exports = {
  logLevel: 'error',
  repositories: [
    // 'renovateapp/renovate-config'
    {
      repository: 'renovateapp/renovate',
      extends: [':pinVersions']
    },
    {
      repository: 'rennovateapp/github-app-cli',
      extends: [':base']
    }
  ],
};
