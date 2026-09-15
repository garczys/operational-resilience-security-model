---
title: The 90-Day Island Test
description: Could your operational technology environment continue delivering its critical service if enterprise IT became unavailable or untrusted?
---

<div class="orsm-insight-label">INSIGHT 004</div>

# The 90-Day Island Test

## Could your OT environment survive without enterprise IT?

<div class="orsm-insight-meta">
Stefan Garczynski · September 2026
</div>

There is a deceptively simple question that every organisation operating critical Operational Technology should be able to answer:

> **If enterprise IT became unavailable or untrusted tomorrow, how long could the operational environment continue to function safely and effectively?**

An hour?

A day?

A week?

**Ninety days?**

Recent **CI Fortify** guidance has brought renewed attention to a capability that has existed in OT security thinking for many years: the ability to isolate vital Operational Technology and its enabling systems from other networks during a significant cyber incident or period of heightened threat.

The guidance is notable because it does not treat isolation merely as a network-security mechanism.

The objective is continued delivery of the critical service.

That distinction changes the architectural question.

It is no longer simply:

> **Can we disconnect OT from IT?**

It becomes:

> **Can OT continue operating after we disconnect it?**

Those are very different tests.


## Acknowledgement

This article was prompted by recent commentary from **Andrew Ginter** on CI Fortify and extended OT isolation.

Andrew's work has been a significant influence on my own thinking about OT cybersecurity over many years, particularly his persistent focus on **consequence** rather than cybersecurity in isolation.

That consequence-led perspective matters here.

The 90-Day Island Test takes the isolation challenge and considers what happens afterwards: dependency, degraded operation, human workload, sustainability and eventual recovery.

Those questions also intersect strongly with the principles behind the **Operational Resilience Security Model (ORSM)**.


## From Isolation to Sustainability

A well-designed OT environment may have clearly defined security zones, industrial DMZs, controlled conduits and tightly governed interfaces with enterprise IT.

Architecturally, it may appear highly segmented.

In an emergency, those connections might even be capable of being rapidly disabled.

That demonstrates **isolation capability**.

It does not necessarily demonstrate **isolation sustainability**.

Modern operational environments have accumulated dependencies that do not always appear obvious on high-level architecture diagrams.

Identity services.

DNS and address resolution.

Time synchronisation.

Certificate services and PKI.

Remote engineering support.

Security monitoring.

Patch and software repositories.

Backup infrastructure.

Historian replication.

Licensing services.

Asset-management platforms.

Vendor support.

Shared virtualisation and storage.

Cloud or enterprise analytics.

Individually, each dependency may be entirely reasonable.

Collectively, they can produce an operational environment that is technically segmented from enterprise IT while remaining operationally dependent upon it.

> **Isolation capability is not isolation sustainability.**


## The 90-Day Island Test

Consider a deliberately uncomfortable architectural scenario.

Enterprise IT has suffered a significant cyber compromise.

Its integrity can no longer be trusted.

Connections between enterprise IT and OT are therefore disabled.

But assume restoration will not happen tomorrow.

Instead:

> **The operational environment must continue delivering its critical service while isolated for 90 days.**

The 90 days should not be interpreted as a universal recovery objective for every industrial environment.

It is a **resilience stress test**.

Its purpose is to stretch the architecture sufficiently far that dependencies which remain invisible during a short outage begin to emerge.

<img src="/assets/images/orsm-90-day-island-test.svg" alt="The ORSM 90-Day Island Test timeline showing isolation at Day 1, dependency at Day 7, degradation at Day 30, sustainability at Day 60 and consequence at Day 90" class="orsm-diagram">


### Day 1 - Isolation

Initially, everything may appear healthy.

Controllers continue running.

Operators retain process visibility.

Engineering workstations remain available.

Local systems continue functioning.

The process remains stable.

From the control room, relatively little may appear different.

The architecture appears resilient.

