# Troubleshoot

## 1. REMOTE_URL not correctly configured

Sentinel is monitoring the network periodically to confirm the status of all nodes.
<API_PORT> must be open and accessible all the time to perform this check and retrieve information.
When the information of your node is not shown on the Sentinel CLI, it could be a problem with your REMOTE_URL.

REMOTE_URL Sample: __HTTPS://<IP_Public>:<API_PORT>__

To confirm the REMOTE_URL is correct, a simple check on your side can be done.
Try to access the following: \
  __HTTPS://<IP_Public>:<API_PORT>/status__ 
  
You should see a similar message: 
> {"success":true,"result":{"address":"sentnode1fv28x50tgmxadn9er39z3ns8pywjwt2zftq88d","bandwidth":{"download":12935353,"upload":50834109},"handshake":{"enable":true,"peers":8},"interval_set_sessions":120000000000,"interval_update_sessions":6900000000000,"interval_update_status":3300000000000,"location":{"city":"Alcobendas","country":"Spain","latitude":40.5312,"longitude":-3.6572},"moniker":"SentinelNodeJT","operator":"sent1fv28x50tgmxadn9er39z3ns8pywjwt2zlap7zm","peers":0,"price":"50000udvpn","provider":"","qos":{"max_peers":250},"type":1,"version":"0.2.1"}}

Note that the <IP_PUBLIC> must be static to be accesible. Several ISP providers offer Dynamic IPv4 (Therefore the <IP_PUBLIC> is changing over the time).
There are several services free of charge that can be used to get an Static IPv4.


