# S3 Bucket to store terraform remote state
resource "aws_s3_bucket" "duotoneapp_tf_state" {
  bucket = "duotoneapp-tf-state"
  acl    = "private"

  tags {
    Environment = "production"
    Name = "duotoneapp"
  }
}
