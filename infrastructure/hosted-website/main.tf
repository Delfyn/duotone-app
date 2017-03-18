variable "domain_name" {
  description = "Website domain name"
}

variable "website_bucket_name" {
  description = "Website bucket name"
}

variable "website_zone_id" {
  description = "Website zone id"
  default = "Z21DNDUVLTQW6Q"
}

variable "origin_id" {
  description = "Website origin id"
}

variable "route_53_zone_id" {
  description = "Main Route 53 zone id"
}

variable "tag_environment" {
  description = "Tag environment"
}

variable "tag_name" {
  description = "Tag name"
}
