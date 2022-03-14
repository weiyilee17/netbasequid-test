
const mainReducerInitialState = {
  terms: [{
    "name": "iPhone",
    "count": 90
  },
  {
    "name": "Android",
    "count": 80
  },
  {
    "name": "Samsung",
    "count": 70
  },
  {
    "name": "Sony",
    "count": 60
  },
  {
    "name": "HTC",
    "count": 50
  },
  {
    "name": "ASUS",
    "count": 40
  },
  {
    "name": "小米",
    "count": 30
  },
  {
    "name": "Nokia",
    "count": 20
  }]
};

export default (state = mainReducerInitialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}