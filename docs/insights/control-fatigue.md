---
title: Control Fatigue
description: An ORSM Insight exploring how accumulated controls, architectural complexity and operational burden can gradually reduce real-world security effectiveness.
---

<div class="orsm-insight-label">INSIGHT 002</div>

# Does it really need to be this way?

<div class="orsm-insight-meta">
Stefan Garczynski · September 2026
</div>

**Why was the environment built this way?**

Because it provided the required security outcomes.

Or at least, that was the intention.

Over time, another control was introduced. Then another. Another authentication step. Another inspection point. Another approval. Another monitoring capability. Another management boundary. Another process intended to reduce risk.

Individually, many of those decisions may have been entirely reasonable.

Each control may have addressed a genuine requirement, responded to a credible threat, closed an identified weakness or satisfied an assurance concern.

But look at the environment today.

**Did those decisions collectively deliver the security outcomes we expected?**

Or have we inherited a mass of controls, dependencies and architectural complexity that nobody is particularly comfortable challenging?

And perhaps the more uncomfortable question:

> **Does it really need to be this way?**

---

## Control Accumulation

Security architecture has a natural tendency towards addition.

When a new risk is identified, we add a control.

When assurance identifies a gap, we add a control.

When an incident occurs, we add a control.

When a new requirement appears, we add another.

This is understandable.

Removing a control feels inherently more difficult. Addition can be presented as strengthening security. Removal requires someone to demonstrate that protection will not be weakened and, ultimately, to accept the decision.

The result can be an **architectural ratchet**.

Controls are introduced over many years, often by different programmes, architects, suppliers and governance bodies. The environment changes around them, but the controls remain.

The original threat may have changed.

The vulnerability may have disappeared.

A newer capability may now provide the same protection.

A temporary compensating control may have quietly become permanent.

The technology it was protecting may no longer even exist in the same form.

Yet the organisation continues carrying the control.

And every control has a cost.

---

## The Cost Is Not Just Financial

When we discuss the cost of security controls, attention naturally turns towards licensing, infrastructure and support contracts.

But controls also consume **operational capacity**.

Someone has to operate them.

Someone has to monitor them.

Someone has to patch them.

Someone has to understand their configuration.

Someone has to maintain their integrations.

Someone has to investigate their alerts.

Someone has to administer their access model.

Someone has to document them.

Someone has to assure them.

And eventually, someone has to recover them.

The control also becomes another component in the architecture and potentially another dependency for something else.

Individually these costs may appear insignificant.

Collectively they can fundamentally change the system.

---

## When Controls Become the Architecture

This is where control accumulation becomes an architectural problem.

A service may depend upon central identity, privileged access management, endpoint security, network inspection, monitoring, security information and event management, vulnerability management, change governance and multiple administrative boundaries.

Each capability may be justified.

But the important question is no longer simply whether each control is effective.

We need to understand **the architecture created by their interaction**.

What depends upon what?

Which controls share management infrastructure?

Which depend upon the same identity service?

Can administrators reach systems when normal access mechanisms fail?

Does monitoring depend upon the infrastructure it is supposed to monitor?

Can recovery be performed independently of the failed environment?

Have we created common failure paths through mechanisms originally intended to reduce risk?

At some point, the controls are no longer merely protecting the architecture.

> **They have become part of the architecture.**

And therefore their complexity, dependencies and failure characteristics become security concerns in their own right.

---

## Control Fatigue

Eventually this accumulated complexity reaches people.

Engineers navigate increasingly complicated administrative processes.

Users encounter additional authentication and approval requirements.

SOC analysts process growing volumes of telemetry.

Operations teams maintain expanding security tooling estates.

Architects manage increasing numbers of dependencies and exceptions.

Governance bodies review progressively more complicated designs.

Documentation grows.

Specialist knowledge becomes concentrated.

Change becomes harder.

Recovery becomes harder.

People compensate.

Workarounds appear.

Exceptions become normal.

Alerts receive less attention.

Approvals risk becoming procedural rather than meaningful.

Documentation drifts from reality.

Controls may still exist exactly as designed.

Yet their **operational effectiveness begins to decline**.

This is control fatigue.

It should not be dismissed as people simply finding security inconvenient.

It can be an indication that the organisation is approaching — or has exceeded — the amount of security complexity it can sustainably operate.

