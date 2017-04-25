# Duotone-App [![Travis Build Status](https://travis-ci.org/nagelflorian/duotone-app.svg?branch=master)](https://travis-ci.org/nagelflorian/duotone-app) [![Airbnb JavaScript Style Guide](https://img.shields.io/badge/code--style-airbnb-blue.svg)](https://github.com/airbnb/javascript) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

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
