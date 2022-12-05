var assert = require('assert');
var functionBank = require('./');

// TODO make tests for each of the functions I wrote 
describe('arrow', () => {
    it('simple arrow', () => {
        assert.equal(functionBank.add(2, 2), 4)
        assert.equal(functionBank.add(50, 39), 89)
        })
    it('complex arrow', () => {
        assert.equal(functionBank.stringLowerUpper("HeLlO"),  "hello")
        assert.equal(functionBank.stringLowerUpper("and goodBYE"), "AND GOODBYE")
    })
})

describe('statement', () => {
    it('simple statement', () => {
        assert.equal(functionBank.subtract(2, 2), 0)
        assert.equal(functionBank.subtract(50, 39), 11)
        })
    it('complex statement', () => {
        assert.equal(functionBank.getBook(), true)
    })
})

describe('expression', () => {
    it('simple expression', () => {
        assert.equal(functionBank.multiply(2, 5), 10)
        assert.equal(functionBank.subtract(0, 11), 0)
        })
    it('complex expression', () => {
        assert.equal(functionBank.firstletter("hello"), "h")
    })
})

describe('constructor', () => {
    it('new pair 1', () => {
        let newPair = new functionBank.shoes(6.5, 'adidas')
        assert.equal(newPair.size, 6.5)
        assert.equal(newPair.mark, 'adidas')
        })
})




