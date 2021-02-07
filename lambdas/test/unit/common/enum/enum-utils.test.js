const { expect } = require('chai')
const { values } = require('../../../../src/common/enum/enum-utils')

describe('EnumUtils', () => {
  it('should return enum values from object', () => {
    const SomeEnum = {
      A: 1,
      B: 2,
      C: 3,
      values
    }

    const enumValues = SomeEnum.values()
    expect(enumValues).to.have.lengthOf(3)
    expect(enumValues).to.have.deep.members(['A', 'B', 'C'])
  })
})
