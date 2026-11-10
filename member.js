function skillsMember(memberName = 'GitHub Copilot', role = 'member') {
  return {
    name: memberName,
    role,
    active: true,
  };
}

if (typeof module !== 'undefined') {
  module.exports = skillsMember;
  module.exports.skillsMember = skillsMember;
}