#!/bin/bash

set -e

cd "$HOME/projects/orsm"

CSS="docs/stylesheets/extra.css"
CONFIG="mkdocs.yml"
JS="docs/javascripts/orsm-megamenu.js"

python3 <<'PY'
from pathlib import Path
import re

css = Path("docs/stylesheets/extra.css")
text = css.read_text()

text = re.sub(
    r'/\*\s*=+\s*\n'
    r'\s*ORSM MEGA MENU PROTOTYPE\s*\n'
    r'.*?'
    r'/\*\s*END ORSM MEGA MENU PROTOTYPE\s*\*/',
    '',
    text,
    flags=re.DOTALL
)

css.write_text(text.rstrip() + "\n")


config = Path("mkdocs.yml")
text = config.read_text()

text = re.sub(
    r'(?m)^\s*-\s*javascripts/orsm-megamenu\.js\s*$\n?',
    '',
    text
)

text = re.sub(
    r'(?m)^extra_javascript:\s*\n(?=extra_css:)',
    '',
    text
)

config.write_text(text)


js = Path("docs/javascripts/orsm-megamenu.js")

if js.exists():
    js.unlink()

print("ORSM mega-menu prototype removed.")
PY

echo
echo "Prototype removed."
echo
echo "Run:"
echo "  source .venv/bin/activate"
echo "  mkdocs serve"
