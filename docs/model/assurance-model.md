# Assurance Model

ORSM extends conventional assurance by evaluating not only whether
controls exist, but whether they continue to deliver proportionate
security outcomes throughout their operational lifecycle.

This is referred to as **Evidence-Based Architectural Assurance**.

## The Governing Question

> **Does this control improve security outcomes without creating
> disproportionate operational risk?**

## The Five Assurance Tests

### 1. Security Effectiveness

Does the control demonstrably improve security? What asset is protected,
which credible threat is addressed, and is the risk reduction
measurable?

### 2. Operational Cost

What administrative effort, support overhead, maintenance burden,
infrastructure consumption and governance effort does the control
introduce, and how does this compare with its demonstrable security
value?

### 3. Operational Survivability

Does the architecture remain operational when controls fail or require
emergency maintenance? A control that prevents organisational recovery
has become a liability regardless of its protective capability.

### 4. Sustainability

Does the organisation possess the capacity to operate, maintain and
improve the control over time --- including skills, vendor lifecycle,
technical debt and governance workload?

### 5. Human Compatibility

Does the control align with realistic operational behaviour? Controls
requiring unrealistic behaviour frequently encourage workarounds that
reduce overall security.

## Evidence-Based Assurance

Statements such as *industry best practice*, *the vendor recommends it*,
or *we have always implemented this control* are not sufficient evidence
on their own.

Architectural decisions should demonstrate measurable benefit relative
to operational cost, supported where appropriate by:

-   threat modelling;
-   dependency analysis;
-   recovery testing;
-   operational metrics; and
-   incident analysis.

## Assurance Decisions

  -----------------------------------------------------------------------
  Decision                            Meaning
  ----------------------------------- -----------------------------------
  **Retain**                          Measurable security benefit while
                                      remaining proportionate,
                                      sustainable, recoverable and
                                      resilient.

  **Improve**                         Remains justified but requires
                                      optimisation to reduce burden,
                                      dependency, complexity or human
                                      impact.

  **Redesign**                        The security objective remains
                                      valid, but the implementation
                                      introduces unacceptable operational
                                      risk.

  **Retire**                          No longer provides sufficient
                                      security benefit to justify its
                                      operational cost.
  -----------------------------------------------------------------------
