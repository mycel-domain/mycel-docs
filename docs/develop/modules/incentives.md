---
sidebar_position: 2
---

# Incentives

## Abstract

Incentive module provides the following feature:

- Store incentives for each epochs
- Distribute rewards

## Stores

### incentives.proto

```proto
message Incentive {
  int64 epoch = 1;
  repeated cosmos.base.v1beta1.Coin amount = 2 [
      (gogoproto.nullable) = false,
      (gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"
      ];
}
```

## Events

This module emits the following events:

## Queries

### list-incentive

List all incentive

```
myceld q incentives list-domain
```

### show-incentive

```
myceld q incentives show-incentive [epoch]
```
