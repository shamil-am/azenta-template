$('#multi').mdbRange({
  width: '100%',
  direction: 'vertical',
  value: {
    min: 0,
    max: 200,
  },
  single: {
    active: true,
    value: {
      step: 1,
      symbol: ''
    },
    counting: false,
    countingTarget: null,
    bgThumbColor: '#4285F4',
    textThumbColor: '#fff',
    multi: {
      active: true,
      value: {
        step: 1,
        symbol: ''
      },
      counting: false,
      rangeLength: 2,
      countingTarget: null,
      bgThumbColor: '#4285F4',
      textThumbColor: '#fff'
    },
  }
});