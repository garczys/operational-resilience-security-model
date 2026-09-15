# ORSM Operational Threat Intelligence v0.1

A small static-site prototype for translating authoritative public threat
information into security-architecture triage context.

## What v0.1 does

- Pulls the CISA Known Exploited Vulnerabilities (KEV) catalogue.
- Tries the canonical CISA JSON feed first.
- Falls back to CISA's official `cisagov/kev-data` GitHub mirror.
- Applies basic schema and consistency validation.
- Retains the previous known-good JSON if collection or validation fails.
- Adds deterministic architecture-oriented tags.
- Publishes static JSON for an MkDocs page.
- Renders searchable/filterable intelligence cards in the browser.
- Does not use AI and does not claim to calculate organisational risk.

## Files

```text
collectors/cisa_kev.py
docs/intelligence/index.md
docs/intelligence/data/current.json   # generated
docs/javascripts/orsm-intelligence.js
docs/stylesheets/orsm-intelligence.css
.github/workflows/update-threat-intelligence.yml
tests/test_cisa_kev.py
```

## 1. Copy into the ORSM repository

Copy the folders/files above into the repository root.

## 2. Add the assets to mkdocs.yml

Merge these entries with any existing `extra_javascript` and
`extra_css` lists:

```yaml
extra_javascript:
  - javascripts/orsm-intelligence.js

extra_css:
  - stylesheets/orsm-intelligence.css
```

Add the page to `nav`:

```yaml
nav:
  - Home: index.md
  - Intelligence: intelligence/index.md
```

Do not replace the rest of the existing ORSM navigation.

## 3. Create the first dataset locally

```bash
python3 collectors/cisa_kev.py
```

The generated file will be:

```text
docs/intelligence/data/current.json
```

If neither trusted source produces valid data, the collector exits non-zero
and does not replace the previous file.

## 4. Test

```bash
python3 -m unittest discover -s tests -v
mkdocs serve
```

Then open:

```text
http://127.0.0.1:8000/intelligence/
```

## 5. Commit

```bash
git add collectors docs/intelligence docs/javascripts/orsm-intelligence.js \
  docs/stylesheets/orsm-intelligence.css \
  .github/workflows/update-threat-intelligence.yml tests \
  README-ORSM-INTELLIGENCE.md

git commit -m "feat: add ORSM operational threat intelligence"
git push
```

The GitHub Action then checks for KEV updates hourly and commits the generated
JSON only when it has changed.

## Design boundary

The ORSM page should state clearly:

> ORSM Operational Threat Intelligence does not replace vulnerability
> management, threat-intelligence platforms, or organisational risk
> assessment. It provides an architecture and operational-resilience view of
> authoritative public threat information.

The `architecturalAttention` field is deliberately not called severity,
priority or risk.

## Suggested v0.2

Once this path is stable, add each source through an independent collector and
normalise into the same record model. Good next candidates are NCSC advisories
and CISA ICS advisories. Keep original-source provenance attached to every
record.
