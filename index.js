// code your solution here
const superbowlWin = (record) => {
    const win = record.find(game => game.team === 'Denver Broncos' && game.result === 'W');
    return win ? win.year : undefined;
  };
  
  const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];
  
  const titleCased = () => {
    return tutorials.map(title => {
      return title
        .split(' ')
        .map(word => {
          if (word === 'OO') {
            return word;
          }
          if (word === 'API') {
            return word;
          }
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
    });
  };
  
  // Tests
  describe('superbowlWin', () => {
    it('returns a year the Denver Broncos won the superbowl:', () => {
      const record = [
        { team: 'Denver Broncos', result: 'L', year: '2014' },
        { team: 'Denver Broncos', result: 'W', year: '2015' }
      ];
      expect(superbowlWin(record)).toEqual('2015');
    });
  
    it('returns undefined if there are no wins', () => {
      const record = [
        { team: 'Denver Broncos', result: 'L', year: '2014' },
        { team: 'Denver Broncos', result: 'L', year: '2016' }
      ];
      expect(superbowlWin(record)).toBeUndefined();
    });
  });
  
  module.exports = {
    superbowlWin,
    titleCased
  };