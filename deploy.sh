GOOGLE_CLOUD_PROJECT=the-quizz-world
CODE_STORAGE_BUCKET=the-quizz-world-cloud-fun-codebase
CLOUD_FUNCTION_NAME=medium-free-proxy
REGION=us-east1

gcloud functions deploy $CLOUD_FUNCTION_NAME-$REGION \
  --runtime nodejs12 --trigger-http --entry-point app \
  --allow-unauthenticated \
  --env-vars-file .env.yaml \
  --region $REGION \
  --stage-bucket=$CODE_STORAGE_BUCKET
