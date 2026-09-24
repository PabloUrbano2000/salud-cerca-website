export type MockRole = 'patient' | 'doctor'

const sessionKey = 'salud-cerca-role'

export function getMockRole(): MockRole | null {
  const role = sessionStorage.getItem(sessionKey)
  return role === 'patient' || role === 'doctor' ? role : null
}

export function setMockRole(role: MockRole) {
  sessionStorage.setItem(sessionKey, role)
}

export function clearMockRole() {
  sessionStorage.removeItem(sessionKey)
}
