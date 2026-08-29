---
title: Individually Rational Controls Can Produce Collectively Irrational Architectures
description: An ORSM Insight examining how individually justified security controls can collectively create fragile, complex and difficult-to-operate architectures.
---

<div class="orsm-insight-label">INSIGHT 001</div>

# Individually Rational Controls Can Produce Collectively Irrational Architectures

<div class="orsm-insight-meta">
Stefan Garczynski · August 2026
</div>

**Security controls are generally introduced for good reasons. The problem can emerge when their cumulative architectural effect is considered.**

---

## The Individual Decision

Few architects deliberately set out to create an unnecessarily complex security architecture.

Controls are normally introduced in response to legitimate concerns.

A new authentication step may address an identity risk.

An additional network boundary may reduce exposure.

A privileged access control may restrict administrative activity.

A monitoring capability may improve visibility.

A governance checkpoint may provide additional assurance.

Considered independently, each decision may be entirely rational.

The architecture, however, does not experience those decisions independently.

It experiences all of them at once.

> **Individually rational controls can produce collectively irrational architectures.**

---

## The Cumulative Effect

As controls accumulate, so do their dependencies.

Authentication may depend upon identity services.

Privileged access may depend upon authentication, network connectivity and supporting infrastructure.

Administrative recovery may depend upon the same controls protecting normal administration.

Monitoring may depend upon services whose failure it is intended to detect.

Processes may require specialist knowledge that only a small number of people possess.

None of these dependencies necessarily makes an individual control inappropriate.

The architectural question is whether their combined effect remains proportionate and operationally sustainable.

---

## Control Effectiveness Is Not Architectural Effectiveness

A control can operate exactly as designed while the wider architecture becomes less resilient.

This distinction matters.

Traditional assurance frequently asks:

> **Is the control implemented correctly?**

That remains an important question.

Operational resilience requires another:

> **What happens to the wider system because this control exists?**

The answer may involve availability, recovery, human workload, specialist dependencies, failure propagation or the ability to operate safely during degraded conditions.

Security assurance therefore needs to consider both **control effectiveness** and **architectural consequence**.

---

## When Defence in Depth Becomes Dependency in Depth

Defence in depth remains an important security principle.

Multiple complementary controls can prevent a single failure from exposing an entire system.

But additional layers can also introduce additional dependencies.

If several security controls ultimately depend upon the same identity platform, management plane, administrative route or specialist team, apparent diversity may conceal a common point of failure.

The architecture may contain many controls while still possessing very few genuinely independent recovery paths.

The question is therefore not simply:

> **How many layers protect the service?**

It is also:

> **How many independent ways exist to understand, operate and recover it when those layers begin to fail?**

---

## The Operational Security Paradox

This is central to the Operational Resilience Security Model.

Security architecture should reduce meaningful risk.

But assurance should also consider whether the resulting architecture remains understandable, supportable, recoverable and proportionate to the threat and consequence being addressed.

The objective is not fewer controls.

Nor is complexity inherently wrong.

Some environments legitimately require substantial technical and procedural protection.

The objective is to understand the **operational consequence of the architecture as a whole**.

That leads to a useful architectural question:

> **Does this control improve security outcomes without creating disproportionate operational risk?**

Sometimes the answer will clearly be yes.

Sometimes additional complexity is justified by the consequence being protected against.

And sometimes the cumulative architecture deserves another look.

---

## Architectural Judgement

ORSM does not suggest removing controls simply because they introduce operational complexity.

Instead, it encourages architects to examine the relationship between protection and consequence.

A control may be retained.

It may be improved.

Its dependencies may need to be redesigned.

Alternative recovery arrangements may be required.

Or evidence may demonstrate that the existing architecture is entirely proportionate.

The important outcome is not a predetermined answer.

It is an informed architectural judgement.

---

## Constructive Challenge

This Insight represents analysis and developing thinking around ORSM. It does not introduce additional ORSM assessment requirements.

If your experience supports, contradicts or materially challenges the argument presented here, that is useful evidence.

**hello@orsmframework.org**

Please do not send classified, commercially sensitive, customer-identifiable or security-sensitive information.
