import {
  Boxes,
  Database,
  FileSearch,
  GitBranch,
  LineChart,
  Lock,
  Plug,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon
} from "lucide-react";

export const brand = {
  name: "Nucleus",
  product: "Nucleus Reason",
  tagline: "Put your company's knowledge to work",
  subline:
    "Nucleus connects to the systems your team already runs on, reads what lives inside them, and answers operational questions with citations you can check.",
  mission:
    "Ship AI that operations teams can audit, not a black box they have to trust."
};

export interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const features: Feature[] = [
  {
    icon: FileSearch,
    title: "Grounded retrieval",
    body: "Every answer cites the document, ticket or row it came from. No citation, no answer — the model returns 'not found' instead of guessing."
  },
  {
    icon: Plug,
    title: "Forty-one connectors",
    body: "Postgres, Snowflake, S3, Confluence, Jira, Zendesk, Salesforce, Notion, Slack and Google Drive, syncing on a schedule you set."
  },
  {
    icon: ShieldCheck,
    title: "Permissions carry through",
    body: "Nucleus inherits source-system access. If a person cannot open the document, retrieval will not surface it to them either."
  },
  {
    icon: Workflow,
    title: "Multi-step workflows",
    body: "Chain retrieval, transformation and approval into repeatable runs. Every step is logged with its inputs and outputs."
  },
  {
    icon: LineChart,
    title: "Evaluation built in",
    body: "Score every change against your own labelled set before it ships. Regressions block the deploy rather than reaching users."
  },
  {
    icon: Lock,
    title: "Your data stays yours",
    body: "Deploy in your VPC or ours. Nothing is used for model training, and retention is configurable down to zero."
  },
  {
    icon: Database,
    title: "Structured and unstructured",
    body: "Query a warehouse table and a PDF in the same question, and get one answer that reconciles both."
  },
  {
    icon: GitBranch,
    title: "Versioned prompts",
    body: "Prompts, tools and retrieval configs are versioned artefacts with diffs, review and one-click rollback."
  },
  {
    icon: Boxes,
    title: "Model agnostic",
    body: "Route per workload across frontier and open models. Swap providers without rewriting a single workflow."
  }
];

export interface Step {
  number: string;
  title: string;
  body: string;
  detail: string[];
}

export const steps: Step[] = [
  {
    number: "01",
    title: "Connect your sources",
    body: "Point Nucleus at the systems your team already uses. Indexing is incremental, so the first sync is the only slow one.",
    detail: ["OAuth or service account", "Scheduled or webhook sync", "Row and field level scoping"]
  },
  {
    number: "02",
    title: "Define what good looks like",
    body: "Write the questions your team actually asks, with the answers you expect. That set becomes the regression suite for every future change.",
    detail: ["Labelled evaluation set", "Custom scoring rubrics", "Blocking thresholds in CI"]
  },
  {
    number: "03",
    title: "Ship and watch",
    body: "Deploy to Slack, the API or the web app. Every answer is traced end to end, so a wrong result is a debugging task, not a mystery.",
    detail: ["Full retrieval traces", "Per-answer cost and latency", "Feedback loops into evals"]
  }
];

export interface Plan {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  featured?: boolean;
  cta: string;
  includes: string[];
}

export const plans: Plan[] = [
  {
    name: "Team",
    price: "$490",
    cadence: "per month",
    blurb: "For a single team putting one workflow into production.",
    cta: "Start free trial",
    includes: [
      "Up to 25 seats",
      "5 connectors",
      "250k indexed documents",
      "Shared evaluation suite",
      "Email support, next business day"
    ]
  },
  {
    name: "Scale",
    price: "$2,400",
    cadence: "per month",
    blurb: "For platform teams running several workflows across departments.",
    featured: true,
    cta: "Start free trial",
    includes: [
      "Up to 250 seats",
      "All 41 connectors",
      "5M indexed documents",
      "Per-workflow model routing",
      "SSO, SCIM and audit export",
      "Shared Slack channel"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual",
    blurb: "For regulated organisations that need deployment in their own cloud.",
    cta: "Talk to sales",
    includes: [
      "Unlimited seats",
      "VPC or on-premise deployment",
      "Custom connectors",
      "Dedicated evaluation engineering",
      "99.9% uptime SLA",
      "Named support engineer"
    ]
  }
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How do you stop the model making things up?",
    answer:
      "Answers are generated only from retrieved passages, and every claim carries a citation back to its source. When retrieval returns nothing above the confidence threshold, Nucleus says it could not find an answer rather than producing one. You can tune that threshold per workflow."
  },
  {
    question: "Does Nucleus train on our data?",
    answer:
      "No. Your content is used for retrieval at query time and nothing else. It is never added to a training corpus, ours or a provider's, and zero-retention endpoints are used with every model vendor we route to."
  },
  {
    question: "What happens to permissions?",
    answer:
      "Nucleus reads access control lists from each connected system and applies them at query time. If someone loses access to a Confluence space on Monday, Nucleus stops surfacing it to them on Monday, without a re-index."
  },
  {
    question: "Can we run it in our own cloud?",
    answer:
      "Yes, on the Enterprise plan. Nucleus deploys into your AWS, GCP or Azure account as a set of containers, with the control plane either self-hosted or connected over a private link. Nothing egresses to us."
  },
  {
    question: "Which models can we use?",
    answer:
      "Routing is per workload across frontier providers and open-weight models you host yourself. Because prompts and tools are versioned artefacts, swapping a model is a config change measured against your evaluation set, not a rewrite."
  },
  {
    question: "How long does the first deployment take?",
    answer:
      "Teams typically have their first workflow answering real questions within two weeks: a few days to connect sources and index, then most of the remaining time building the evaluation set that tells you whether it is good enough to ship."
  }
];

