export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
      if (value === validList[i]) {
          return true;
      }
  }
  return false;
}
export function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, {
                    [key]: {}
                });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, {
                    [key]: source[key]
                });
            }
        }
    }

    return mergeDeep(target, ...sources);
}
export function outerWidth(el){
    if(!el) return;
    return parseInt(getComputedStyle(el).width) + parseInt(getComputedStyle(el).paddingLeft) + parseInt(getComputedStyle(el).paddingRight)
}

export function isHtml(html){
    return /<[^>]+>/g.test(html)
}
export function createId(){
    return ('id_' + Math.random()).replace('0.', '');
}