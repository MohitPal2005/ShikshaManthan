let lfaData = {
  program: {
    name: "",
    theme: "",
    geography: {
      state: "",
      district: ""
    },
    level: ""
  },

  systemConfig: {
    promptSet: "",
    patterns: [],
    levelFocus: "",
    lockedStructure: true
  },

  problem: "",
  studentOutcome: "",
  successDefinition: "",
  stakeholders: [],
  practiceChanges: {},
  activities: [],
  indicators: []
};

// Save
function saveData() {
  localStorage.setItem("lfaData", JSON.stringify(lfaData));
}

// Load
function loadData() {
  const saved = localStorage.getItem("lfaData");
  if (!saved) return;

  const parsed = JSON.parse(saved);

  // Merge safely (future proof)
  lfaData = {
    ...lfaData,
    ...parsed,
    program: {
      ...lfaData.program,
      ...parsed.program,
      geography: {
        ...lfaData.program.geography,
        ...(parsed.program?.geography || {})
      }
    },
    systemConfig: {
      ...lfaData.systemConfig,
      ...(parsed.systemConfig || {})
    }
  };
}

function applyContextLogic() {
  const { theme, level } = lfaData.program;

  // Reset
  lfaData.systemConfig = {
    promptSet: "generic_prompts",
    patterns: [],
    levelFocus: level,
    lockedStructure: true
  };

  switch (theme) {
    case "FLN":
      lfaData.systemConfig.promptSet = "fln_prompts";
      lfaData.systemConfig.patterns = [
        "student_reading_outcome",
        "teacher_instruction_practice",
        "coaching_support"
      ];
      break;

    case "Mentoring":
      lfaData.systemConfig.promptSet = "mentoring_prompts";
      lfaData.systemConfig.patterns = [
        "mentor_teacher_relationship",
        "reflection_practice"
      ];
      break;

    case "Leadership":
      lfaData.systemConfig.promptSet = "leadership_prompts";
      lfaData.systemConfig.patterns = [
        "school_leadership_behavior",
        "review_mechanism"
      ];
      break;
  }
}

function isContextReady() {
  const p = lfaData.program;
  return !!(p.name && p.theme && p.level && p.geography.state);
}

loadData();