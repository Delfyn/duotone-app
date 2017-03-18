resource "aws_route53_zone" "main" {
  name = "${var.domain_name}"
  comment = "Managed by Terraform"

  tags {
    Environment = "production"
    Name = "duotoneapp"
  }
}
