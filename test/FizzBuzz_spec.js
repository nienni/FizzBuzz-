var should = chai.should()

describe('Test fizzBuzz function', function () {
  //情況一：若輸入數字為9回傳Fizz
  it('should return Fizz when input is 9', function () {
    let test = 9
    let result = fizzBuzz(test)
    result.should.be.equal('Fizz')
  })
  //情況二：若輸入數字為20回傳Buzz
  it('should return Buzz when input is 20', function () {
    let test = 20
    let result = fizzBuzz(test)
    result.should.be.equal('Buzz')
  })
  //情況三：若輸入數字為15回傳FizzBuzz
  it('should return FizzBuzz when input is 15', function () {
    let test = 15
    let result = fizzBuzz(test)
    result.should.be.equal('FizzBuzz')
  })
  //情況四：若輸入數字為4回傳4
  it('should return 4 when input is 4', function () {
    let test = 4
    let result = fizzBuzz(test)
    result.should.be.equal(4)
  })
  //情況五：若輸入數字為0回傳something wrong!!
  it('should return something wrong!! when input is 0', function () {
    let test = 0
    let result = fizzBuzz(test)
    result.should.be.equal('something wrong!!')
  })
})