# Lightweight Automation Service

!!! info "Illustrative Scenario"
    This scenario is fictionalised and intentionally avoids specific technologies, scripting languages and organisational details.

=== "Scenario"

    A small internal service monitors defined file locations and performs controlled file-handling actions according to centrally managed configuration.

    The service operates inside a restricted environment.

    It does not inspect or alter file contents, does not transmit information externally and requires only the permissions necessary to perform its defined function.

    Because the service performs automated actions, stakeholders propose adding several additional security technologies and approval mechanisms.

=== "Traditional Assurance"

    Conventional assurance may reasonably examine:

    - service permissions;
    - configuration integrity;
    - audit logging;
    - change control;
    - code quality;
    - administrative access;
    - error handling; and
    - secure development practices.

    These remain appropriate considerations.

=== "The ORSM Lens"

    ORSM introduces a different question:

    > **Does the proposed security treatment remain proportionate to the actual threat and operating context?**

    The security architecture should not become substantially more complex than the service it protects unless that additional complexity delivers justified security benefit.

    ORSM does not assume that additional controls are unnecessary.

    It asks what risk each additional control addresses, what dependency it introduces and whether the resulting architecture remains sustainable.

=== "Potential Outcome"

    **Retain / Improve**

    The automation capability may remain entirely justified.

    The security implementation should nevertheless be simplified where additional complexity cannot demonstrate proportionate benefit.

    Potential improvements may include:

    - using existing security capabilities rather than introducing new platforms;
    - reducing unnecessary administrative dependencies;
    - automating assurance activities;
    - simplifying configuration management; or
    - removing controls whose operational cost substantially exceeds their additional security value.

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

The security objective remains valid, but the implementation may be disproportionate to the credible risk.

## ORSM Lesson

> **Proportionality is a security property.**

Security architecture should reflect realistic risk rather than automatically applying maximum control intensity to every technical capability.
