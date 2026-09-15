(function () {

  function initORSMMegaMenu() {

    if (document.querySelector(".orsm-mega-nav")) {
      return;
    }

    const header = document.querySelector(".md-header");

    if (!header) {
      return;
    }

    const nav = document.createElement("nav");

    nav.className = "orsm-mega-nav";
    nav.setAttribute("aria-label", "ORSM primary navigation");

    nav.innerHTML = `
      <div class="orsm-mega-inner">
<div class="orsm-mega-items">

          <div class="orsm-mega-item">
            <button
              class="orsm-mega-trigger"
              type="button"
              aria-expanded="false"
              aria-controls="orsm-menu-framework">
              Framework
              <span aria-hidden="true">⌄</span>
            </button>

            <div
              class="orsm-mega-panel"
              id="orsm-menu-framework"
              hidden>

              <div class="orsm-mega-panel-inner">

                <div class="orsm-mega-heading">
                  <span>FRAMEWORK</span>
                  <p>
                    Understand the thinking, principles and assurance
                    model behind ORSM.
                  </p>
                </div>

                <div class="orsm-mega-grid">

                  <div class="orsm-mega-column">
                    <h3>Start Here</h3>

                    <a href="/introduction/what-is-orsm/">
                      <strong>What is ORSM?</strong>
                      <small>Purpose, intent and operating philosophy</small>
                    </a>

                    <a href="/introduction/security-paradox/">
                      <strong>Operational Security Paradox</strong>
                      <small>Why rational controls can create irrational architectures</small>
                    </a>

                    <a href="/model/principles/">
                      <strong>Foundational Principles</strong>
                      <small>The principles governing ORSM judgement</small>
                    </a>
                  </div>

                  <div class="orsm-mega-column">
                    <h3>The Model</h3>

                    <a href="/model/">
                      <strong>Model Overview</strong>
                      <small>Explore the ORSM architecture</small>
                    </a>

                    <a href="/model/assurance-model/">
                      <strong>Assurance Model</strong>
                      <small>How ORSM approaches architectural assurance</small>
                    </a>

                    <a href="/model/design-principles/">
                      <strong>Design Principles</strong>
                      <small>Architectural decision principles</small>
                    </a>

                    <a href="/model/domains/">
                      <strong>Seven Domains</strong>
                      <small>The operational assessment domains</small>
                    </a>
                  </div>

                  <div class="orsm-mega-column">
                    <h3>Established Approaches</h3>

                    <a href="/framework/secure-by-design/">
                      <strong>ORSM + Secure by Design</strong>
                      <small>A continuing operational assurance feedback loop</small>
                    </a>

                    <a href="/integration/">
                      <strong>Framework Integration</strong>
                      <small>How ORSM complements established approaches</small>
                    </a>

                    <a href="/integration/nist/">
                      <strong>NIST CSF 2.0</strong>
                      <small>Complementary architectural perspective</small>
                    </a>

                    <a href="/integration/ncsc/">
                      <strong>NCSC Secure by Design</strong>
                      <small>Alignment without replacement</small>
                    </a>
                  </div>

                </div>

                <div class="orsm-mega-footer">
                  <div>
                    <strong>New to ORSM?</strong>
                    <span>
                      Start with the model and understand why operational
                      consequence matters.
                    </span>
                  </div>

                  <a href="/model/" class="orsm-mega-cta">
                    Explore the Model →
                  </a>
                </div>

              </div>
            </div>
          </div>


          <div class="orsm-mega-item">
            <button
              class="orsm-mega-trigger"
              type="button"
              aria-expanded="false"
              aria-controls="orsm-menu-apply">
              Apply ORSM
              <span aria-hidden="true">⌄</span>
            </button>

            <div
              class="orsm-mega-panel"
              id="orsm-menu-apply"
              hidden>

              <div class="orsm-mega-panel-inner">

                <div class="orsm-mega-heading">
                  <span>APPLY ORSM</span>
                  <p>
                    Move from architectural principles to evidence,
                    assessment and practical judgement.
                  </p>
                </div>

                <div class="orsm-mega-grid">

                  <div class="orsm-mega-column">
                    <h3>Assessment</h3>

                    <a href="/assessment/">
                      <strong>Assessment Overview</strong>
                      <small>How to approach an ORSM assessment</small>
                    </a>

                    <a href="/assessment/methodology/">
                      <strong>Methodology</strong>
                      <small>Scope, assess, judge and improve</small>
                    </a>

                    <a href="/assessment/evidence/">
                      <strong>Evidence Model</strong>
                      <small>Support judgement with meaningful evidence</small>
                    </a>

                    <a href="/assessment/scoring/">
                      <strong>Scoring</strong>
                      <small>Indicators supporting architectural judgement</small>
                    </a>

                    <a href="/assessment/maturity/">
                      <strong>Capability Maturity</strong>
                      <small>Architectural maturity, not control quantity</small>
                    </a>
                  </div>

                  <div class="orsm-mega-column">
                    <h3>In Practice</h3>

                    <a href="/in-practice/">
                      <strong>Practice Overview</strong>
                      <small>Illustrative ORSM application scenarios</small>
                    </a>

                    <a href="/in-practice/high-assurance-enterprise/">
                      <strong>High-Assurance Enterprise</strong>
                      <small>Strong controls and cumulative dependencies</small>
                    </a>

                    <a href="/in-practice/lightweight-automation/">
                      <strong>Lightweight Automation</strong>
                      <small>Proportionality in restricted environments</small>
                    </a>

                    <a href="/in-practice/tooling-ecosystem/">
                      <strong>Security Tooling Ecosystem</strong>
                      <small>Assuring the control estate as a system</small>
                    </a>
                  </div>

                  <div class="orsm-mega-column">
                    <h3>Patterns & Resources</h3>

                    <a href="/patterns/good-patterns/">
                      <strong>Good Patterns</strong>
                      <small>Characteristics that support resilience</small>
                    </a>

                    <a href="/patterns/anti-patterns/">
                      <strong>Anti-Patterns</strong>
                      <small>Recurring sources of architectural fragility</small>
                    </a>

                    <a href="/resources/assurance-questions/">
                      <strong>Assurance Questions</strong>
                      <small>Questions supporting architectural review</small>
                    </a>

                    <a href="/resources/adr/">
                      <strong>Decision Record</strong>
                      <small>Capture evidence and architectural judgement</small>
                    </a>
                  </div>

                </div>

                <div class="orsm-mega-footer">
                  <div>
                    <strong>Use judgement, not box ticking.</strong>
                    <span>
                      ORSM supports architectural reasoning rather than
                      replacing it.
                    </span>
                  </div>

                  <a href="/assessment/" class="orsm-mega-cta">
                    Apply ORSM →
                  </a>
                </div>

              </div>
            </div>
          </div>


          <div class="orsm-mega-item">
            <button
              class="orsm-mega-trigger"
              type="button"
              aria-expanded="false"
              aria-controls="orsm-menu-insights">
              Insights
              <span aria-hidden="true">⌄</span>
            </button>

            <div
              class="orsm-mega-panel"
              id="orsm-menu-insights"
              hidden>

              <div class="orsm-mega-panel-inner orsm-mega-panel-compact">

                <div class="orsm-mega-heading">
                  <span>INSIGHTS</span>
                  <p>
                    Analysis and developing thinking around ORSM.
                    Insights remain non-normative.
                  </p>
                </div>

                <div class="orsm-mega-grid orsm-mega-grid-two">

                  <div class="orsm-mega-column">
                    <h3>Explore</h3>

                    <a href="/insights/">
                      <strong>ORSM Insights</strong>
                      <small>Analysis, observations and developing thinking</small>
                    </a>
                  </div>

                  <div class="orsm-mega-column">
                    <h3>Latest</h3>

                    <a href="/insights/individually-rational-controls/">
                      <strong>Insight 001</strong>
                      <small>
                        Individually Rational Controls Can Produce
                        Collectively Irrational Architectures
                      </small>
                    </a>
                  </div>

                </div>

                <div class="orsm-mega-footer">
                  <div>
                    <strong>Constructive challenge encouraged.</strong>
                    <span>
                      Insights explore ideas around the framework rather
                      than introducing new ORSM requirements.
                    </span>
                  </div>

                  <a href="/insights/" class="orsm-mega-cta">
                    Read Insights →
                  </a>
                </div>

              </div>
            </div>
          </div>


          <div class="orsm-mega-item">
            <button
              class="orsm-mega-trigger"
              type="button"
              aria-expanded="false"
              aria-controls="orsm-menu-about">
              About
              <span aria-hidden="true">⌄</span>
            </button>

            <div
              class="orsm-mega-panel"
              id="orsm-menu-about"
              hidden>

              <div class="orsm-mega-panel-inner orsm-mega-panel-compact">

                <div class="orsm-mega-heading">
                  <span>ABOUT ORSM</span>
                  <p>
                    Publication status, licensing, authorship and
                    project information.
                  </p>
                </div>

                <div class="orsm-mega-grid orsm-mega-grid-two">

                  <div class="orsm-mega-column">
                    <h3>About</h3>

                    <a href="/about/">
                      <strong>About ORSM</strong>
                      <small>Purpose, background and authorship</small>
                    </a>

                    <a href="/legal/version-status/">
                      <strong>Version & Status</strong>
                      <small>Current ORSM publication status</small>
                    </a>

                    <a href="/about/#contact-orsm">
                      <strong>Contact ORSM</strong>
                      <small>hello@orsmframework.org</small>
                    </a>
                  </div>

                  <div class="orsm-mega-column">
                    <h3>Legal & Governance</h3>

                    <a href="/legal/copyright/">
                      <strong>Copyright & Licence</strong>
                      <small>Use, attribution and licensing</small>
                    </a>

                    <a href="/legal/disclaimer/">
                      <strong>Disclaimer</strong>
                      <small>Scope and appropriate professional judgement</small>
                    </a>

                    <a href="/legal/trademarks/">
                      <strong>Trademark Notice</strong>
                      <small>ORSM identity and marks</small>
                    </a>
                  </div>

                </div>

                <div class="orsm-mega-footer">
                  <div>
                    <strong>ORSM 2.1 — Public Draft</strong>
                    <span>
                      Practitioner review and constructive challenge are
                      actively encouraged.
                    </span>
                  </div>

                  <a href="mailto:hello@orsmframework.org"
                     class="orsm-mega-cta">
                    Contact ORSM →
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    `;

    header.insertAdjacentElement("afterend", nav);


    const triggers =
      Array.from(nav.querySelectorAll(".orsm-mega-trigger"));

    const panels =
      Array.from(nav.querySelectorAll(".orsm-mega-panel"));


    function closeAll(exceptButton) {

      triggers.forEach(function (button) {

        if (button === exceptButton) {
          return;
        }

        button.setAttribute("aria-expanded", "false");

        const id = button.getAttribute("aria-controls");
        const panel = document.getElementById(id);

        if (panel) {
          panel.hidden = true;
        }

      });
    }


    triggers.forEach(function (button) {

      const panel =
        document.getElementById(
          button.getAttribute("aria-controls")
        );

      button.addEventListener("click", function (event) {

        event.stopPropagation();

        const open =
          button.getAttribute("aria-expanded") === "true";

        closeAll(button);

        button.setAttribute(
          "aria-expanded",
          open ? "false" : "true"
        );

        panel.hidden = open;

      });

    });


    document.addEventListener("click", function (event) {

      if (!nav.contains(event.target)) {
        closeAll();
      }

    });


    document.addEventListener("keydown", function (event) {

      if (event.key === "Escape") {

        closeAll();

        const active =
          document.activeElement;

        if (
          active &&
          active.classList &&
          active.classList.contains("orsm-mega-trigger")
        ) {
          active.blur();
        }

      }

    });


    /* -------------------------------------------------------
       Highlight the logical area containing the current page.
       ------------------------------------------------------- */

    const path = window.location.pathname;

    const areas = [
      {
        name: "Framework",
        match: [
          "/introduction/",
          "/model/",
          "/framework/",
          "/integration/"
        ]
      },
      {
        name: "Apply ORSM",
        match: [
          "/assessment/",
          "/patterns/",
          "/in-practice/",
          "/resources/"
        ]
      },
      {
        name: "Insights",
        match: [
          "/insights/"
        ]
      },
      {
        name: "About",
        match: [
          "/about/",
          "/legal/"
        ]
      }
    ];

    areas.forEach(function (area) {

      if (
        area.match.some(function (prefix) {
          return path.startsWith(prefix);
        })
      ) {

        triggers.forEach(function (button) {

          if (
            button.textContent
              .trim()
              .startsWith(area.name)
          ) {
            button.classList.add(
              "orsm-mega-trigger-active"
            );
          }

        });

      }

    });

  }


  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initORSMMegaMenu
    );

  } else {

    initORSMMegaMenu();

  }


  /*
   * Material instant navigation can replace page content
   * without performing a full page reload.
   */

  if (typeof document$ !== "undefined") {

    document$.subscribe(function () {
      initORSMMegaMenu();
    });

  }

})();
