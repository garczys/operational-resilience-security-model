---
title: The Implementation Gap
description: An ORSM Insight exploring why threat knowledge may remain valid while architecture, trust relationships, dependencies, control effectiveness and consequence change around it.
---

<div class="orsm-insight-label">INSIGHT 003</div>

# Your threat model may not be wrong. Your architecture may have moved on.

<div class="orsm-insight-meta">
Stefan Garczynski · September 2026
</div>

Security teams often describe a threat model as being **out of date**.

Sometimes that is true.

Threat actors change.

Techniques evolve.

New vulnerabilities emerge.

New technologies introduce new attack paths.

But there is another reason a threat model becomes less useful over time.

The threats may not have changed very much at all.

**The architecture has.**

---

## The Implementation Gap

A threat model is usually created against a particular architectural state.

It reflects the assets, trust boundaries, dependencies, access paths, controls and assumptions that existed when the analysis was performed.

Then implementation begins.

The environment evolves.

A platform is replaced.

A new identity dependency is introduced.

An administrative path changes.

A service becomes shared.

A temporary workaround becomes permanent.

A new integration crosses a trust boundary that did not previously exist.

The original threat knowledge may still be entirely relevant.

But its relationship with the architecture has changed.

This creates what I think of as **the implementation gap**.

The gap between:

**the architecture we assessed**

and

**the architecture we now operate**.

---

## Threat Knowledge Can Remain Valuable

There is a temptation to discard older threat analysis simply because the system has changed.

That can be wasteful.

Many threats are persistent.

Credential compromise remains relevant.

Privilege escalation remains relevant.

Misuse by authorised users remains relevant.

Supply-chain compromise remains relevant.

Service disruption remains relevant.

Administrative compromise remains relevant.

The important question is not always:

> **Are these threats still valid?**

It may be:

> **How does the current architecture change the way those threats can materialise?**

That distinction matters.

Threat knowledge should not necessarily be thrown away every time the architecture changes.

It should be **re-baselined against the new architectural reality**.

---

## Preserve the Threat Knowledge

A mature threat modelling process should retain useful knowledge.

The threat may still exist.

The adversary motivation may still exist.

The attack technique may still exist.

The business consequence may still matter.

What changes is the context in which the threat operates.

That leads to a simple principle:

> **Preserve the threat knowledge. Re-baseline the architecture. Revalidate the controls. Reassess the consequence.**

This is different from starting again simply because a threat model has reached a certain age.

Age alone does not invalidate threat knowledge.

Architectural change does.

---

## Re-baseline the Architecture

The first question should therefore be:

**What has changed since the threat model was created?**

Not merely at component level.

At architectural level.

Have trust relationships changed?

Have administrative paths changed?

Have services become shared?

Have previously isolated capabilities become integrated?

Has a new management plane appeared?

Has remote access been introduced?

Has identity become more centralised?

Has a dependency moved outside the organisation?

Has a control become a critical service dependency in its own right?

These changes can alter attack paths without changing the underlying threat.

---

## Revalidate the Controls

A control that was effective against the previous architecture may not provide the same assurance against the current one.

This is particularly important when controls depend upon the architecture around them.

Segmentation may still exist, but the management plane may now cross the boundary.

Privileged access controls may remain in place, but recovery access may depend upon the same identity platform.

Monitoring may remain comprehensive, but the systems being monitored may now share dependencies with the monitoring platform.

Inspection controls may still exist, but data flows may have changed.

The control has not necessarily failed.

Its **assurance context has changed**.

So another important question becomes:

> **Does the control still mitigate the threat in the architecture we operate today?**

That question is more useful than simply confirming that the control remains present.

---

## Asset Criticality Is Not the Whole Story

Architectural change can also alter what matters.

Traditional assessments often focus on **asset criticality**.

That remains important.

But some services become significant because of the number of other services that depend upon them.

An identity platform may not contain the organisation's most sensitive information.

A management plane may not be considered a business service.

A monitoring platform may not directly process mission-critical transactions.

Yet compromise or failure of any of them could affect many other services simultaneously.

This creates another useful distinction:

**Asset Criticality** — how important the asset itself is.

**Trust Criticality** — how much of the architecture depends upon the asset being trustworthy, available or correctly functioning.

