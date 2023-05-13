
# Hosting a static website on S3 using GitLab

This README will guide you through the process of hosting a static website on Amazon S3 using GitLab.

### Description 
Deploy a static website to 2 S3 Buckets [one for production , second one for staging] using a gitlab pipeline 

<img src="AWS.svg">

### Prerequisites
Before starting, please make sure you have the following:

- An AWS account
- A GitLab account
- Git installed on your local machine



[========]
## Step 1: Create an S3 Bucket
The first step is to create two S3 buckets to host your website,, one bucket for production and the other is for staging.
Here are the steps to follow:

1. Log in to your AWS account and navigate to the S3 console.
2. Click on the "Create bucket" button.
3. Give your bucket a name and select a region.
4. Leave the default settings for the rest of the options and click on the "Create" button.


## Step 2: Configure the S3 Bucket
Once you have created the S3 bucket, you need to configure it to host your static website. Here are the steps to follow:

1. Select the bucket you just created and click on the "Properties" tab.
2. Click on the "Static website hosting" option and select "Use this bucket to host a website".
3. Set the "Index document" to the name of your homepage (e.g. "index.html").
4. Optionally, you can also set an error document.
5. Click on the "Save changes" button.
6. navigate to Permissions
7. uncheck Block Public Access

## Step 3: Set Permissions for the S3 Bucket

In order to allow public access to your website, you need to set the appropriate permissions for the S3 bucket. Here are the steps to follow:

1. Click on the "Permissions" tab.
2. Click on the "Bucket Policy" button.
3. Copy the following policy and replace "your-bucket-name" with the name of your S3 bucket:


```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::your-bucket-name/*"
            ]
        }
    ]
}
```

## Step 4: Create a GitLab Repository
The next step is to create a GitLab repository to store your website files. Here are the steps to follow:

1. Log in to your GitLab account.
2. Click on the "New project" button.
3. Give your project a name and choose "Create blank project".
4. Optionally, you can also add a description and tags.
5. Click on the "Create project" button.
6. Add Website Files to the GitLab Repository with .gitlab-ci.yml file

## Step 5: Configure GitLab Repository 

1. create 2 environments [production , staging] from deployments pane click environment, in the external url set the S3 bucket url which is in the Properties tab of S3 bucket
2.  Add GitLab CI/CD Variables:
	- ***AWS_ACCESS_KEY , AWS_SECRET_ACCESS_KEY , AWS_DEFAULT_REGION and S3 Buckets name***
	
 

------------


**commit your .gitlab-ci.yaml to automate the pipeline** 
