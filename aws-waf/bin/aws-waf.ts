#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsWafStack } from '../lib/aws-waf-stack';

const app = new cdk.App();
new AwsWafStack(app, 'AwsWafStack');