---

## Friction Is Not Necessarily Failure

None of this means that security should always be frictionless.

Some friction is deliberate and necessary.

Access to highly sensitive information should not necessarily be effortless.

Privileged operations may reasonably require stronger authentication.

High-consequence changes may justify independent approval.

Transfers between trust domains may require inspection and additional assurance.

The question is therefore not:

> **Does this control create friction?**

The better question is:

> **Is that friction proportionate to the consequence being controlled, and can the organisation sustainably operate it?**

That distinction matters.

ORSM is not an argument for removing controls simply because they are inconvenient.

It is an argument for understanding whether their continuing security value justifies their operational consequence.

---

## Control Presence Is Not Control Effectiveness

There is another danger in accumulated security environments.

We can become very good at demonstrating that controls exist.

An audit can establish that a control is implemented.

An architecture document can show where it sits.

A policy can require its use.

A dashboard can report its status.

None of these necessarily demonstrate that the control continues to produce the security outcome for which it was introduced.

There is a significant difference between **control presence and control effectiveness**.

Operational assurance should therefore ask more than:

**Is the control implemented?**

It should ask:

- What outcome was this control intended to provide?
- Does it still provide that outcome?
- What evidence demonstrates this?
- What does it now cost the organisation operationally?
- What dependencies has it introduced?
- What happens when it fails?
- Is it still necessary?

---

## The Difficult Act of Subtraction

Security architecture is comfortable with addition.

It needs to become equally comfortable with **subtraction**.

That does not mean casually removing protections.

Removing a control should be an evidence-based architectural decision informed by threats, consequences, dependencies, operational experience and residual risk.

But removal should remain a legitimate outcome of security assurance.

Sometimes a control may duplicate another capability.

Sometimes simplifying an integration may remove an unnecessary dependency.

Sometimes a legacy requirement may no longer be applicable.

Sometimes two overlapping controls may provide less effective protection than one well-designed capability.

And sometimes — perhaps counter-intuitively —

> **Removing a control may improve the security of the overall system.**

Not because the control itself was ineffective.

But because its marginal security value no longer outweighs the complexity, dependency, human burden or recovery risk it introduces.

That is not weakening security.

**It is security architecture lifecycle management.**

---

## Reassessing What We Have Built

Security architectures should therefore be periodically challenged, not merely maintained.

The purpose is not to justify wholesale simplification or reduce assurance.

It is to reconnect controls with their original purpose.

For every significant control or control layer, we should be able to explain:

- Why was this introduced?
- What security outcome was it intended to provide?
- Does it still provide that outcome?
- Is the threat or requirement still relevant?
- What does the control depend upon?
- What now depends upon the control?
- What operational burden does it create?
- What happens when it fails?
- Could the same outcome now be achieved more simply?

These are architectural questions as much as security questions.

---

## Does It Really Need to Be This Way?

Complex security environments rarely become complicated because somebody deliberately designed them to be difficult.

They evolve.

Each generation inherits the decisions of the previous one and adds controls appropriate to the risks it sees.

Over time, the organisation can end up operating the cumulative consequence of years of individually defensible security decisions.

This is closely related to the problem explored in **ORSM Insight 001 — Individually Rational Controls**.

But there is an important progression.

Insight 001 asks:

> **How did the architecture become this way?**

Control Fatigue asks:

> **What does continuing to operate it do to us?**

Security architecture should not only be capable of adding protection.

It should be capable of recognising when complexity has stopped contributing proportionate security value.

So perhaps every mature security environment deserves the occasional uncomfortable question:

**Why was it built this way?**

**Did it provide the security outcomes we expected?**

**Does it still?**

And ultimately:

# Does it really need to be this way?

---

## Related ORSM Material

- [Insight 001 — Individually Rational Controls](individually-rational-controls.md)
- [ORSM Assessment Domains](../model/domains.md)
- [ORSM Assessment Methodology](../assessment/methodology.md)
- [The Operational Security Paradox](../introduction/security-paradox.md)

---

## Constructive Challenge

This Insight represents analysis and developing thinking around ORSM. It does not introduce additional ORSM assessment requirements.

If your experience supports, contradicts or materially challenges the argument presented here, that is useful evidence.

**hello@orsmframework.org**

Please do not send classified, commercially sensitive, customer-identifiable or security-sensitive information.
