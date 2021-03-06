resource "aws_route53_record" "main-a-record" {
   zone_id = "${var.route_53_zone_id}"
   name = "${var.domain_name}"
   type = "A"
   alias {
    name = "${aws_cloudfront_distribution.s3_distribution.domain_name}"
    zone_id = "${aws_cloudfront_distribution.s3_distribution.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "main-c-name" {
  zone_id = "${var.route_53_zone_id}"
  name = "www.${var.domain_name}"
  type = "CNAME"
  ttl = "300"
  records = ["${var.domain_name}"]
}
