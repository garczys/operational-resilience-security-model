# ORSM and Secure by Design

## A Complementary Operational Assurance Perspective

Secure by Design and ORSM address different but closely related
architectural questions.

**Secure by Design seeks to ensure that security is considered from the
beginning and remains an integral part of architectural decision-making.**

ORSM complements this by examining whether the resulting security
architecture remains proportionate, understandable, sustainable,
resilient and recoverable as it is implemented and operated.

!!! important "ORSM does not replace Secure by Design"
    ORSM should not be used as an alternative to Secure by Design,
    established security frameworks, engineering standards or risk
    management processes.

    It provides an additional operational assurance perspective that
    can be incorporated into existing architectural governance.

---

=== "Secure by Design"

    ## Design security in

    Secure by Design encourages security to be considered as part of
    architecture from its inception rather than added after major
    design decisions have already been made.

    The NCSC Cyber Security Design Principles organise this thinking
    around five broad principles:

    1. **Establish the context before designing a system**
    2. **Make compromise difficult**
    3. **Make disruption difficult**
    4. **Make compromise detection easier**
    5. **Reduce the impact of compromise**

    These principles encourage architects to understand the system,
    its purpose, threats, dependencies, users and acceptable risks
    before selecting and implementing security measures.

    This remains fundamental to good security architecture.

    ### The architectural question

    > **How should security be designed into this system?**

=== "ORSM Lens"

    ## Assure the architecture that results

    Security requirements eventually become real architectural
    components.

    Controls become:

    - technologies;
    - services;
    - integrations;
    - trust relationships;
    - administrative processes;
    - dependencies;
    - operational procedures;
    - recovery requirements; and
    - demands upon people and engineering capacity.

    ORSM examines the cumulative operational characteristics of that
    resulting architecture.

    It considers seven interconnected domains:

    **Protection Intent**

    Is the reason for the security measure still clear, justified and
    connected to a credible protection objective?

    **Complexity Management**

    Has implementation introduced unnecessary architectural complexity
    or dependency?

    **Operational Sustainability**

    Can the organisation realistically maintain the architecture over
    its intended lifetime?

    **Operational Resilience**

    How does the security architecture behave when components or
    supporting services become unavailable?

    **Recovery Engineering**

    Can security capabilities themselves be restored to a trustworthy
    operational state?

    **Human Factors**

    Can people realistically operate the architecture securely,
    particularly during abnormal conditions?

    **Dependency Resilience**

    Which dependencies have become critical to the continued operation
    or recovery of the environment?

    ### The ORSM question

    > **Does this control improve security outcomes without creating
    > disproportionate operational risk?**

=== "Combined Approach"

    ## Secure by Design + ORSM

    ORSM can operate as a feedback mechanism within a Secure by Design
    lifecycle.

    <div class="orsm-flow orsm-flow-combined" markdown>

    <div class="orsm-flow-stage">
    <span class="orsm-flow-number">01</span>
    <strong>Establish Context</strong>
    <small>Purpose · threats · risk · constraints</small>
    </div>

    <span class="orsm-flow-arrow">→</span>

    <div class="orsm-flow-stage">
    <span class="orsm-flow-number">02</span>
    <strong>Secure by Design</strong>
    <small>Objectives · principles · control selection</small>
    </div>

    <span class="orsm-flow-arrow">→</span>

    <div class="orsm-flow-stage">
    <span class="orsm-flow-number">03</span>
    <strong>Architecture</strong>
    <small>Security translated into design</small>
    </div>

    <span class="orsm-flow-arrow">→</span>

    <div class="orsm-flow-stage">
    <span class="orsm-flow-number">04</span>
    <strong>Implementation</strong>
    <small>Controls become operational capability</small>
    </div>

    <span class="orsm-flow-arrow">→</span>

    <div class="orsm-flow-stage orsm-flow-highlight">
    <span class="orsm-flow-number">05</span>
    <strong>ORSM Assurance</strong>
    <small>Operational characteristics assessed</small>
    </div>

    <span class="orsm-flow-arrow">→</span>

    <div class="orsm-flow-stage">
    <span class="orsm-flow-number">06</span>
    <strong>Architectural Judgement</strong>
    <small>Retain · Improve · Redesign</small>
    </div>

    <div class="orsm-feedback">
    <span>↳</span>
    <strong>Feedback into Design</strong>
    <small>Operational evidence informs the next architectural decision</small>
    </div>

    </div>

    This is intentionally a **feedback loop**, not an additional
    compliance gate.

    ORSM findings should inform architectural judgement.

    Where a weakness is identified, the preferred response is not
    automatically to remove the control.

    Instead, architects should ask whether the same protection
    objective can be achieved through an implementation that is:

    - simpler;
    - more resilient;
    - easier to recover;
    - less dependent upon fragile services;
    - easier for people to operate; or
    - more sustainable throughout its lifecycle.

