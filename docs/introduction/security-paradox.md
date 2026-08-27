# The Operational Security Paradox


Enterprise security has become increasingly capable. Identity platforms,
endpoint controls, privileged access management, segmentation,
monitoring and governance have all improved the ability of organisations
to protect information and services.

At the same time, security architectures can become progressively more
fragile.

The paradox is simple:

> **The pursuit of maximum assurance can reduce overall resilience.**

This is not normally caused by a single poor decision. Individual
controls are usually introduced for legitimate reasons: regulatory
obligations, risk reduction, visibility, recognised good practice or
response to an incident.

The problem emerges from their **cumulative architectural effect**.

## Observable failure patterns

### Recovery constrained by security

Controls intended to reduce risk can prevent administrators and
responders from reaching the systems required to diagnose or recover a
major failure.

### Governance saturation

Exception management, approvals and policy processes can grow beyond the
organisation's capacity to operate them, creating backlogs and decision
fatigue.

### Architectural complexity

Accumulating platforms, integrations and overlapping capabilities make
the environment increasingly difficult to understand, maintain and
recover.

### Dependency concentration

Identity, cloud, endpoint, PAM and other strategic platforms can become
dependencies for large parts of the enterprise. Their failure can
therefore have consequences far beyond the security service itself.

### Security tooling sprawl

Individually justified capabilities accumulate until integration,
maintenance and support overhead begin to consume the capacity required
for improvement.

<!-- ORSM-PARADOX-HARDENING-START -->

## The ORSM Interpretation

ORSM does not suggest that strong security controls inherently reduce resilience.

The issue is more specific.

A legitimate security requirement may lead to a justified control. That control is then implemented within an existing technical, organisational and operational environment.

As more controls, dependencies and management mechanisms are introduced, their **cumulative architectural effect** may create operational consequences that were not visible when each decision was considered individually.

A useful way to express this is:

**Security Requirement → Justified Control → Implementation → Cumulative Architectural Effect → Operational Consequence**

ORSM describes the resulting condition as the **Operational Security Paradox**:

> **A condition in which individually justified security decisions, through their cumulative implementation and interaction, unintentionally increase operational risk or reduce the organisation's ability to operate, maintain or recover the systems they are intended to protect.**

The paradox is therefore not an argument against strong security.

It is an argument for ensuring that security implementation remains:

- proportionate;
- understandable;
- supportable;
- recoverable; and
- aligned with realistic engineering and operational capacity.

Where an architecture becomes difficult to sustain, the problem may not be the underlying protection objective.

The implementation, integration or operating model may require improvement.

<!-- ORSM-PARADOX-HARDENING-END -->

## The ORSM response

The Operational Security Paradox is **not an argument against strong
security**.

It is an argument for security architecture that is:

-   proportionate;
-   sustainable;
-   recoverable;
-   understandable; and
-   operationally resilient.

ORSM makes the cumulative operational effect of security architecture
visible, assessable and manageable.
