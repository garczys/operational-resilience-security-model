# Controlled Transfer Between Trust Domains

!!! info "Illustrative Scenario"
    This is a generic cross-boundary example and does not describe a specific transfer product, gateway or implementation.

## Scenario

Information must move between two environments with different trust characteristics.

The transfer path includes security inspection and policy enforcement intended to prevent prohibited or unsafe content from crossing the boundary.

Strong boundary protection is required.

The transfer service also supports an important operational process.

## Traditional Assurance View

Conventional assurance may examine:

- boundary enforcement;
- protocol restriction;
- content inspection;
- malicious-content detection;
- policy compliance;
- logging; and
- administrative separation.

## The ORSM Lens

ORSM asks how the architecture behaves when inspection, policy or supporting services fail.

> **Does failure produce a controlled and recoverable state, or does it create operational pressure to bypass the security boundary?**

## Relevant Domains

- **Protection Intent**
- **Operational Resilience**
- **Recovery Engineering**
- **Human Factors**
- **Dependency Resilience**

## Key Questions

- What happens to information when inspection is unavailable?
- Is queued information preserved safely?
- Does the service fail in a predictable state?
- How many independent capabilities must remain available for a transfer to complete?
- Are recovery procedures independent of the affected transfer service?
- Could prolonged outage encourage informal or unauthorised alternatives?
- Are degraded-mode decisions formally authorised?
- Has the failure state been exercised?

## Illustrative Finding

The transfer architecture may enforce strong policy during normal operation while lacking an agreed operational model for prolonged inspection failure.

The security control is effective.

The operational response to its failure remains undefined.

## Potential ORSM Outcome

**Improve**

Define and test:

- failure handling;
- queue management;
- degraded operation;
- recovery ownership; and
- business communication during prolonged outage.

## ORSM Lesson

**A secure boundary must also have a secure failure state.**