=== "Worked Example"

    ## Privileged Administrative Access

    Consider a sensitive service requiring strong control over
    privileged administration.

    ### Secure by Design

    The architecture establishes that privileged access must:

    - strongly authenticate administrators;
    - restrict administrative pathways;
    - separate privileged activity from routine user activity;
    - generate appropriate audit evidence; and
    - limit the impact of compromised credentials.

    These are legitimate protection objectives.

    ### Implementation

    The resulting solution introduces several supporting services:

    - central identity;
    - multi-factor authentication;
    - privileged access management;
    - administrative workstations;
    - network policy enforcement;
    - logging;
    - credential services; and
    - approval workflows.

    Each component may be individually justified.

    ### ORSM Lens

    ORSM then asks:

    - Which of these services must be available for administration?
    - Which must be available during recovery?
    - What happens if central identity is unavailable?
    - Is emergency administrative access independently recoverable?
    - How many teams must coordinate during a major outage?
    - Are operational procedures sufficiently simple under pressure?
    - Has the recovery path actually been exercised?

    ### Potential Finding

    The security design may be strong during normal operation while
    recovery remains dependent upon several of the same services that
    may be unavailable during a major incident.

    The control objective remains valid.

    The **architecture around the control requires improvement**.

    ### Potential Response

    **Improve**

    Retain the privileged-access protection objective while introducing
    an appropriately governed and tested independent recovery path.

---

## Where the Approaches Meet

| Secure by Design consideration | Complementary ORSM perspective |
| --- | --- |
| Establish the context | Protection Intent and Dependency Resilience |
| Make compromise difficult | Protection Intent and Complexity Management |
| Make disruption difficult | Operational Resilience and Dependency Resilience |
| Make compromise detection easier | Operational Sustainability and Human Factors |
| Reduce the impact of compromise | Operational Resilience and Recovery Engineering |
| Operate and evolve the system | Sustainability, Recovery and reassessment |

!!! note "This is not a compliance mapping"
    The table illustrates areas of complementary architectural thinking.

    It does **not** claim equivalence between ORSM domains and NCSC
    principles and should not be used as a control crosswalk or
    compliance matrix.

---

## Security Outcomes Remain the Objective

ORSM does not treat compliance, controls or established security
frameworks as the problem.

Frameworks, standards and Secure by Design approaches provide essential
benchmarks, principles and assurance expectations.

The architectural challenge arises in how those requirements are
translated into real systems.

A control may be:

- justified;
- compliant;
- correctly implemented; and
- effective in isolation;

while its interaction with other controls still creates unintended
operational consequences.

Those consequences may include:

- excessive dependency;
- administrative complexity;
- engineering workload;
- specialist resource requirements;
- recovery constraints;
- operational friction; or
- disproportionate lifecycle cost.

ORSM provides a mechanism for identifying these characteristics and
feeding them back into architectural decision-making.

> **The objective is not weaker security.**
>
> **The objective is security architecture that remains effective in
> the environment in which it must operate.**

---

## Secure by Design as a Continuing Process

Secure by Design should not end when an architecture is approved.

Systems change.

Threats change.

Dependencies change.

People change.

Technology changes.

Operational experience also reveals characteristics that may not have
been apparent during initial design.

ORSM therefore supports periodic reassessment throughout the lifecycle:

<div class="orsm-flow orsm-flow-lifecycle" markdown>

<div class="orsm-flow-stage">
<span class="orsm-flow-number">01</span>
<strong>Design</strong>
<small>Establish architectural intent</small>
</div>

<span class="orsm-flow-arrow">→</span>

<div class="orsm-flow-stage">
<span class="orsm-flow-number">02</span>
<strong>Implement</strong>
<small>Translate intent into capability</small>
</div>

<span class="orsm-flow-arrow">→</span>

<div class="orsm-flow-stage">
<span class="orsm-flow-number">03</span>
<strong>Operate</strong>
<small>Run the architecture in practice</small>
</div>

<span class="orsm-flow-arrow">→</span>

<div class="orsm-flow-stage">
<span class="orsm-flow-number">04</span>
<strong>Observe</strong>
<small>Gather operational evidence</small>
</div>

<span class="orsm-flow-arrow">→</span>

<div class="orsm-flow-stage orsm-flow-highlight">
<span class="orsm-flow-number">05</span>
<strong>ORSM Assurance</strong>
<small>Assess operational characteristics</small>
</div>

<span class="orsm-flow-arrow">→</span>

<div class="orsm-flow-stage">
<span class="orsm-flow-number">06</span>
<strong>Architectural Judgement</strong>
<small>Retain · Improve · Redesign</small>
</div>

<div class="orsm-feedback">
<span>↳</span>
<strong>Return to Design</strong>
<small>Evidence and experience inform the next design decision</small>
</div>

</div>

This creates a continuous relationship between **security intent,
implementation and operational evidence**.

---

## A Question Rather Than a Checkbox

ORSM is deliberately intended to encourage architectural reasoning.

The objective is not to ask:

> **Have we done Secure by Design?**

as though Secure by Design were a single activity that can be completed
and closed.

A more useful question is:

> **Does the architecture continue to demonstrate the security,
> resilience and operational characteristics that its design intended?**

ORSM provides one way of structuring that conversation.

---

## Further Reading

The following NCSC material provides the primary background for the
Secure by Design concepts discussed on this page:

- [NCSC — Secure Design Principles](https://www.ncsc.gov.uk/collection/cyber-security-design-principles)
- [NCSC — Cyber Security Design Principles](https://www.ncsc.gov.uk/collection/cyber-security-design-principles/cyber-security-design-principles)
- [NCSC — Establish the Context Before Designing a System](https://www.ncsc.gov.uk/collection/cyber-security-design-principles/establish-the-context-before-designing-a-system)
- [NCSC — How the NCSC Thinks About Security Architecture](https://www.ncsc.gov.uk/blog-post/how-ncsc-thinks-about-security-architecture)
- [NCSC — Secure by Default](https://www.ncsc.gov.uk/information/secure-default)

