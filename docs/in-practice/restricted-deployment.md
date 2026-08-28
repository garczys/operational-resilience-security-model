# Automated Deployment into a Restricted Environment

!!! info "Illustrative Scenario"
    This scenario is a fictional composite. It deliberately omits identifiable platforms, suppliers, environment names and implementation details.

=== "Scenario"

    An organisation develops infrastructure and application changes within an engineering environment and promotes approved artefacts into a more restricted operational environment.

    Deployment is performed through a controlled automation path rather than routine direct administrator access.

    The architecture introduces orchestration services, execution components, artefact repositories, credentials and approval mechanisms.

    Automation reduces some forms of direct privileged access while creating new technical trust relationships.

=== "Traditional Assurance"

    Conventional assurance may reasonably examine:

    - source integrity;
    - peer review;
    - artefact integrity;
    - separation of duties;
    - privileged access;
    - deployment authorisation;
    - vulnerability assessment; and
    - audit logging.

    These remain important security requirements.

=== "The ORSM Lens"

    ORSM asks whether the deployment mechanism itself has become a **critical operational dependency**.

    > **Can the organisation still administer, recover or rebuild the restricted environment if the normal automation chain becomes unavailable?**

    Automation does not eliminate architectural trust.

    It changes where that trust resides.

    The resulting orchestration, execution and artefact services therefore need to be assessed not only for security but also for availability, dependency and recovery.

=== "Potential Outcome"

    **Improve / Redesign**

    Potential improvements may include:

    - stronger instruction authenticity;
    - simplified execution dependencies;
    - independent recovery capability;
    - separation between routine deployment and emergency recovery;
    - reduction of standing privileged trust; and
    - explicit testing of orchestration failure scenarios.

    The objective is to retain the security benefits of automation without making the automation platform an unrecoverable point of dependency.

## Relevant Domains

- **Protection Intent**
- **Complexity Management**
- **Operational Resilience**
- **Recovery Engineering**
- **Dependency Resilience**

## Key Questions

- How many services must remain healthy for a deployment to succeed?
- Where is trust established between orchestration and execution components?
- Does the deployment mechanism create standing privileged trust?
- Can execution components validate the source and integrity of instructions?
- Can the restricted environment be recovered without the primary orchestration capability?
- What happens if the artefact repository is unavailable?
- Is there an independently controlled recovery path?
- Has automation reduced risk, or merely moved privileged trust into another architectural layer?

## Illustrative Finding

The automated deployment model may substantially reduce routine direct privileged access while simultaneously concentrating trust in a small number of orchestration services.

The resulting architecture therefore depends upon those services remaining secure, available and recoverable.

## ORSM Lesson

> **Removing human privilege does not remove architectural trust.**

Automation changes where trust resides. Those trust relationships must remain visible, justified and survivable.
