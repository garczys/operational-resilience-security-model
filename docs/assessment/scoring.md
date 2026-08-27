# Scoring

ORSM domains may be assessed using a five-point rating scale.

The rating provides a consistent way of expressing architectural condition, but it should always be supported by **evidence and architectural judgement**.

## Domain Rating Scale

| Rating | Assessment | Interpretation |
|:------:|------------|----------------|
| **1** | Poor | Significant weaknesses are present. The architecture may introduce unacceptable operational risk or lack sufficient evidence of sustainable operation. |
| **2** | Developing | Some appropriate measures are present, but important weaknesses, dependencies or sustainability concerns remain unresolved. |
| **3** | Acceptable | The architecture provides an appropriate baseline of operational assurance for its current risk context, although improvement opportunities remain. |
| **4** | Good | The architecture demonstrates strong operational characteristics supported by evidence, with identified risks understood and actively managed. |
| **5** | Excellent | The architecture demonstrates mature, evidence-supported operational assurance, including effective management of complexity, dependencies, sustainability and recovery. |

!!! warning "Ratings support judgement — they do not replace it"
    ORSM ratings are **ordinal indicators of architectural condition**, not mathematical measurements of security effectiveness.

    A rating of **4 is not twice as good as a rating of 2**.

    Domain ratings should not be used to conceal a material weakness elsewhere in the architecture.

## Seven-Domain Assessment

Each of the seven ORSM domains is assessed independently:

| Domain | Rating |
|--------|:------:|
| Protection Intent | 1–5 |
| Complexity Management | 1–5 |
| Operational Sustainability | 1–5 |
| Operational Resilience | 1–5 |
| Recovery Engineering | 1–5 |
| Human Factors | 1–5 |
| Dependency Resilience | 1–5 |

The detailed findings within each domain remain more important than any aggregate result.

## Important Interpretation

A high overall assessment must **not conceal a serious weakness in an individual domain**.

For example, an architecture demonstrating strong protection intent and operational sustainability may still require redesign where a critical recovery dependency represents an unacceptable single point of failure.

An ORSM assessment should therefore record each rating alongside:

- supporting evidence;
- material risks;
- architectural dependencies;
- recommendations;
- trend over time; and
- the resulting architectural decision.

## Example Assessment

| Domain | Rating |
|--------|:------:|
| Protection Intent | **4** |
| Complexity Management | **3** |
| Operational Sustainability | **4** |
| Operational Resilience | **5** |
| Recovery Engineering | **4** |
| Human Factors | **3** |
| Dependency Resilience | **4** |

The ratings provide a useful summary of architectural condition, but they should be interpreted alongside the underlying evidence and findings.

ORSM deliberately avoids treating the combined ratings as a mathematical measurement of security effectiveness.

## Architectural Interpretation

The purpose of scoring is to help identify:

- areas of architectural strength;
- material weaknesses;
- disproportionate operational risk;
- changes in architectural condition over time; and
- areas requiring further investigation or improvement.

The assessment should ultimately support an architectural decision such as:

**Retain** — the capability remains justified and operationally proportionate.

**Improve** — the capability remains justified but opportunities exist to improve sustainability, resilience or efficiency.

**Redesign** — the protection objective remains valid, but the implementation introduces unacceptable operational risk.

**Retire** — the capability no longer provides sufficient protection value to justify its operational cost or complexity.

## Scoring Principle

> **ORSM scoring supports architectural judgement. It does not replace it.**

The purpose of the assessment is not to achieve the highest possible numerical score.

It is to understand whether the security architecture remains **effective, proportionate, sustainable, recoverable and resilient within its intended risk context**.
