#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsWaf2Stack } from '../lib/aws-waf2-stack';

const app = new cdk.App();
new AwsWaf2Stack(app, 'AwsWaf2Stack');
