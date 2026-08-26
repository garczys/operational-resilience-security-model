# Evidence Model

!!! note "ORSM 2.1 refinement" The source framework establishes
**Evidence-Based Architectural Assurance**, but does not yet define a
formal evidence hierarchy. This page is therefore a proposed ORSM 2.1
refinement rather than settled source text.

ORSM assurance should distinguish between a claim that a control works
and evidence that demonstrates how it behaves in operation.

## Proposed Evidence Hierarchy

### Level 0 --- Assertion

A claim or assumption without supporting evidence.

Example: *We believe the service can be recovered within the required
period.*

### Level 1 --- Documented Evidence

Architecture documentation, procedures, design records, policies or
vendor documentation support the claim.

### Level 2 --- Operational Evidence

Service records, incidents, exceptions, workload data, monitoring or
operational metrics demonstrate real-world behaviour.

### Level 3 --- Tested Evidence

Recovery exercises, failover tests, degraded-mode testing or controlled
simulations demonstrate that the architecture performs as expected.

### Level 4 --- Demonstrated Evidence

The capability has been observed operating successfully under realistic
adverse conditions, with outcomes captured and used to improve the
architecture.

## Evidence sources recognised by ORSM

The existing framework explicitly identifies:

-   threat modelling;
-   dependency analysis;
-   recovery testing;
-   operational metrics; and
-   incident analysis.

The evidence hierarchy above is intended to organise these sources
rather than replace them.
