
// 规则集（rule-providers）
const ruleProviders = {
  OpenAI: {
    type: "http",
    behavior: "domain",
    format: "mrs",
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/openai.mrs",
    path: "./ruleset/OpenAI.mrs",
    interval: 86400,
  },
  Claude: {
    type: "http",
    behavior: "domain",
    format: "mrs",
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/anthropic.mrs",
    path: "./ruleset/Claude.mrs",
    interval: 86400,
  },
  Gemini: {
    type: "http",
    behavior: "domain",
    format: "mrs",
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/google-gemini.mrs",
    path: "./ruleset/Gemini.mrs",
    interval: 86400,
  },
  Google: {
    type: "http",
    behavior: "domain",
    format: "mrs",
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/google.mrs",
    path: "./ruleset/Google.mrs",
    interval: 86400,
  },
  CNDomain: {
    type: "http",
    behavior: "domain",
    format: "mrs",
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.mrs",
    path: "./ruleset/CNDomain.mrs",
    interval: 86400,
  },
  CNIP: {
    type: "http",
    behavior: "ipcidr",
    format: "mrs",
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.mrs",
    path: "./ruleset/CNIP.mrs",
    interval: 86400,
  },
};

// 从代理列表里按名称筛选出美国节点
function filterUSProxies(proxies) {
  const usRegex =
    /美国|美國|🇺🇸|\bUS\b|USA|United States|洛杉矶|圣何塞|西雅图|硅谷|达拉斯/i;
  return (proxies || [])
    .filter((p) => usRegex.test(p.name))
    .map((p) => p.name);
}

// 代理分组（proxy-groups），需要 config.proxies 才能筛选，故用函数生成
function buildMyGroups(proxies) {
  return [
    {
      name: "🤖 AI工具",
      type: "url-test",
      url: "http://www.gstatic.com/generate_204",
      interval: 7200,
      proxies: filterUSProxies(proxies),
    },
  ];
}

const prependRule = [
  // nas和pt
  "DOMAIN-SUFFIX,renzhao.cc,DIRECT",
  "DOMAIN-KEYWORD,kufei,DIRECT",
  "DOMAIN-KEYWORD,rousi,DIRECT",
  "DOMAIN-SUFFIX,crabpt.vip,DIRECT",
  "DOMAIN-KEYWORD,pttime,DIRECT",
  "DOMAIN-KEYWORD,m-team,DIRECT",
  "DOMAIN-KEYWORD,xingyungept,DIRECT",
  "DOMAIN-KEYWORD,ptskit,DIRECT",

  // AI工具
  "RULE-SET,OpenAI,🤖 AI工具",
  "RULE-SET,Claude,🤖 AI工具",
  "RULE-SET,Gemini,🤖 AI工具",
  "RULE-SET,Google,🤖 AI工具",
  "RULE-SET,CNDomain,DIRECT",
  "RULE-SET,CNIP,DIRECT,no-resolve",
];

function main(config, profileName) {
  const oldRules = config["rules"] || [];
  config["rules"] = [...prependRule, ...oldRules];

  const oldRuleProviders = config["rule-providers"] || {};
  config["rule-providers"] = { ...ruleProviders, ...oldRuleProviders };

  const oldGroups = config["proxy-groups"] || [];
  config["proxy-groups"] = [...buildMyGroups(config["proxies"]), ...oldGroups];

  return config;
}
