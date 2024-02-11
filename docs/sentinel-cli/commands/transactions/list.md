---
title: List
sidebar_position: 1
---

Below is a list of transaction commands you can execute using the Sentinel CLI

## Subscribe to a Node

Subscribe to a Node

:::info
Please ensure that you select one option between `<gigabytes>` and `<hours>`. The unused option should be assigned a value of 0.
:::

```bash
sentinelcli tx node subscribe \
  <sentnode_address> \
  <gigabytes> \
  <hours> \
  udvpn \
  --from test \
  --chain-id=sentinelhub-2 \
  --node https://rpc.sentinel.co:443 \
  --gas-prices=0.5udvpn \
  --gas=300000
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Subscribe to a node"
{
   "height":"14884931",
   "txhash":"3228682372A339F0190100966B0EF47F9EDBBD04F9CBB435F10D3FDCE30C5447",
   "codespace":"",
   "code":0,
   "data":"0A270A252F73656E74696E656C2E6E6F64652E76322E4D736753756273637269626552657175657374",
   "raw_log":"[{\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"sent1cwulk79y2t8zljgvlutqs5gzx4gruwmjsqzjju\"},{\"key\":\"amount\",\"value\":\"4160000udvpn\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\"},{\"key\":\"amount\",\"value\":\"4160000udvpn\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/sentinel.node.v2.MsgSubscribeRequest\"},{\"key\":\"sender\",\"value\":\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\"}]},{\"type\":\"sentinel.deposit.v1.EventAdd\",\"attributes\":[{\"key\":\"address\",\"value\":\"\\\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\\\"\"},{\"key\":\"coins\",\"value\":\"\\\"4160000udvpn\\\"\"}]},{\"type\":\"sentinel.node.v2.EventCreateSubscription\",\"attributes\":[{\"key\":\"address\",\"value\":\"\\\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\\\"\"},{\"key\":\"id\",\"value\":\"\\\"350397\\\"\"},{\"key\":\"node_address\",\"value\":\"\\\"sentnode1rr5xrvrs8tksvynhw88mpxczz5tpddpwg0c76h\\\"\"}]},{\"type\":\"sentinel.subscription.v2.EventCreatePayout\",\"attributes\":[{\"key\":\"address\",\"value\":\"\\\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\\\"\"},{\"key\":\"id\",\"value\":\"\\\"350397\\\"\"},{\"key\":\"node_address\",\"value\":\"\\\"sentnode1rr5xrvrs8tksvynhw88mpxczz5tpddpwg0c76h\\\"\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"sent1cwulk79y2t8zljgvlutqs5gzx4gruwmjsqzjju\"},{\"key\":\"sender\",\"value\":\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\"},{\"key\":\"amount\",\"value\":\"4160000udvpn\"}]}]}]",
   "logs":[
      {
         "msg_index":0,
         "log":"",
         "events":[
            {
               "type":"coin_received",
               "attributes":[
                  {
                     "key":"receiver",
                     "value":"sent1cwulk79y2t8zljgvlutqs5gzx4gruwmjsqzjju"
                  },
                  {
                     "key":"amount",
                     "value":"4160000udvpn"
                  }
               ]
            },
            {
               "type":"coin_spent",
               "attributes":[
                  {
                     "key":"spender",
                     "value":"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj"
                  },
                  {
                     "key":"amount",
                     "value":"4160000udvpn"
                  }
               ]
            },
            {
               "type":"message",
               "attributes":[
                  {
                     "key":"action",
                     "value":"/sentinel.node.v2.MsgSubscribeRequest"
                  },
                  {
                     "key":"sender",
                     "value":"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj"
                  }
               ]
            },
            {
               "type":"sentinel.deposit.v1.EventAdd",
               "attributes":[
                  {
                     "key":"address",
                     "value":"\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\""
                  },
                  {
                     "key":"coins",
                     "value":"\"4160000udvpn\""
                  }
               ]
            },
            {
               "type":"sentinel.node.v2.EventCreateSubscription",
               "attributes":[
                  {
                     "key":"address",
                     "value":"\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\""
                  },
                  {
                     "key":"id",
                     "value":"\"350397\""
                  },
                  {
                     "key":"node_address",
                     "value":"\"sentnode1rr5xrvrs8tksvynhw88mpxczz5tpddpwg0c76h\""
                  }
               ]
            },
            {
               "type":"sentinel.subscription.v2.EventCreatePayout",
               "attributes":[
                  {
                     "key":"address",
                     "value":"\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\""
                  },
                  {
                     "key":"id",
                     "value":"\"350397\""
                  },
                  {
                     "key":"node_address",
                     "value":"\"sentnode1rr5xrvrs8tksvynhw88mpxczz5tpddpwg0c76h\""
                  }
               ]
            },
            {
               "type":"transfer",
               "attributes":[
                  {
                     "key":"recipient",
                     "value":"sent1cwulk79y2t8zljgvlutqs5gzx4gruwmjsqzjju"
                  },
                  {
                     "key":"sender",
                     "value":"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj"
                  },
                  {
                     "key":"amount",
                     "value":"4160000udvpn"
                  }
               ]
            }
         ]
      }
   ],
   "info":"",
   "gas_wanted":"300000",
   "gas_used":"124884",
   "tx":null,
   "timestamp":"",
   "events":[
      {
         "type":"coin_spent",
         "attributes":[
            {
               "key":"c3BlbmRlcg==",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            },
            {
               "key":"YW1vdW50",
               "value":"MTUwMDAwdWR2cG4=",
               "index":true
            }
         ]
      },
      {
         "type":"coin_received",
         "attributes":[
            {
               "key":"cmVjZWl2ZXI=",
               "value":"c2VudDE3eHBmdmFrbTJhbWc5NjJ5bHM2Zjg0ejNrZWxsOGM1bHR6NGUwag==",
               "index":true
            },
            {
               "key":"YW1vdW50",
               "value":"MTUwMDAwdWR2cG4=",
               "index":true
            }
         ]
      },
      {
         "type":"transfer",
         "attributes":[
            {
               "key":"cmVjaXBpZW50",
               "value":"c2VudDE3eHBmdmFrbTJhbWc5NjJ5bHM2Zjg0ejNrZWxsOGM1bHR6NGUwag==",
               "index":true
            },
            {
               "key":"c2VuZGVy",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            },
            {
               "key":"YW1vdW50",
               "value":"MTUwMDAwdWR2cG4=",
               "index":true
            }
         ]
      },
      {
         "type":"message",
         "attributes":[
            {
               "key":"c2VuZGVy",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            }
         ]
      },
      {
         "type":"tx",
         "attributes":[
            {
               "key":"ZmVl",
               "value":"MTUwMDAwdWR2cG4=",
               "index":true
            },
            {
               "key":"ZmVlX3BheWVy",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            }
         ]
      },
      {
         "type":"tx",
         "attributes":[
            {
               "key":"YWNjX3NlcQ==",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ai81",
               "index":true
            }
         ]
      },
      {
         "type":"tx",
         "attributes":[
            {
               "key":"c2lnbmF0dXJl",
               "value":"bHBsZVZVTldnaUIyeDhoVlhsZVA0d2Zwd00vWm04d2FJZ0xyMHlmS3ZUNDlSQk9UblVoRjloUWVEVTNGNE04ZDY2bnd1ZUNQR3o0ZFFWWVZoK2J2ZGc9PQ==",
               "index":true
            }
         ]
      },
      {
         "type":"message",
         "attributes":[
            {
               "key":"YWN0aW9u",
               "value":"L3NlbnRpbmVsLm5vZGUudjIuTXNnU3Vic2NyaWJlUmVxdWVzdA==",
               "index":true
            }
         ]
      },
      {
         "type":"coin_spent",
         "attributes":[
            {
               "key":"c3BlbmRlcg==",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            },
            {
               "key":"YW1vdW50",
               "value":"NDE2MDAwMHVkdnBu",
               "index":true
            }
         ]
      },
      {
         "type":"coin_received",
         "attributes":[
            {
               "key":"cmVjZWl2ZXI=",
               "value":"c2VudDFjd3Vsazc5eTJ0OHpsamd2bHV0cXM1Z3p4NGdydXdtanNxempqdQ==",
               "index":true
            },
            {
               "key":"YW1vdW50",
               "value":"NDE2MDAwMHVkdnBu",
               "index":true
            }
         ]
      },
      {
         "type":"transfer",
         "attributes":[
            {
               "key":"cmVjaXBpZW50",
               "value":"c2VudDFjd3Vsazc5eTJ0OHpsamd2bHV0cXM1Z3p4NGdydXdtanNxempqdQ==",
               "index":true
            },
            {
               "key":"c2VuZGVy",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            },
            {
               "key":"YW1vdW50",
               "value":"NDE2MDAwMHVkdnBu",
               "index":true
            }
         ]
      },
      {
         "type":"message",
         "attributes":[
            {
               "key":"c2VuZGVy",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            }
         ]
      },
      {
         "type":"sentinel.deposit.v1.EventAdd",
         "attributes":[
            {
               "key":"YWRkcmVzcw==",
               "value":"InNlbnQxc3l1a3duMnBsMjNwbTloNXluN3J6bnc5NWo1eTVhdzdoanYyeWoi",
               "index":true
            },
            {
               "key":"Y29pbnM=",
               "value":"IjQxNjAwMDB1ZHZwbiI=",
               "index":true
            }
         ]
      },
      {
         "type":"sentinel.subscription.v2.EventCreatePayout",
         "attributes":[
            {
               "key":"YWRkcmVzcw==",
               "value":"InNlbnQxc3l1a3duMnBsMjNwbTloNXluN3J6bnc5NWo1eTVhdzdoanYyeWoi",
               "index":true
            },
            {
               "key":"aWQ=",
               "value":"IjM1MDM5NyI=",
               "index":true
            },
            {
               "key":"bm9kZV9hZGRyZXNz",
               "value":"InNlbnRub2RlMXJyNXhydnJzOHRrc3Z5bmh3ODhtcHhjeno1dHBkZHB3ZzBjNzZoIg==",
               "index":true
            }
         ]
      },
      {
         "type":"sentinel.node.v2.EventCreateSubscription",
         "attributes":[
            {
               "key":"YWRkcmVzcw==",
               "value":"InNlbnQxc3l1a3duMnBsMjNwbTloNXluN3J6bnc5NWo1eTVhdzdoanYyeWoi",
               "index":true
            },
            {
               "key":"aWQ=",
               "value":"IjM1MDM5NyI=",
               "index":true
            },
            {
               "key":"bm9kZV9hZGRyZXNz",
               "value":"InNlbnRub2RlMXJyNXhydnJzOHRrc3Z5bmh3ODhtcHhjeno1dHBkZHB3ZzBjNzZoIg==",
               "index":true
            }
         ]
      }
   ]
}
```

