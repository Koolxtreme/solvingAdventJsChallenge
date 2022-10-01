export default function groupBy(collection, it) {

    const sol = {};
  
    for(const value of collection){
      const key = typeof it === 'function'
      ? it(value)
      : value[it]
  
      key in sol
      ? sol[key].push(value)
      : sol[key] = [value]
    }
    return sol
  }