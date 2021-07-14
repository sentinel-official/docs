# Troubleshoot

## Verify the remote_url
   
   The binary can be downloaded here: https://github.com/sentinel-official/cli-client/releases/tag/v0.1.4
   
   Node's remote URL is wrong if you see empty moniker, location and speed-test details in the CLI client
   

    ``` 
    wget https://github.com/sentinel-official/cli-client/releases/download/v0.1.4/sentinelcli-0.1.4-linux-amd64
    ./sentinelcli-0.1.4-linux-amd64 query nodes --node https://rpc.sentinel.co:443
    ```
    
EXAMPLE OUTPUT:

|   MONIKER    |                     ADDRESS                     | PROVIDER |    PRICE     |  COUNTRY  |   SPEED TEST    | PEERS | HANDSHAKE | VERSION |    STATUS     |
|--------------|-------------------------------------------------|----------|--------------|-----------|-----------------|-------|-----------|---------|---------------|
|              | sentnode1w6p8zup0q22jyqtzjy8kjay9q4653n62pxkwch |          | 250udvpn     |           | 0.00B+0.00B     |     0 | false     |         | STATUS_ACTIVE |
|              | sentnode17vesx0sn89g3dhk93latcdru8uq0wlfpyarrzk |          | 250udvpn     |           | 0.00B+0.00B     |     0 | false     |         | STATUS_ACTIVE |
| 1.wireguard  | sentnode1fj0t8ympfw7k5zt6xsu9ae80k9rva739v2dmp8 |          | 30000udvpn   | Germany   | 33.81MB+6.67MB  |     0 | true      | 0.1.7   | STATUS_ACTIVE |
|              | sentnode1wvcv9rs0vn4dmynnz02663h0gc9xrvjwu2l09n |          | 250udvpn     |           | 0.00B+0.00B     |     0 | false     |         | STATUS_ACTIVE |
| 99.wireguard | sentnode1c6uu3y4z2f05g78lf36t90pd848fg8r48yvkse |          | 250udpn      | Germany   | 16.36MB+22.10MB |     0 | true      | 0.1.8   | STATUS_ACTIVE |
|              | sentnode1kxzfl06a2nxee94432zxrlu4dshhn0j8cuv4an |          | 250udvpn     |           | 0.00B+0.00B     |     0 | false     |         | STATUS_ACTIVE |
| hoon         | sentnode1tyrqu5rjkkx9kx4kt9kpvr9rh38s8qns0enh4r |          | 1000000udvpn | Ukraine   | 59.69MB+39.03MB |     0 | true      | 0b9132a | STATUS_ACTIVE |
|              | sentnode1r6evdw0cp420q2p64m224lqu2jvce553m2q7u3 |          | 10udvpn      |           | 0.00B+0.00B     |     0 | false     |         | STATUS_ACTIVE |
| FedNet       | sentnode1rwa0zaw2xdp3uv3rvyq7q4a6wygccr45vxdem4 |          | 250udvpn     | Argentina | 1.20MB+1.08MB   |     0 | true      | 09eea19 | STATUS_ACTIVE |
