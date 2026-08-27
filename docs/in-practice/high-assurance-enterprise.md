# High-Assurance Enterprise Environment

!!! info "Illustrative Scenario"
    This is a fictionalised, technology-neutral example. It does not represent any specific organisation, programme or implementation.

## Scenario

An organisation operates a segregated enterprise environment supporting sensitive and business-critical services.

The architecture includes multiple security layers providing access control, privileged administration, network separation, monitoring, controlled data movement and administrative isolation.

Each capability has a legitimate protection objective.

Over time, however, the cumulative architecture has become increasingly interconnected.

Routine administration requires several dependent services to remain available, while recovery activities rely upon some of the same security components used during normal operation.

## Traditional Assurance View

Conventional assurance may reasonably examine whether:

- access controls are appropriately implemented;
- privileged activity is restricted and monitored;
- network boundaries enforce intended policy;
- administrative access is appropriately separated;
- security monitoring is effective; and
- information flows comply with organisational requirements.

These remain important questions.

## The ORSM Lens

ORSM introduces an additional question:

> **Does the combined security architecture remain operable and recoverable when one or more security capabilities become unavailable?**

The concern is not whether an individual control is justified.

The concern is whether the **cumulative operational effect** of the control estate has created fragility.

## Relevant Domains

- **Complexity Management**
- **Operational Sustainability**
- **Operational Resilience**
- **Recovery Engineering**
- **Dependency Resilience**

## Key Questions

- Which security capabilities are operationally critical?
- Which capabilities must remain available for administrators to recover the environment?
- Are recovery paths dependent upon normal identity, network or management services?
- What is the deepest dependency chain affecting a critical service?
- Can the organisation operate safely in a defined degraded mode?
- Are administrative procedures sustainable during a prolonged security-platform outage?
- Which controls create the largest failure blast radius?
- Can critical recovery activities occur independently of normal production security services?

## Illustrative Finding

The architecture may demonstrate strong control coverage while having a recovery path dependent upon several centralised security services.

Each dependency is individually reasonable.

Collectively, however, they create a **recoverability-critical dependency chain**.

## Potential ORSM Outcome

**Improve / Redesign**

The intended controls remain justified, but the architecture may require:

- independent recovery access;
- reduced dependency depth;
- documented degraded-mode operation;
- tested recovery paths; or
- simplification of overlapping control layers.

## ORSM Lesson

**Strong assurance and operational survivability must be designed together.**

The objective is not fewer controls for their own sake.

The objective is ensuring that justified controls do not collectively prevent the organisation from operating or recovering.
