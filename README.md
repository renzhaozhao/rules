# rules

```yaml
rule-providers:
  my-custom-rules:
    type: file
    path: ./rule-set/custom-rules.yaml    # 引用 custom-rules.yaml 文件的路径
    behavior: classical          # 规则匹配模式，可选 classical（默认）或 ipcidr
```