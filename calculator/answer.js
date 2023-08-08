class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.value += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(val) {
    this.value = this.value - val;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.value *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    value!==0?this.value /= value:this.value="Division by zero is not allowed";
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.value = this.value ** value;
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.value;
  }
}
