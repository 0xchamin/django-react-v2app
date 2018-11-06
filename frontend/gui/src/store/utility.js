//update object properties

export const updateObject = (oldObject, updateProperties) => {
  return {
    ...oldObject,
    ...updateProperties
  }
}
