var expect = require('expect');

// import isRealString

const {isRealString} = require('./validation');
// isRealString

// we need to test for the following things
  // should reject non-string values
  // should rejct strings with only spaces
  // should allow stings with non-space characters


describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should rejct string with only spaces', () => {
    var res = isRealString('          ');
    expect(res).toBe(false);
  });

  it('should allow strings with non-space characters', ()=> {
    var res = isRealString('  Anshul  ');
    expect(res).toBe(true);
  });


});
