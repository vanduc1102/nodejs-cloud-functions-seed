# Development

* Correct `GCP_PROJECT` in `.env`
* Authenticate to the GCP: https://cloud.google.com/docs/authentication/production

Download theJSON file that contains your service account key

```
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/[FILE_NAME].json"
```
* Start local with command `npm run dev`

# Deployment

## Please check your Datastore region and check the region to match with the deployment.



[Cloud Functions](https://cloud.google.com/sdk/gcloud/reference/functions/deploy)

```
GOOGLE_CLOUD_PROJECT=sample-project
CODE_STORAGE_BUCKET=sample-project-cloud-fun-codebase
CLOUD_FUNCTION_NAME=sample-function
REGION=us-east1

gcloud functions deploy $CLOUD_FUNCTION_NAME-$REGION \
  --runtime nodejs12 --trigger-http --entry-point app \
  --allow-unauthenticated \
  --env-vars-file .env.yaml \
  --region $REGION \
  --stage-bucket=$CODE_STORAGE_BUCKET
```

[Cloud Run](https://cloud.google.com/sdk/gcloud/reference/run/deploy)

```

GOOGLE_CLOUD_PROJECT=sample-project
CODE_STORAGE_BUCKET=sample-project-cloud-fun-codebase
CLOUD_FUNCTION_NAME=sample-function
REGION=us-east1

gcloud builds submit --tag gcr.io/$GOOGLE_CLOUD_PROJECT/$CLOUD_FUNCTION_NAME

gcloud run deploy $CLOUD_FUNCTION_NAME-$REGION \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/$CLOUD_FUNCTION_NAME \
  --platform managed \
  --set-env-vars "NODE_ENV=production" \
  --region $REGION \
  --allow-unauthenticated
```
