# Lightweight Automation Service

!!! info "Illustrative Scenario"
    This scenario is fictionalised and intentionally avoids specific technologies, scripting languages and organisational details.

## Scenario

A small internal service monitors defined file locations and performs controlled file-handling actions according to centrally managed configuration.

The service operates inside a restricted environment.

It does not inspect or alter the contents of files, does not transmit information externally and requires only the permissions necessary to perform its defined function.

Because the service performs automated actions, stakeholders propose adding several additional security technologies and approval mechanisms.

## Traditional Assurance View

Conventional assurance may examine:

- service permissions;
- configuration integrity;
- audit logging;
- change control;
- code quality;
- administrative access;
- error handling; and
- secure development practices.

These controls may all be appropriate.

## The ORSM Lens

ORSM asks:

> **Does the proposed security treatment remain proportionate to the actual threat and operating context?**

The security architecture should not become substantially more complex than the service it protects unless the additional risk reduction justifies that complexity.

## Relevant Domains

- **Protection Intent**
- **Complexity Management**
- **Operational Sustainability**
- **Human Factors**

## Key Questions

- What credible threat does each proposed control address?
- Is that threat already reduced by the operating environment?
- Does the new control introduce another service, management interface or dependency?
- Will the control make troubleshooting materially harder?
- Is the administrative burden proportionate to the value and risk of the service?
- Could an existing platform provide equivalent protection more simply?
- Does the proposed control introduce greater operational risk than the capability it protects?

## Illustrative Finding

A proposed control may provide marginal additional protection while introducing:

- another persistent management service;
- additional privileged administration;
- software lifecycle obligations;
- new training requirements; and
- another operational dependency.

## Potential ORSM Outcome

**Retain / Improve**

The automation capability remains justified.

The proposed security implementation should be simplified where additional complexity cannot demonstrate proportionate benefit.

## ORSM Lesson

**Proportionality is a security property.**

Security architecture should reflect realistic risk rather than automatically applying maximum control intensity to every technical capability.
