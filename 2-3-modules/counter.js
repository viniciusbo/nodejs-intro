module.exports = {
  count: 0,
  increment: function(amount) {
    this.count += amount;
  },
  decrement: function(amount) {
    this.count -= amount;
  }
};