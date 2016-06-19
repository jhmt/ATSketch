/// <reference path='../../typings/jasmine/jasmine.d.ts' />

describe('jasmine test', function() {
    it('test', function(){
        expect('abc'.length).toBeGreaterThan(2);
    });
});