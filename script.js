// verge 全局扩展脚本
// Define main function (script entry)

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
  // 代理
  "DOMAIN-SUFFIX,udp-test.com,可可云",
  "DOMAIN-KEYWORD,claude,可可云",
  "DOMAIN-SUFFIX,openxlab.org.cn,可可云"
];

function main(config, profileName) {
  let oldrules = config["rules"];
  config["rules"] = prependRule.concat(oldrules);
  return config;
};
