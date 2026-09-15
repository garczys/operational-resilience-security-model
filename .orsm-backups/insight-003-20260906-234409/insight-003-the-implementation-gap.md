---
title: The Implementation Gap
description: Why threat knowledge can remain valid while the architecture around it changes.
---

<div class="orsm-insight-label">INSIGHT 003</div>

# Your threat model may not be wrong. Your architecture may have moved on.

<div class="orsm-insight-meta">
Stefan Garczynski · September 2026
</div>

Security teams often describe a threat model as being **out of date**.

Sometimes that is true.

Threat actors change. Techniques evolve. New vulnerabilities emerge. New technologies introduce new attack paths.

But there is another reason a threat model becomes less useful over time.

The threats may not have changed very much at all.

**The architecture has.**

---

## The Implementation Gap

A threat model is normally created against a particular architectural state.

It reflects the assets, trust boundaries, dependencies, access paths, controls and assumptions that existed when the analysis was performed.

Then implementation begins.

The environment evolves.

A platform is replaced.

A new identity dependency appears.

An administrative path changes.

A service becomes shared.

A temporary workaround becomes permanent.

A new integration crosses a trust boundary that did not previously exist.

The original threat knowledge may still be entirely relevant.

But its relationship with the architecture has changed.

This creates what I think of as **the implementation gap**:

> **The gap between the architecture we assessed and the architecture we now operate.**

---

## Threat Knowledge Can Remain Valuable

There is a temptation to discard older threat analysis simply because the system has changed.

That can be wasteful.

Credential compromise remains relevant.

Privilege escalation remains relevant.

Misuse by authorised users remains relevant.

Supply-chain compromise remains relevant.

Service disruption remains relevant.

Administrative compromise remains relevant.

The more useful question may therefore be:

> **How does the current architecture change the way those threats can materialise?**

Threat knowledge should not necessarily be thrown away every time an architecture changes.

It should be **re-baselined against the new architectural reality**.

---

## Preserve the Threat Knowledge

This leads to a simple principle:

> **Preserve the threat knowledge.**
>
> **Re-baseline the architecture.**
>
> **Revalidate the controls.**
>
> **Reassess the consequence.**

Age alone does not necessarily invalidate threat knowledge.

Architectural change can invalidate the assumptions surrounding it.

---

## Re-baseline the Architecture

The first question should therefore be:

**What has changed since the threat model was created?**

Not merely at component level, but at architectural level.

Have trust relationships changed?

Have administrative paths changed?

Have services become shared?

Have isolated capabilities become integrated?

Has a new management plane appeared?

Has remote access been introduced?

Has identity become more centralised?

Has a dependency moved outside the organisation?

Has a control itself become a critical service dependency?

These changes can alter attack paths without changing the underlying threat.

---

## Revalidate the Controls

A control that was effective against the previous architecture may not provide the same assurance against the current one.

Segmentation may still exist, while the management plane now crosses the boundary.

Privileged access controls may remain in place, while recovery access depends upon the same identity platform.

Monitoring may remain comprehensive, while the monitored systems now share dependencies with the monitoring platform itself.

The control has not necessarily failed.

Its **assurance context has changed**.

The important question becomes:

> **Does the control still mitigate the threat in the architecture we operate today?**

That is more useful than simply confirming that the control remains present.

---

## Asset Criticality Is Not the Whole Story

Traditional assessments often focus on **asset criticality**.

That remains important.

But some components become significant because large parts of the architecture depend upon them.

An identity platform may not contain the organisation's most sensitive data.

A management plane may not be considered a business service.

A monitoring system may not process mission-critical transactions.

Yet failure or compromise of any of them could affect many services simultaneously.

This creates a useful distinction:

**Asset Criticality** — how important the asset itself is.

**Trust Criticality** — how much of the architecture depends upon the asset remaining trustworthy, available and correctly functioning.

A component with modest asset criticality may possess enormous trust criticality.

That can materially change the threat model.

---

## Consequence Changes Too

Architectural evolution can also change consequence.

A compromise that once affected one system may now affect ten.

A failed security service that once caused inconvenience may now prevent administration across an entire estate.

A shared platform may concentrate risk that was previously distributed.

A new integration may allow compromise or failure to propagate beyond its original boundary.

The threat may be unchanged.

**The blast radius is not.**

---

## The Architecture Can Become the Risk Multiplier

Modern environments increasingly depend upon shared security capabilities:

Identity.

Privileged access.

Management infrastructure.

Monitoring.

Logging.

Inspection.

Automation.

These capabilities can improve consistency and control.

But they can also concentrate architectural dependency.

The same security control that reduces one category of risk may increase systemic consequence if it becomes a common dependency across many services.

That does not mean the control is wrong.

It means its **architectural role has changed**.

That change should be reflected in the threat model.

---

## Threat Models Should Follow Material Change

Threat models should not only be reviewed because time has passed.

They should be revisited when the architecture experiences **material change**.

Examples include:

- significant identity changes
- new privileged access models
- new trust boundaries
- shared platforms
- major integration changes
- management-plane redesign
- remote access changes
- cross-domain transfers
- significant supplier dependencies
- architectural consolidation
- major recovery design changes
- material changes in consequence or blast radius

These may be more meaningful triggers than an arbitrary annual review date.

---

## The Threat Model Is Not the Architecture

A threat model is an abstraction.

The implemented system will inevitably contain more detail, dependency and operational behaviour than the original model could predict.

That is normal.

Implementation creates new information.

Operational experience creates new information.

Incidents create new information.

Dependency analysis creates new information.

Architecture assurance should feed that information back into threat modelling.

Threat modelling should therefore be a **continuing architectural activity**, not simply a design-stage artefact.

---

## The ORSM Perspective

ORSM does not replace threat modelling.

It asks whether the architecture produced through design remains proportionate, resilient, sustainable and recoverable once implemented.

That operational assurance perspective can expose changes that should feed back into the threat model.

**Complexity Management** may reveal new attack or failure paths.

**Operational Resilience** may reveal increased consequence.

**Recovery Engineering** may expose hidden dependencies.

**Human Factors** may reveal behaviour not represented in the original model.

**Dependency Resilience** may expose concentrations of trust that materially alter blast radius.

Threat modelling and operational assurance should therefore inform one another.

---

## Re-baseline Rather Than Restart

The answer to an ageing threat model should not automatically be:

**Throw it away and start again.**

Instead:

> **Preserve the threat knowledge.**
>
> **Re-baseline the architecture.**
>
> **Revalidate the controls.**
>
> **Reassess the consequence.**

This retains what the organisation has already learned while reconnecting the model with architectural reality.

---

## The Question Worth Asking

When somebody says:

**“The threat model is out of date.”**

The first response might not need to be:

**“What new threats have appeared?”**

It might be:

> **“What changed in the architecture?”**

Because sometimes the threats did not move.

**Everything around them did.**

---

## Constructive Challenge

This Insight represents analysis and developing thinking around ORSM. It does not introduce additional ORSM assessment requirements.

Constructive challenge is encouraged.

**hello@orsmframework.org**

Please do not send classified, commercially sensitive, customer-identifiable or security-sensitive information.
