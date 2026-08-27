# Assessment Methodology

The ORSM Assessment Methodology is intended to be repeatable,
evidence-based and technology agnostic.

It can be applied during enterprise architecture reviews, design
authority review, major change programmes and post-incident review.

<!-- ORSM-ASSESSMENT-HARDENING-START -->

## Assessment Position

ORSM assessments are **control-neutral and risk-context driven**.

The existence of complexity, operational workload or strong security controls is not automatically a negative finding.

The assessor should first establish:

1. the protection objective;
2. the credible threat or consequence being addressed;
3. the operational context;
4. the security benefit provided;
5. the complexity and dependency introduced; and
6. whether the organisation possesses the capacity required to operate and recover the resulting architecture.

A complex architecture may be entirely appropriate where the threat, consequence, regulatory requirement, safety need or mission objective justifies that complexity.

The ORSM concern is **unmanaged, unjustified or unsustainable complexity**.

### Operational and Engineering Fatigue

Security architecture consumes organisational capacity.

Controls may require:

- configuration;
- monitoring;
- maintenance;
- patching;
- integration;
- testing;
- exception management;
- assurance;
- specialist skills;
- incident response; and
- recovery engineering.

Where these cumulative demands exceed sustainable organisational capacity, **operational and engineering fatigue** may develop.

This may become visible through indicators such as:

- growing maintenance backlogs;
- unresolved technical debt;
- increasing exception volumes;
- longer change lead times;
- configuration drift;
- reliance on a small number of specialists;
- workaround behaviour;
- failed or delayed changes;
- reduced improvement capacity; and
- deteriorating recovery performance.

The appropriate ORSM response is not automatically to remove controls.

Improvement may instead involve:

- simplification;
- automation;
- platform consolidation;
- additional engineering capacity;
- improved documentation;
- revised operational processes;
- redesigned dependencies;
- improved recovery capability; or
- retirement of controls that are no longer justified.

> **A justified security architecture must also be adequately resourced to operate.**

<!-- ORSM-ASSESSMENT-HARDENING-END -->

## Assessment Lifecycle

| Phase | Activity | Deliverable |
| ---: | --- | --- |
| 1 | Define Scope | Documented assessment scope |
| 2 | Understand the Architecture | Architectural dependency map |
| 3 | Evaluate the Seven Domains | Domain assessment findings |
| 4 | Assess Operational Risk | Operational Risk Assessment |
| 5 | Determine Architectural Quality | Architectural Quality Assessment |
| 6 | Recommend Improvement | Architectural Improvement Plan |

## Assessment Outcomes

| Outcome | Meaning |
| --- | --- |
| **Accept** | Appropriate operational quality; routine monitoring is sufficient. |
| **Improve** | Remains effective, with clear opportunities to improve resilience or efficiency. |
| **Redesign** | Introduces significant operational risk and should be redesigned before further expansion. |
| **Transform** | Operationally unsustainable and requires strategic redesign rather than incremental improvement. |

## Principles of Good Assessment

An ORSM assessment should be:

-   independent;
-   evidence-based;
-   repeatable;
-   risk-informed;
-   business-focused;
-   technology agnostic;
-   proportionate; and
-   collaborative.

The purpose is not to criticise previous architectural decisions. It is
to improve future architectural quality through informed, balanced and
objective assessment.