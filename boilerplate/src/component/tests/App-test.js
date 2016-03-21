describe('golbal test', function() {
  it('should have expect/should, sinon', function() {
    expect('test').to.be.a('string');
    [1, 2].should.have.length(2);
    expect(sinon).to.not.be.null;
  });
});