</p>
</details>


## Update a Node Status

Update the status of a node

```bash
sentinelcli tx node update-status \
  <status> \
  --from test \
  --chain-id=sentinelhub-2 \
  --node https://rpc.sentinel.co:443 \
  --gas-prices=0.5udvpn \
  --gas=300000
```


## Update a Provider Status

Update the status of a provider

```bash
sentinelcli tx provider update \
  --name <new_name> \
  --identity <new_identity> \
  --website <new_website> \
  --description <new_description> \
  --status <new_status> \
  --from test \
  --chain-id=sentinelhub-2 \
  --node https://rpc.sentinel.co:443 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

## Start a Session

Initiate a session on a node with an existing subscription.

```bash
sentinelcli tx session start \
  <subscription> \
  <sentnode_address> \
  --from test \
  --chain-id=sentinelhub-2 \
  --node https://rpc.sentinel.co:443 \
  --gas-prices=0.5udvpn \
  --gas=300000
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Start a session on node sentnode1rr5xrvrs8tksvynhw88mpxczz5tpddpwg0c76h with subscription 350397"
{
   "height":"14885159",
   "txhash":"F37BF48AB4D625216E785682139E47224627C16F37B318FFE99FB8961A68DF19",
   "codespace":"",
   "code":0,
   "data":"0A260A242F73656E74696E656C2E73657373696F6E2E76322E4D7367537461727452657175657374",
   "raw_log":"[{\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/sentinel.session.v2.MsgStartRequest\"}]},{\"type\":\"sentinel.session.v2.EventStart\",\"attributes\":[{\"key\":\"address\",\"value\":\"\\\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\\\"\"},{\"key\":\"id\",\"value\":\"\\\"3039337\\\"\"},{\"key\":\"node_address\",\"value\":\"\\\"sentnode1rr5xrvrs8tksvynhw88mpxczz5tpddpwg0c76h\\\"\"},{\"key\":\"plan_id\",\"value\":\"\\\"0\\\"\"},{\"key\":\"subscription_id\",\"value\":\"\\\"350397\\\"\"}]}]}]",
   "logs":[
      {
         "msg_index":0,
         "log":"",
         "events":[
            {
               "type":"message",
               "attributes":[
                  {
                     "key":"action",
                     "value":"/sentinel.session.v2.MsgStartRequest"
                  }
               ]
            },
            {
               "type":"sentinel.session.v2.EventStart",
               "attributes":[
                  {
                     "key":"address",
                     "value":"\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\""
                  },
                  {
                     "key":"id",
                     "value":"\"3039337\""
                  },
                  {
                     "key":"node_address",
                     "value":"\"sentnode1rr5xrvrs8tksvynhw88mpxczz5tpddpwg0c76h\""
                  },
                  {
                     "key":"plan_id",
                     "value":"\"0\""
                  },
                  {
                     "key":"subscription_id",
                     "value":"\"350397\""
                  }
               ]
            }
         ]
      }
   ],
   "info":"",
   "gas_wanted":"300000",
   "gas_used":"89643",
   "tx":null,
   "timestamp":"",
   "events":[
      {
         "type":"coin_spent",
         "attributes":[
            {
               "key":"c3BlbmRlcg==",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            },
            {
               "key":"YW1vdW50",
               "value":"MTUwMDAwdWR2cG4=",
               "index":true
            }
         ]
      },
      {
         "type":"coin_received",
         "attributes":[
            {
               "key":"cmVjZWl2ZXI=",
               "value":"c2VudDE3eHBmdmFrbTJhbWc5NjJ5bHM2Zjg0ejNrZWxsOGM1bHR6NGUwag==",
               "index":true
            },
            {
               "key":"YW1vdW50",
               "value":"MTUwMDAwdWR2cG4=",
               "index":true
            }
         ]
      },
      {
         "type":"transfer",
         "attributes":[
            {
               "key":"cmVjaXBpZW50",
               "value":"c2VudDE3eHBmdmFrbTJhbWc5NjJ5bHM2Zjg0ejNrZWxsOGM1bHR6NGUwag==",
               "index":true
            },
            {
               "key":"c2VuZGVy",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            },
            {
               "key":"YW1vdW50",
               "value":"MTUwMDAwdWR2cG4=",
               "index":true
            }
         ]
      },
      {
         "type":"message",
         "attributes":[
            {
               "key":"c2VuZGVy",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            }
         ]
      },
      {
         "type":"tx",
         "attributes":[
            {
               "key":"ZmVl",
               "value":"MTUwMDAwdWR2cG4=",
               "index":true
            },
            {
               "key":"ZmVlX3BheWVy",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            }
         ]
      },
      {
         "type":"tx",
         "attributes":[
            {
               "key":"YWNjX3NlcQ==",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ai85",
               "index":true
            }
         ]
      },
      {
         "type":"tx",
         "attributes":[
            {
               "key":"c2lnbmF0dXJl",
               "value":"Q285anhEclpyZmJSbGRNLzMrVWdtU1hMUjZPVk4yYWk0eEJXc21RZXRSeDkvY2piaTArMkJiZ08rUEg1Z3ZsZGcrVyswL2xjYTk1cWpZQURLRUxmOFE9PQ==",
               "index":true
            }
         ]
      },
      {
         "type":"message",
         "attributes":[
            {
               "key":"YWN0aW9u",
               "value":"L3NlbnRpbmVsLnNlc3Npb24udjIuTXNnU3RhcnRSZXF1ZXN0",
               "index":true
            }
         ]
      },
      {
         "type":"sentinel.session.v2.EventStart",
         "attributes":[
            {
               "key":"YWRkcmVzcw==",
               "value":"InNlbnQxc3l1a3duMnBsMjNwbTloNXluN3J6bnc5NWo1eTVhdzdoanYyeWoi",
               "index":true
            },
            {
               "key":"aWQ=",
               "value":"IjMwMzkzMzci",
               "index":true
            },
            {
               "key":"bm9kZV9hZGRyZXNz",
               "value":"InNlbnRub2RlMXJyNXhydnJzOHRrc3Z5bmh3ODhtcHhjeno1dHBkZHB3ZzBjNzZoIg==",
               "index":true
            },
            {
               "key":"cGxhbl9pZA==",
               "value":"IjAi",
               "index":true
            },
            {
               "key":"c3Vic2NyaXB0aW9uX2lk",
               "value":"IjM1MDM5NyI=",
               "index":true
            }
         ]
      }
   ]
}
```

</p>
</details>


## End a Session

Terminate a session on a node with an active subscription.

```bash
sentinelcli tx session end \
  <session_id> \
  --from test \
  --chain-id=sentinelhub-2 \
  --node https://rpc.sentinel.co:443 \
  --gas-prices=0.5udvpn \
  --gas=300000
