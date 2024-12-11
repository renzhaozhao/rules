# rules

rule-providers
```yaml
rule-providers:
  my-proxy:
    type: http
    url: 'https://github.com/renzhaozhao/rules/blob/main/proxy.yaml' 
    behavior: classical          
    path: ./custom-rules/proxy.yaml
    interval: 3600
  my-direct:
    type: http
    url: 'https://github.com/renzhaozhao/rules/blob/main/direct.yaml' 
    behavior: classical          
    path: ./custom-rules/direct.yaml
    interval: 3600  
```

rules
```yaml
rules:
  - RULE-SET,my-proxy,🔰国外流量
  - RULE-SET,my-direct,DIRECT
```
