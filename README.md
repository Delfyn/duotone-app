# Duotone-App [![Travis Build Status](https://travis-ci.org/nagelflorian/duotone-app.svg?branch=master)](https://travis-ci.org/nagelflorian/duotone-app) ![[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)](https://img.shields.io/badge/code--style-airbnb-blue.svg)

## Getting Started

```
yarn
yarn start
```

## Testing

```
yarn test
```

## Infrastructure

[duotoneapp.com](http://duotoneapp.com) is hosted on [AWS](https://aws.amazon.com) infrastructure managed by [Terraform](https://terraform.io/). Before applying any changes to the existing infrastructure you can create an execution plan using `terraform plan` to review your changes. Using `terraform apply` you can apply the changes to reach your new desired state.
