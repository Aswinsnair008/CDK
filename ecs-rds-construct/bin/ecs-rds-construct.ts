#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EcsRdsConstructStack } from '../lib/ecs-rds-construct-stack';

const envOregon = { account: '998083776110', region: 'ap-south-1' };

const app = new cdk.App();
new EcsRdsConstructStack(app, 'EcsRdsConstructStack', { env: envOregon });