# Deploy to GCP

```
gcloud functions deploy nodejs-cloud-functions-seed --runtime nodejs10 --trigger-http --entry-point app
```

# Work on Local

* Correct `GCP_PROJECT` in `.env`
* Authenticate to the GCP: https://cloud.google.com/docs/authentication/production

Download theJSON file that contains your service account key

```
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/[FILE_NAME].json"
```
* Start local with command `npm run dev`
