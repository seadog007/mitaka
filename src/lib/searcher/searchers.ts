import {
  BlockCypher,
  Censys,
  Cymon,
  DNSlytics,
  DomainBigData,
  DomainWatch,
  FindSubDomains,
  FortiGuard,
  HybridAnalysis,
  IntelligenceX,
  ONYPHE,
  Pipl,
  PublicWWW,
  Pulsedive,
  RiskIQ,
  Searcher,
  SecurityTrails,
  Shodan,
  Sploitus,
  Talos,
  ThreatCrowd,
  Urlscan,
  ViewDNS,
  VirusTotal,
  Vulmon,
  WebAnalyzer,
  XForceExchange,
} from ".";
import { OTX } from "./otx";
import { ZoomEye } from "./zoomeye";
import { PubDB } from "./pubdb";

export const Searchers: Searcher[] = [
  new BlockCypher(),
  new Censys(),
  new Cymon(),
  new DNSlytics(),
  new DomainBigData(),
  new DomainWatch(),
  new FindSubDomains(),
  new FortiGuard(),
  new HybridAnalysis(),
  new IntelligenceX(),
  new ONYPHE(),
  new OTX(),
  new Pipl(),
  new PubDB(),
  new PublicWWW(),
  new Pulsedive(),
  new RiskIQ(),
  new SecurityTrails(),
  new Shodan(),
  new Sploitus(),
  new Talos(),
  new ThreatCrowd(),
  new Urlscan(),
  new ViewDNS(),
  new VirusTotal(),
  new Vulmon(),
  new WebAnalyzer(),
  new XForceExchange(),
  new ZoomEye(),
]
