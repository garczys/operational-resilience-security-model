# Good Patterns

The source framework identifies the following examples of architectural
patterns that support operational resilience.

## Simple identity architecture

Reduce unnecessary identity dependencies and ensure critical recovery
paths do not depend entirely on the service being recovered.

## Few integrations

Prefer purposeful integrations over uncontrolled coupling. Each
integration should have a clear protection or operational purpose.

## Layered recovery

Design recovery mechanisms at multiple levels so that failure of one
control plane does not eliminate every recovery path.

## Offline administration

Maintain appropriately controlled recovery or administrative capability
that does not depend entirely on normal production services.

## Documented dependency mapping

Make technical, operational and vendor dependencies visible before they
become hidden single points of failure.

## Technology consolidation

Consolidate where it genuinely reduces duplication and operational
burden, while avoiding unacceptable concentration risk.

## Graceful degradation

Design critical services to continue at an understood reduced capability
when a security component is unavailable.