```
<details>
<summary>Example Output</summary>
<p>

```bash title="End the session with ID 3039337 on node sentnode1rr5xrvrs8tksvynhw88mpxczz5tpddpwg0c76h with subscription 350397"
{
   "height":"14885256",
   "txhash":"F3CD0E271793D3D320E85FA3D99F6BB8B709995F54ADCCBE10E5320BCFC56908",
   "codespace":"",
   "code":0,
   "data":"0A240A222F73656E74696E656C2E73657373696F6E2E76322E4D7367456E6452657175657374",
   "raw_log":"[{\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/sentinel.session.v2.MsgEndRequest\"}]},{\"type\":\"sentinel.session.v2.EventUpdateStatus\",\"attributes\":[{\"key\":\"address\",\"value\":\"\\\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\\\"\"},{\"key\":\"id\",\"value\":\"\\\"3039337\\\"\"},{\"key\":\"node_address\",\"value\":\"\\\"sentnode1rr5xrvrs8tksvynhw88mpxczz5tpddpwg0c76h\\\"\"},{\"key\":\"plan_id\",\"value\":\"\\\"0\\\"\"},{\"key\":\"status\",\"value\":\"\\\"inactive_pending\\\"\"},{\"key\":\"subscription_id\",\"value\":\"\\\"350397\\\"\"}]}]}]",
   "logs":[
      {
         "msg_index":0,
         "log":"",
         "events":[
            {
               "type":"message",
               "attributes":[
                  {
                     "key":"action",
                     "value":"/sentinel.session.v2.MsgEndRequest"
                  }
               ]
            },
            {
               "type":"sentinel.session.v2.EventUpdateStatus",
               "attributes":[
                  {
                     "key":"address",
                     "value":"\"sent1syukwn2pl23pm9h5yn7rznw95j5y5aw7hjv2yj\""
                  },
                  {
                     "key":"id",
                     "value":"\"3039337\""
                  },
                  {
                     "key":"node_address",
                     "value":"\"sentnode1rr5xrvrs8tksvynhw88mpxczz5tpddpwg0c76h\""
                  },
                  {
                     "key":"plan_id",
                     "value":"\"0\""
                  },
                  {
                     "key":"status",
                     "value":"\"inactive_pending\""
                  },
                  {
                     "key":"subscription_id",
                     "value":"\"350397\""
                  }
               ]
            }
         ]
      }
   ],
   "info":"",
   "gas_wanted":"300000",
   "gas_used":"70386",
   "tx":null,
   "timestamp":"",
   "events":[
      {
         "type":"coin_spent",
         "attributes":[
            {
               "key":"c3BlbmRlcg==",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            },
            {
               "key":"YW1vdW50",
               "value":"MTUwMDAwdWR2cG4=",
               "index":true
            }
         ]
      },
      {
         "type":"coin_received",
         "attributes":[
            {
               "key":"cmVjZWl2ZXI=",
               "value":"c2VudDE3eHBmdmFrbTJhbWc5NjJ5bHM2Zjg0ejNrZWxsOGM1bHR6NGUwag==",
               "index":true
            },
            {
               "key":"YW1vdW50",
               "value":"MTUwMDAwdWR2cG4=",
               "index":true
            }
         ]
      },
      {
         "type":"transfer",
         "attributes":[
            {
               "key":"cmVjaXBpZW50",
               "value":"c2VudDE3eHBmdmFrbTJhbWc5NjJ5bHM2Zjg0ejNrZWxsOGM1bHR6NGUwag==",
               "index":true
            },
            {
               "key":"c2VuZGVy",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            },
            {
               "key":"YW1vdW50",
               "value":"MTUwMDAwdWR2cG4=",
               "index":true
            }
         ]
      },
      {
         "type":"message",
         "attributes":[
            {
               "key":"c2VuZGVy",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            }
         ]
      },
      {
         "type":"tx",
         "attributes":[
            {
               "key":"ZmVl",
               "value":"MTUwMDAwdWR2cG4=",
               "index":true
            },
            {
               "key":"ZmVlX3BheWVy",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ag==",
               "index":true
            }
         ]
      },
      {
         "type":"tx",
         "attributes":[
            {
               "key":"YWNjX3NlcQ==",
               "value":"c2VudDFzeXVrd24ycGwyM3BtOWg1eW43cnpudzk1ajV5NWF3N2hqdjJ5ai8xMQ==",
               "index":true
            }
         ]
      },
      {
         "type":"tx",
         "attributes":[
            {
               "key":"c2lnbmF0dXJl",
               "value":"RUpPbGhNSTUvU1RLcXp2bFRnc3VsZGFmV1JEOFhQVDFkYTMvOUltbkxjaG4zM05MMSthVWFVOWhxRWpzTUNjTDV2a2N6OCsxVmpBMWYyQWludytXTEE9PQ==",
               "index":true
            }
         ]
      },
      {
         "type":"message",
         "attributes":[
            {
               "key":"YWN0aW9u",
               "value":"L3NlbnRpbmVsLnNlc3Npb24udjIuTXNnRW5kUmVxdWVzdA==",
               "index":true
            }
         ]
      },
      {
         "type":"sentinel.session.v2.EventUpdateStatus",
         "attributes":[
            {
               "key":"YWRkcmVzcw==",
               "value":"InNlbnQxc3l1a3duMnBsMjNwbTloNXluN3J6bnc5NWo1eTVhdzdoanYyeWoi",
               "index":true
            },
            {
               "key":"aWQ=",
               "value":"IjMwMzkzMzci",
               "index":true
            },
            {
               "key":"bm9kZV9hZGRyZXNz",
               "value":"InNlbnRub2RlMXJyNXhydnJzOHRrc3Z5bmh3ODhtcHhjeno1dHBkZHB3ZzBjNzZoIg==",
               "index":true
            },
            {
               "key":"cGxhbl9pZA==",
               "value":"IjAi",
               "index":true
            },
            {
               "key":"c3RhdHVz",
               "value":"ImluYWN0aXZlX3BlbmRpbmci",
               "index":true
            },
            {
               "key":"c3Vic2NyaXB0aW9uX2lk",
               "value":"IjM1MDM5NyI=",
               "index":true
            }
         ]
      }
   ]
}
```

</p>
</details>


## Add Subscription Allocation

Add an allocation to a subscription

```bash
sentinelcli tx subscription allocate \
  <subscription_id> \
  <address> \
  <bytes> \
  --from test \
  --chain-id=sentinelhub-2 \
  --node https://rpc.sentinel.co:443 \
  --gas-prices=0.5udvpn \
  --gas=300000
```