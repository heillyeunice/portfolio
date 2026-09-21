function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleEducationCard(button) {
  const card = button.closest("[data-education-toggle]");
  if (!card) return;

  const isExpanded = card.classList.contains("expanded");
  card.classList.toggle("expanded", !isExpanded);
  card.classList.toggle("collapsed", isExpanded);

  button.setAttribute("aria-expanded", String(!isExpanded));
  button.setAttribute(
    "aria-label",
    isExpanded ? "Expand college details" : "Collapse college details"
  );
}

const educationToggle = document.querySelector("[data-education-toggle]");

if (educationToggle) {
  const toggleButton = educationToggle.querySelector(".education-toggle");

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      toggleEducationCard(toggleButton);
    });
  }
}

const educationToggleSecondary = document.querySelector("[data-education-toggle-secondary]");

if (educationToggleSecondary) {
  const toggleButtonSecondary = educationToggleSecondary.querySelector(".education-toggle");

  if (toggleButtonSecondary) {
    toggleButtonSecondary.addEventListener("click", () => {
      const isExpanded = educationToggleSecondary.classList.contains("expanded");
      educationToggleSecondary.classList.toggle("expanded", !isExpanded);
      educationToggleSecondary.classList.toggle("collapsed", isExpanded);
      toggleButtonSecondary.setAttribute("aria-expanded", String(!isExpanded));
      toggleButtonSecondary.setAttribute(
        "aria-label",
        isExpanded ? "Expand senior high details" : "Collapse senior high details"
      );
    });
  }
}
