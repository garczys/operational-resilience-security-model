# ORSM in Practice

The **ORSM in Practice** section demonstrates how the Operational Resilience Security Model can be applied to common architectural situations.

The scenarios are deliberately high-level, fictionalised and technology-agnostic.

Their purpose is to demonstrate **architectural reasoning**, not to prescribe particular technologies, products, organisations or implementations.

!!! info "Illustrative Scenarios"
    All scenarios in this section are fictionalised composites created solely to demonstrate application of ORSM. They do not describe any specific organisation, customer, programme, system or implementation.

## Why This Section Exists

Security frameworks can sometimes be easy to understand conceptually but harder to translate into architectural decisions.

ORSM in Practice addresses that problem by showing how the framework changes the questions an architect asks.

The scenarios do not attempt to demonstrate that conventional security assurance is wrong or inadequate.

Instead, they demonstrate the additional operational lens introduced by ORSM.

## How to Read the Scenarios

Each scenario follows a common structure:

1. **Scenario** — a high-level architectural situation.
2. **Traditional Assurance View** — the questions conventional assurance may reasonably ask.
3. **The ORSM Lens** — the additional operational questions introduced by ORSM.
4. **Relevant Domains** — the ORSM domains most directly involved.
5. **Key Questions** — representative questions an assessor might explore.
6. **Illustrative Finding** — an example of what ORSM might reveal.
7. **Potential ORSM Outcome** — an example architectural decision direction.
8. **ORSM Lesson** — the principle demonstrated by the scenario.

## Initial Scenarios

### High-Assurance Enterprise Environment

Examines what happens when individually justified controls collectively produce substantial operational complexity and dependency.

### Lightweight Automation Service

Demonstrates why security controls should remain proportionate to realistic risk and operating context.

### Automated Deployment into a Restricted Environment

Explores automation, privilege, orchestration trust and recovery dependencies.

### Controlled Transfer Between Trust Domains

Examines the relationship between strong boundary protection, service failure and recoverability.

### Security Data Archive Service

Demonstrates proportionality and simplicity in a narrowly scoped administrative capability.

### Enterprise Security Tooling Ecosystem

Explores control accumulation, integration complexity, operational workload and systemic dependency.

---

> **What changes when an architect applies the ORSM lens?**

## Beyond Enterprise IT

Although several ORSM examples use enterprise technology scenarios, the model is not limited to traditional IT environments.

The same assurance principles may be applied wherever security architecture interacts with operational delivery, including **ICS/OT, Critical National Infrastructure, cyber-physical systems and the built environment**.

In these environments, factors such as safety, availability, engineering access, degraded operation, manual intervention, long technology lifecycles and physical consequence may significantly influence how the ORSM domains are interpreted.

ORSM does not replace specialist frameworks, standards or engineering disciplines applicable to these environments. Instead, it provides an additional operational lens through which the resulting security architecture can be assessed.

> **The domains remain consistent. The context, evidence and consequences change.**

Future ORSM guidance may include additional illustrative scenarios demonstrating application of the model within these environments.