But Day 1 primarily tells us something much narrower:

> **The isolation mechanism worked.**


### Day 7 - Dependency

The first dependencies begin to become visible.

Authentication may behave differently.

External monitoring feeds may disappear.

Enterprise-hosted security services may no longer be available.

Remote vendor and engineering support may be unavailable.

Data normally transferred into enterprise systems begins accumulating locally.

Automated workflows may stop.

Manual workarounds begin appearing.

The operational process continues.

But friction is increasing.


### Day 30 - Degradation

Now the problem is no longer simply network isolation.

Maintenance cycles begin to matter.

Certificate and credential lifetimes become relevant.

Software distribution and patch processes may be unavailable.

Backup arrangements may have changed.

Storage capacity may become constrained.

Engineering workflows may depend upon services previously considered peripheral.

Vendor support models may prove dependent upon remote connectivity.

The organisation may discover that several apparently non-critical enterprise services were actually **operational dependencies**.

The architecture is still functioning.

But it is functioning differently.


### Day 60 - Sustainability

At this point the technical architecture tells only part of the story.

People have been compensating for missing technology.

Temporary procedures have become routine procedures.

Manual activities have multiplied.

Security teams may have reduced visibility.

Engineering teams may be compensating for unavailable automation.

Operational exceptions accumulate.

Workarounds begin creating their own risks.

The organisation is consuming human resilience.

This is where degraded operation begins to intersect with **operational fatigue**.

A system can remain technically operational while becoming progressively harder, and potentially less safe, to operate.

Resilience therefore cannot be measured simply by whether the machinery is still running.


### Day 90 - Consequence

At Day 90 the question changes again.

It is no longer:

> **Is the OT environment still running?**

It becomes:

> **Can the organisation still operate the critical service safely, securely and sustainably?**

That is a considerably higher standard.

And it brings us back to consequence.


## Consequence Changes the Architecture Conversation

One of the most important lessons OT security teaches us is that cybersecurity cannot be considered independently from operational consequence.

Cybersecurity discussions frequently begin with threats, vulnerabilities and controls.

OT forces another question:

> **What actually happens to the operation?**

A vulnerability matters because of the consequence its exploitation may produce.

A dependency matters because of the consequence of losing it.

A control matters because of the consequence of its failure.

And an architecture should ultimately be judged partly by the consequences produced when its assumptions stop being true.

This changes the way dependency should be assessed.

The important question is not merely:

> **How well protected is this dependency?**

It is also:

> **What happens when this dependency disappears?**

A seemingly insignificant enterprise service can therefore possess considerable operational importance.

Its conventional **asset criticality** may appear low.

Its **dependency or trust criticality** may be extremely high.

Architecture assessments that consider individual assets without understanding these relationships can easily miss that distinction.


## The Dependency Paradox

IT/OT convergence has delivered genuine benefits.

Centralised monitoring, shared identity, remote engineering, enterprise analytics, automated reporting and integrated management can improve efficiency, visibility and supportability.

But integration creates relationships.

Relationships create dependencies.

And dependencies create failure conditions.

The answer is not to reject IT/OT integration.

Nor is it necessarily to recreate the completely disconnected industrial environments of the past.

Instead, architects need to understand **which dependencies the operational mission can tolerate losing, and for how long.**

> **Resilience should be measured by the consequence of losing a dependency, not merely by how well that dependency is protected.**


## Architecture Diagrams Are Not Enough

Traditional security architecture assurance tends to ask whether appropriate controls exist.

Is the boundary protected?

Is access controlled?

Is traffic inspected?

Is the environment segmented?

Are privileged accounts appropriately managed?

All remain important questions.

But the 90-Day Island Test introduces another category of assurance:

> **What happens when the architecture enters a degraded state?**

For every significant external dependency we should understand:

- what operational capability depends upon it;
- how quickly its loss becomes significant;
- what degraded operating mode exists;
- whether a local alternative is available;
- how much human intervention that alternative requires;
- how long the workaround remains sustainable;
- what security or operational visibility is lost;
- what new risks are introduced; and
- how normal operation will eventually be restored.

The resulting picture may look considerably different from the original architecture diagram.


## Operational Fatigue Is Part of the Consequence

There is another dependency frequently underestimated in resilience engineering:

**People.**

People compensate remarkably well for technology.

When automated services disappear, operators and engineers find ways to keep the mission running.

That adaptability is itself an important resilience capability.

But it is finite.

Manual processes consume attention.

Temporary procedures increase cognitive load.

Reduced monitoring increases uncertainty.

Workarounds require additional coordination.

Exceptions accumulate.

Eventually an organisation can begin consuming its human resilience faster than it can replenish it.

A degraded architecture requiring extraordinary human effort may therefore remain sustainable for several hours or days.

It may not remain sustainable for several months.

> **Operational fatigue is therefore part of the security consequence.**


## Designing for Islandability

The architectural objective should not necessarily be permanent isolation.

Instead, critical operational environments should consider **islandability as a design property**.

An islandable environment understands its external dependencies and has intentionally designed degraded operating modes for their loss.

That might require local capability for essential identity, name resolution, time, engineering, monitoring, backup, recovery and operational support.

It also requires something more important:

**Testing.**

Documentation asserting that OT can operate independently is weak evidence.

Demonstrating what happens when its dependencies are removed is considerably stronger evidence.

This moves resilience assurance away from architectural assertion and towards operational reality.


## A Design Authority Question

The entire concept can ultimately be reduced to one question:

> **Assume enterprise IT becomes unavailable or untrusted tomorrow. Demonstrate how the operational service continues safely and sustainably for 90 days.**

The answer does not have to be 90 days.

That is partly the point.

If an organisation can sustain the critical service for only seven days, it needs to understand why.

If a particular enterprise dependency must be restored within 24 hours, that dependency is more important than its position on an architecture diagram might suggest.

If an operational workaround can be maintained for 30 days only through extraordinary human effort, that too is an architectural constraint.

The test exposes something security architecture documentation frequently hides:

**Time.**

Resilience is not binary.

> **It decays.**


## An ORSM Perspective

The Operational Resilience Security Model considers security not simply as the presence of controls but as the ability of an architecture, and the organisation operating it, to remain secure and sustainable over time.

The 90-Day Island Test provides a practical way of exploring that principle in an OT environment.

**Dependency → Loss → Consequence → Degraded Operation → Sustainability → Recovery**

A technically secure architecture may still be operationally fragile.

A resilient architecture understands not only how it prevents failure but how it behaves after failure occurs.

And perhaps the most important question is therefore not:

> **Can we isolate OT from IT?**

It is:

> **What happens after we do?**


## Closing Thought

Much of cybersecurity concerns itself with preventing bad things from happening.

Operational resilience asks another question:

> **What will we do when they happen anyway?**

For critical operational environments, that question cannot end in the first few minutes of an incident.

Disconnecting a cable, disabling a route or closing a firewall rule may successfully isolate an OT environment.

The real resilience test begins afterwards.

> **Day 1 tells you whether isolation worked.**
>
> **Day 90 tells you whether the architecture was resilient.**


## Further Reading

- [Australian Signals Directorate / Australian Cyber Security Centre - CI Fortify](https://www.cyber.gov.au/business-government/secure-design/operational-technology-environments/ci-fortify)
- [ASD / ACSC - CI Fortify: Advice for Isolating Vital Systems](https://www.cyber.gov.au/business-government/secure-design/operational-technology-environments/ci-fortify/ci-fortify-advice-for-isolating-vital-systems)
- [Andrew Ginter - commentary on CI Fortify and extended OT/IT isolation](https://lnkd.in/p/eVTrAv-C)
- [Operational Resilience Security Model](https://orsmframework.org)
