# Architecture Design Principles

These principles provide practical guidance for architecture reviews,
design authorities, procurement decisions and significant change
programmes.

## Principle 1 --- Protection Intent First

Every security capability must exist for a clearly defined purpose: the
business asset requiring protection, the credible threat addressed, the
business outcome preserved and the measurable improvement expected.

## Principle 2 --- Complexity Must Be Governed

Every additional platform, integration or dependency increases the
effort required to operate, maintain and recover the environment. Where
multiple solutions provide equivalent protection, prefer the one
introducing the least complexity.

## Principle 3 --- Design for Operational Survivability

No security capability should become a single point of operational
failure without explicit acceptance of the associated business risk.
Architectures should support graceful degradation and predictable
recovery.

## Principle 4 --- Apply Security Proportionately

Applying identical controls across every environment increases
complexity while delivering diminishing benefit. Investment should
reflect business criticality, threat exposure and operational
importance.

## Principle 5 --- Design for Dependency Resilience

Consolidation on shared platforms --- identity, cloud, endpoint, PAM and
similar capabilities --- can improve efficiency while concentrating
operational risk. Architectures should minimise unnecessary dependency
concentration and validate contingency arrangements.

## Architectural Decision Framework

Before a significant architectural decision proceeds, it should be able
to answer five questions with supporting evidence:

1.  **Protection** --- does the capability address a clearly defined
    business risk?
2.  **Complexity** --- does the design introduce avoidable complexity?
3.  **Survivability** --- can the organisation continue operating if the
    capability fails?
4.  **Proportionality** --- is the level of assurance appropriate to the
    business risk?
5.  **Dependency** --- does the decision strengthen or weaken overall
    architectural resilience?
