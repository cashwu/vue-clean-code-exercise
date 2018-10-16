/**
 * @return {string}
 */
const NORMAL_NUMBER = 1;
const TIMES_OF_15 = 15;
const TIMES_OF_5 = 5;
const TIMES_OF_3 = 3;
function FizzBuzz(number) {
    return [[TIMES_OF_15, 'FizzBuzz'], [TIMES_OF_5, 'Buzz'], [TIMES_OF_3, 'Fizz'], [NORMAL_NUMBER, number.toString()]].find(divisor => number % divisor[0] === 0)[1]
}

describe('FizzBuzz', () => {
        it('normal number should return itself', () => {
            expect(FizzBuzz(1)).toEqual('1')
            expect(FizzBuzz(7)).toEqual('7')
        })
        it('3 times should return Fizz', () => {
            expect(FizzBuzz(3)).toEqual('Fizz')
            expect(FizzBuzz(6)).toEqual('Fizz')
        })
        it('5 times should return Buzz', () => {
            expect(FizzBuzz(5)).toEqual('Buzz')
            expect(FizzBuzz(10)).toEqual('Buzz')
        })
        it('15 times should return FizzBuzz', () => {
            expect(FizzBuzz(15)).toEqual('FizzBuzz')
            expect(FizzBuzz(60)).toEqual('FizzBuzz')
        })
});
