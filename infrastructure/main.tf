provider "aws" {
  access_key = "${var.aws_access_key}"
  secret_key = "${var.aws_secret_key}"
  region = "${var.aws_region}"
}

module "website" {
  source  = "./hosted-website"
  domain_name = "duotoneapp.com"
  website_bucket_name = "duotoneapp.com"
  origin_id = "duotone_website"
  route_53_zone_id = "${aws_route53_zone.main.zone_id}"
  tag_environment = "production"
  tag_name = "duotoneapp"
}

module "storybook" {
  source  = "./hosted-website"
  domain_name = "storybook.duotoneapp.com"
  website_bucket_name = "storybook.duotoneapp.com"
  origin_id = "duotone_storybook"
  route_53_zone_id = "${aws_route53_zone.main.zone_id}"
  tag_environment = "production"
  tag_name = "duotoneapp"
}
