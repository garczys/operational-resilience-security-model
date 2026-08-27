# Anti-Patterns

ORSM identifies recurring patterns that can make apparently secure
architectures operationally fragile.

## Identity dependency everywhere

Critical services, administration and recovery all depend on the same
identity platform, creating systemic failure potential.

## Security tooling sprawl

Controls accumulate faster than the organisation's ability to integrate,
maintain and operate them effectively.

## One vendor for every control

Concentration may simplify procurement and integration while creating
strategic dependency and correlated failure risk.

## No recovery testing

Recovery exists as documentation or assumption rather than demonstrated
capability.

## Control accumulation

New controls are continually added while obsolete, overlapping or
low-value controls remain in service.

## Compliance-driven design

Architecture is optimised for demonstrating control presence rather than
achieving proportionate, survivable security outcomes.

## Shadow administration

Operational friction or inaccessible recovery paths encourage unofficial
administrative mechanisms and workarounds.