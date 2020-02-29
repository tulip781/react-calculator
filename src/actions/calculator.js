const reduceCalc = (acc, cv) => {
  console.log(`cv=${cv} which is a  ${typeof(cv)}`);
  console.log(`acc=${acc} which is a  ${typeof(acc)}`);
  if (['*', '+', '/', '-'].includes(cv)) {
    return `${acc}${cv}`;
  }
  return eval(`${acc} + ${cv}`);
};

const calculator = (string) => {
  let calc = string.split(/([0-9]*\.?[0-9]*)/);
  calc.shift();
  calc.pop();
  if (!isNaN(calc[0])) {
    let val = calc.reduce(reduceCalc, '0');
    return val
  }
};

export default calculator;
