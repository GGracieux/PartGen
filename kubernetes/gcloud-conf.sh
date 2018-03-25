# -----------------------------
# CONFIGURING GCLOUD
# -----------------------------

gcloud config set project bagpipescores
gcloud config set compute/zone europe-west1-b
gcloud container clusters get-credentials cluster-bps