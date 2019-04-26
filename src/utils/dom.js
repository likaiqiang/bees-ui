export const parent = (dom,className)=>{
    var parent = dom.parentElement
    while(!/ui-tab-tab/.test(parent.className)) parent = parent.parentElement
    return parent
}