A component with modest asset criticality may possess enormous trust criticality.

That can materially alter the threat model.

---

## Consequence Changes Too

Threat modelling often focuses heavily on likelihood and attack technique.

But architectural evolution can change consequence just as significantly.

A compromise that once affected one system may now affect ten.

A failed security service that once created inconvenience may now prevent administration across an entire estate.

A shared platform may concentrate risk that was previously distributed.

A new integration may allow failure or compromise to propagate beyond its original boundary.

The threat may be unchanged.

The **blast radius** is not.

This is why threat modelling should consider architectural consequence as a living characteristic rather than a static property.

---

## The Architecture May Have Become the Risk Multiplier

Modern environments increasingly depend upon shared security capabilities.

Identity.

Privileged access.

Management infrastructure.

Endpoint security.

Monitoring.

Logging.

Inspection.

Automation.

These capabilities often improve consistency and control.

But they can also concentrate architectural dependency.

The same control that reduces one type of security risk may increase systemic consequence if it becomes a common dependency across many services.

This does not mean the control is wrong.

It means its **architectural role has changed**.

And that change should be visible in the threat model.

---

## Threat Models Should Follow Material Change

This leads to a practical conclusion.

Threat models should not only be reviewed because time has passed.

They should be revisited when the architecture experiences **material change**.

Examples include:

- significant identity changes
- new privileged access models
- new trust boundaries
- new shared platforms
- major integration changes
- management-plane redesign
- new remote access paths
- new cross-domain transfers
- significant supplier dependencies
- architectural consolidation
- major recovery design changes
- material changes in consequence or blast radius

These are often more meaningful triggers than an arbitrary annual review date.

---

## The Threat Model Is Not the Architecture

A threat model is an abstraction.

The system eventually implemented will always contain more detail, dependency and operational behaviour than the model could predict.

That is normal.

The problem begins when the threat model is treated as evidence that the implemented architecture has already been fully understood.

Implementation creates new information.

Operational experience creates new information.

Incidents create new information.

Dependency mapping creates new information.

Architecture assurance should feed that information back into the threat model.

Threat modelling should therefore be a **continuing architectural activity**, not simply a design-stage artefact.

---

## The ORSM Perspective

This is where the Operational Resilience Security Model adds a useful lens.

ORSM does not replace threat modelling.

It asks whether the architecture produced from the design remains proportionate, resilient, sustainable and recoverable once implemented.

That perspective can expose changes that should feed back into the threat model.

For example:

**Complexity Management** may reveal new attack or failure paths.

**Operational Resilience** may expose increased consequence.

**Recovery Engineering** may reveal dependencies that alter survivability.

**Human Factors** may reveal operational behaviour not represented in the original model.

**Dependency Resilience** may expose trust concentration that materially changes blast radius.

Threat modelling and operational assurance should therefore inform one another.

---

## Re-baseline Rather Than Restart

There is value in preserving organisational threat knowledge.

The answer to an ageing threat model should not automatically be:

**throw it away and start again.**

Instead:

> **Preserve the threat knowledge.**
>
> **Re-baseline the architecture.**
>
> **Revalidate the controls.**
>
> **Reassess the consequence.**

That approach retains what the organisation has already learned while forcing the model to reconnect with architectural reality.

---

## The Question Worth Asking

So when somebody says:

**“The threat model is out of date.”**

The first response might not need to be:

**“What new threats have appeared?”**

It might be:

> **“What changed in the architecture?”**

Because sometimes the threats did not move.

**Everything around them did.**

---

## Related ORSM Material

- [Insight 001 — Individually Rational Controls](individually-rational-controls.md)
- [Insight 002 — Control Fatigue](control-fatigue.md)
- [ORSM Assessment Domains](../model/domains.md)
- [ORSM Assessment Methodology](../assessment/methodology.md)
- [The Operational Security Paradox](../introduction/security-paradox.md)

---

## Constructive Challenge

This Insight represents analysis and developing thinking around ORSM. It does not introduce additional ORSM assessment requirements.

If your experience supports, contradicts or materially challenges the argument presented here, that is useful evidence.

**hello@orsmframework.org**

Please do not send classified, commercially sensitive, customer-identifiable or security-sensitive information.
