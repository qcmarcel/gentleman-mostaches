```shell
APOLLO_KEY=service:Gentleman-Mostaches:lLwBK75kx4rn3qo531QBFg \
rover subgraph publish Gentleman-Mostaches@current \
--schema ./products-schema.graphql \
--name your-subgraph-name \
--routing-url http://products.prod.svc.cluster.local:4001/graphql
```