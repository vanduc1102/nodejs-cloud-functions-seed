# Deploy to GCP

```
gcloud functions deploy nodejs-cloud-functions-seed --runtime nodejs10 --trigger-http --entry-point app
```

# Work on Local

* Correct `GCP_PROJECT` in `.env`
* Authenticate to the GCPs: https://cloud.google.com/docs/authentication/production
* Start local with command `npm run dev`
