# AWS S3 bucket for static hosting
resource "aws_s3_bucket" "duotone_website" {
  bucket = "${var.website_bucket_name}"
  acl = "public-read"

  tags {
    Environment = "${var.tag_environment}"
    Name = "${var.tag_name}"
  }

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["PUT","POST"]
    allowed_origins = ["*"]
    expose_headers = ["ETag"]
    max_age_seconds = 3000
  }

  policy = <<EOF
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForGetBucketObjects",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${var.website_bucket_name}/*"
    }
  ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

# AWS S3 bucket for www-redirect
resource "aws_s3_bucket" "duotone_website_redirect" {
  bucket = "www.${var.website_bucket_name}"
  acl = "public-read"

  tags {
    Environment = "${var.tag_environment}"
    Name = "${var.tag_name}"
  }

  website {
    redirect_all_requests_to = "${var.website_bucket_name}"
  }
}
