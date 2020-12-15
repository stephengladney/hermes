import { Request } from "express"

export function isValidEmailAddress(email: string) {
  const validEmailRegEx = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
  return validEmailRegEx.test(email)
}

export function isValidPersonName(name: string) {
  const onlyLettersRegEx = /^([A-z]|-|'|á|é|í|ó|ñ|ú)+$/
  return onlyLettersRegEx.test(name)
}

export function validatePersonCreateFields(req: Request) {
  const first_name = req.query.first_name as string
  const last_name = req.query.last_name as string
  const email_address = req.query.email_address as string

  if (!isValidPersonName(first_name) || !isValidPersonName(last_name)) {
    throw "person name can only contain letters, dashes and apostrophes"
  }
  if (!isValidEmailAddress(email_address)) throw "invalid email address"
}

export function validateIdFormat(req: Request) {
  if (!isNaN(Number(req.params.id))) return true
  else throw "id must be a number"
}
