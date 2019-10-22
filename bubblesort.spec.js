beforeAll(function () {
describe('Swap', function () {
  spyOn(window, 'swap' ).and.callThrough ()
})


it('counts the number of times the swap operation is called', function () {
  expect(window.swap.calls.count()).toEqual(28)
  });
})

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('handles an unordered array', function(){
    expect( bubbleSort([1,2,5,4,3]) ).toEqual( [1,2,3,4,5] );
  });
  it('handles letters', function(){
    expect( bubbleSort(['a','d', 'c', 'b']) ).toEqual( ['a', 'b', 'c', 'd'] );
  });
});
