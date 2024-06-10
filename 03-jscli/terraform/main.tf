resource "aws_s3_bucket" "s3" {
  bucket = "az-tentekterraform-${random_id.id.hex}"
}