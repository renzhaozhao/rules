# rules

rule-providers
```yaml
rule-providers:
  my-proxy:
    type: http
    url: 'https://github.com/renzhaozhao/rules/blob/main/proxy.yaml' 
    behavior: domain
    path: ./ruleset/proxy.yaml
    interval: 3600
  my-direct:
    type: http
    url: 'https://github.com/renzhaozhao/rules/blob/main/direct.yaml' 
    behavior: domain
    path: ./ruleset/direct.yaml
    interval: 3600
  reject:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
    path: ./ruleset/reject.yaml
    interval: 86400 
```

rules
```yaml
  - RULE-SET,my-proxy,🔰国外流量
  - RULE-SET,my-direct,DIRECT
  - RULE-SET,reject,REJECT
```
