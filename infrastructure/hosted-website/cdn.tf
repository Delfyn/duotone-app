# AWS Cloudfront for caching
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = "${aws_s3_bucket.duotone_website.bucket}.s3.amazonaws.com"
    origin_id   = "${var.origin_id}"
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Managed by Terraform"
  default_root_object = "index.html"

  aliases = ["${var.domain_name}"]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${var.origin_id}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags {
    Environment = "${var.tag_environment}"
    Name = "${var.tag_name}"
  }

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:656260561456:certificate/39526466-4953-4bd3-b168-70a7bbcec7ad"
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1"
  }
}
