# Aaron's Kool Website

A Next.js app deployed to AWS using [SST](https://sst.dev).

## Prerequisites

- Node.js 18+
- AWS CLI installed (`brew install awscli`)

## AWS Setup

You'll need AWS access keys from Aaron. He'll provide you with credentials via the AWS Console.

Once you have your **Access Key ID** and **Secret Access Key**, configure a profile:

```bash
aws configure --profile lucas
```

It will prompt you for:

```
AWS Access Key ID: <your key>
AWS Secret Access Key: <your secret>
Default region name: us-east-1
Default output format: json
```

## Deploy

```bash
npm install
npx sst deploy
```

That's it. SST will build the Next.js app and deploy it to AWS. When it finishes, it will print the URL.

## Tear Down

```bash
npx sst remove
```
