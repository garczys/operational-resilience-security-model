# Security Data Archive Service

!!! info "Illustrative Scenario"
    This example is intentionally generic and does not identify any particular storage platform, analysis product or organisation.

=== "Scenario"

    A security operations function maintains a large archive of historical security data on an internal storage service.

    A small number of authorised administrators require a management capability to browse, retrieve and manage archived information.

    The environment is restricted, network paths are controlled and access permissions are enforced by the storage service.

    Additional intermediary controls are proposed to provide further protection around the management capability.

=== "Traditional Assurance"

    Conventional assurance may reasonably examine:

    - encryption in transit;
    - authentication;
    - authorisation;
    - privileged access;
    - object permissions;
    - audit logging;
    - software provenance; and
    - administrative workstation security.

    These remain legitimate assurance considerations.

=== "The ORSM Lens"

    ORSM asks whether the management solution remains proportionate to its narrow operational purpose.

    > **Does additional security architecture materially reduce risk, or does it introduce more complexity and support burden than the service warrants?**

    Existing controls should be understood before new layers are introduced.

    Duplicate enforcement may add little security value while creating new administrative and recovery dependencies.

=== "Potential Outcome"

    **Retain / Improve**

    Retain the simplest architecture that demonstrates adequate protection and operational supportability.

    Improvement may involve:

    - relying upon native storage-layer controls where appropriate;
    - reducing duplicated policy enforcement;
    - limiting administrative capability;
    - maintaining clear access boundaries; and
    - avoiding unnecessary intermediary services.

## Relevant Domains

- **Protection Intent**
- **Complexity Management**
- **Operational Sustainability**
- **Human Factors**
- **Dependency Resilience**

## Key Questions

- What administrative functions are actually required?
- Which controls already exist at the storage, network and administrative layers?
- Does the management capability introduce unnecessary external dependencies?
- Can permissions be enforced by the underlying service rather than duplicated elsewhere?
- How difficult is the management component to patch and support?
- Is the operating model understandable to its administrator population?
- Does the proposed architecture preserve the simplicity of the original use case?

## Illustrative Finding

The storage service may already provide the required authentication, transport protection and object-level authorisation.

Introducing additional intermediary services could duplicate existing protections while increasing support and recovery complexity.

## ORSM Lesson

> **A control does not become more effective merely because another control is placed in front of it.**

Additional architectural complexity should demonstrate corresponding security value.
