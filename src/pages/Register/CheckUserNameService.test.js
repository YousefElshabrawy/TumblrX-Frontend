import checkUserName from './CheckUserNameService';

describe('Check that checkEmail works correctly', () => {
  it('should return true if the blogName is unused', async () => {
    const response = await checkUserName('unusedUserName');
    expect(response).toEqual(true);
  });
  it('should return false if the blogName is used', async () => {
    const response = await checkUserName('example1');
    expect(response).toEqual(false);
  });
});
