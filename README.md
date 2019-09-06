# Version number generator action

This action intends to set more helpful messages about the current github commit.

## Getting Started

Use as a step like the following:

```yaml
jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v1
    - name: Get Commit info
      id: info
      uses: thedigitalstudio/commit-info@master
      with:
        GITHUB_SHA: ${{ github.sha }}
    - name: Print the data
      run: |
        echo ${{ steps.info.outputs.GITHUB_ONELINE }}
        echo ${GITHUB_ONELINE}
```

This will make the following environment variables accessible from subsequent steps
GITHUB_ONELINE
BUILD_URL

As you can see, you can use the generated variable as an environment variable or via the yaml templating