export const logos = [
  "NORTHWIND",
  "HELIOGRAPH",
  "CARTA LABS",
  "MERIDIAN",
  "ORBITAL",
  "FIELDNOTE",
  "SUNDERLAND",
  "ATLAS FREIGHT"
];

export const stats = [
  { value: "41", label: "Data connectors" },
  { value: "98.2%", label: "Citation accuracy" },
  { value: "<900ms", label: "Median response" },
  { value: "SOC 2", label: "Type II certified" }
];

/** Scripted exchange for the interactive demo panel. */
export interface DemoMessage {
  role: "user" | "assistant";
  text: string;
  citations?: Array<{ label: string; source: string }>;
}

export const demoThreads: Array<{ id: string; label: string; messages: DemoMessage[] }> = [
  {
    id: "renewals",
    label: "Renewals",
    messages: [
      {
        role: "user",
        text: "Which enterprise accounts renew in Q4 and have an open severity-1 ticket?"
      },
      {
        role: "assistant",
        text: "Three accounts match. Meridian Logistics renews 12 Nov with two open S1 tickets, both filed against the batch export API. Atlas Freight renews 30 Nov with one S1 open since 4 Oct. Sunderland Health renews 15 Dec with one S1 raised yesterday.\n\nMeridian is the exposure: their tickets are 41 and 38 days old against a 5-day SLA.",
        citations: [
          { label: "Salesforce · Renewal pipeline Q4", source: "salesforce" },
          { label: "Zendesk · Open S1 queue", source: "zendesk" },
          { label: "Confluence · Support SLA policy", source: "confluence" }
        ]
      }
    ]
  },
  {
    id: "finance",
    label: "Finance",
    messages: [
      {
        role: "user",
        text: "What drove the 18% jump in infrastructure spend last month?"
      },
      {
        role: "assistant",
        text: "Almost all of it is one line: the vector index was resharded on 8 June, taking storage from 12 TB to 27 TB. That accounts for $41.2k of the $47.8k increase.\n\nThe remainder is egress from the new EU region, which started billing mid-month and will be roughly double next month at full utilisation.",
        citations: [
          { label: "Snowflake · cloud_costs_daily", source: "snowflake" },
          { label: "Jira · INFRA-2841 reshard", source: "jira" }
        ]
      }
    ]
  },
  {
    id: "product",
    label: "Product",
    messages: [
      {
        role: "user",
        text: "Summarise what customers said about the new onboarding flow."
      },
      {
        role: "assistant",
        text: "Across 214 pieces of feedback since launch, sentiment is positive on speed and negative on the SSO step.\n\nThe recurring complaint — 63 mentions — is that the SSO configuration screen does not explain which IdP metadata field to paste, so admins paste the entity ID instead of the metadata URL and the step fails silently.",
        citations: [
          { label: "Zendesk · Onboarding tag, 90 days", source: "zendesk" },
          { label: "Notion · Launch feedback log", source: "notion" }
        ]
      }
    ]
  }
];

export const footerColumns = [
  {
    title: "Product",
    links: ["Platform", "Connectors", "Evaluations", "Security", "Changelog"]
  },
  {
    title: "Developers",
    links: ["Documentation", "API reference", "SDKs", "Status", "Open source"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Customers", "Blog", "Contact"]
  }
];
