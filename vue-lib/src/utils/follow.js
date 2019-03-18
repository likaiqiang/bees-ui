/**
 * @Follow.js
 * @author zhangxinxu
 * @version
 * @Created: 15-06-25
 * @edited:  17-06-19
 */

/**
 * 绝对定位元素的定位效果
 * 针对所有浏览器
 * 自动含边界判断
 * 可用在DropDown, Tips等组件上
 * 支持链式调用和模块化调用
 * @example
 * $().follow(trigger, options);
 * new Follow(trigger, target, options);
 * 文档见：http://www.zhangxinxu.com/wordpress/?p=1328 position()方法
**/

function getHiddenElement(ele){
    var display = getComputedStyle(ele).display
    var width,height,top,left
    if(display === 'none'){
        ele.style.display = 'block'
        ele.style.visibility = 'hidden'
        width = ele.getBoundingClientRect().width
        height = ele.getBoundingClientRect().height
        top = ele.getBoundingClientRect().top 
        left = ele.getBoundingClientRect().left
        ele.style.visibility = 'visible'
        ele.style.display = 'none'       
    }
    else{
        width = ele.getBoundingClientRect().width
        height = ele.getBoundingClientRect().height
        top = ele.getBoundingClientRect().top 
        left = ele.getBoundingClientRect().left
    }
    return {
        width,
        height,
        top,
        left
    }
}

var follow = function (trigger, target, options) {
    var defaults = {
        offsets: {
            x: 0,
            y: 0
        },
        // trigger-target
        position: '4-1',
        // 边缘位置自动调整
        edgeAdjust: true
    };
    var params = Object.assign({}, defaults, options || {})

    var triL, triT, tarL, tarT;
    var triH = 0;
    var triW = 0;
    var tarH = getHiddenElement(target).height
    var tarW = getHiddenElement(target).width
    //缓存目标对象高度，宽度，提高鼠标跟随时显示性能，元素隐藏时缓存清除

    var st = window.scrollY;
    var sl = window.scrollX;

    var offX = parseInt(params.offsets.x, 10) || 0;
    var offY = parseInt(params.offsets.y, 10) || 0;

    var winWidth = document.documentElement.clientWidth
    var winHeight = document.documentElement.clientHeight

    var position = params.position;

    triH = getHiddenElement(trigger).height;
    triW = getHiddenElement(trigger).width;
    // triL = pos.left;
    // triT = pos.top;
    triL = getHiddenElement(trigger).left + window.scrollX
    triT = getHiddenElement(trigger).top + window.scrollY

    // 合法的位置关系数据
    var arrLegalPos = ['4-1', '1-4', '5-7', '2-3', '2-1', '6-8', '3-4', '4-3', '8-6', '1-2', '7-5', '3-2'];
    // 设定的对齐关系
    var align = params.position;
    // 是否对齐匹配的标志量
    var alignMatch = false;
    // 确定定位的方向
    var strDirect;

    // 遍历，以确定设定的对齐是否有匹配

    arrLegalPos.forEach((n,i)=>{
        if (n === align) {
            alignMatch = true;
            return false;
        }
    })

    // 如果没有匹配的对齐方式，使用默认的对齐方式
    if (!alignMatch) {
        align = defaults.position;
    }
    var getNearRelative = function(dom){
        
        dom = dom.parentElement
        var position = getComputedStyle(dom).position
        while(position!=='relative'){
            if(dom === document.documentElement) break;
            dom = dom.parentElement
            position = getComputedStyle(dom).position
        }
        return {
            top:getHiddenElement(dom).top + window.scrollY,
            left:getHiddenElement(dom).left + window.scrollX
        }
    }
    // 确定定位方位，是上下左右的哪个
    var funDirect = function (a) {
        var dir = 'bottom';
        //确定方向
        switch (a) {
            case '1-4': case '5-7': case '2-3': {
                dir = 'top';
                break;
            }
            case '2-1': case '6-8': case '3-4': {
                dir = 'right';
                break;
            }
            case '1-2': case '8-6': case '4-3': {
                dir = 'left';
                break;
            }
            case '4-1': case '7-5': case '3-2': {
                dir = 'bottom';
                break;
            }
        }

        return dir;
    };

    // 居中判断
    var funCenterJudge = function (a) {
        if (a === '5-7' || a === '6-8' || a === '8-6' || a === '7-5') {
            return true;
        }

        return false;
    };

    // 是否超出边界的判断
    var funJudge = function (dir) {
        var totalHeight = 0;
        var totalWidth = 0;

        // 4个方位分别判断
        if (dir === 'right') {
            totalWidth = triL + triW + tarW + offX;
            if (totalWidth > document.documentElement.clientWidth) {
                return false;
            }
        } else if (dir === 'bottom') {
            totalHeight = triT + triH + tarH + offY;
            if (totalHeight > st + document.documentElement.clientWidth) {
                return false;
            }
        } else if (dir === 'top') {
            totalHeight = tarH + offY;
            if (totalHeight > triT - st) {
                return false;
            }
        } else if (dir === 'left') {
            totalWidth = tarW + offX;
            if (totalWidth > triL) {
                return false;
            }
        }

        return true;
    };

    //此时的方向
    strDirect = funDirect(align);

    //边缘过界判断
    if (params.edgeAdjust) {
        //根据位置是否溢出显示界面重新判定定位
        if (funJudge(strDirect)) {
            //该方向不溢出
            (function () {
                if (funCenterJudge(align)) {
                    return;
                }
                var obj = {
                    top: {
                        right: '2-3',
                        left: '1-4'
                    },
                    right: {
                        top: '2-1',
                        bottom: '3-4'
                    },
                    bottom: {
                        right: '3-2',
                        left: '4-1'
                    },
                    left: {
                        top: '1-2',
                        bottom: '4-3'
                    }
                };
                var o = obj[strDirect];
                var name;
                if (o) {
                    for (name in o) {
                        if (!funJudge(name)) {
                            align = o[name];
                        }
                    }
                }
            })();
        } else {
            //该方向溢出
            (function () {
                if (funCenterJudge(align)) {
                    var center = {
                        '5-7': '7-5',
                        '7-5': '5-7',
                        '6-8': '8-6',
                        '8-6': '6-8'
                    };
                    align = center[align];
                } else {
                    var obj = {
                        top: {
                            left: '3-2',
                            right: '4-1'
                        },
                        right: {
                            bottom: '1-2',
                            top: '4-3'
                        },
                        bottom: {
                            left: '2-3',
                            right: '1-4'
                        },
                        left: {
                            bottom: '2-1',
                            top: '3-4'
                        }
                    };
                    var o = obj[strDirect];
                    var arr = [];
                    for (var name in o) {
                        arr.push(name);
                    }
                    if (funJudge(arr[0]) || !funJudge(arr[1])) {
                        align = o[arr[0]];
                    } else {
                        align = o[arr[1]];
                    }
                }
            })();
        }
    }

    // 是否变换了方向
    var strNewDirect = funDirect(align);
    var strFirst = align.split('-')[0];

    //确定left, top值
    switch (strNewDirect) {
        case 'top': {
            tarT = triT - tarH;
            if (strFirst == '1') {
                tarL = triL;
            } else if (strFirst === '5') {
                tarL = triL - (tarW - triW) / 2;
            } else {
                tarL = triL - (tarW - triW);
            }
            break;
        }
        case 'right': {
            tarL = triL + triW;
            if (strFirst == '2') {
                tarT = triT;
            } else if (strFirst === '6') {
                tarT = triT - (tarH - triH) / 2;
            } else {
                tarT = triT - (tarH - triH);
            }
            break;
        }
        case 'bottom': {
            tarT = triT + triH;
            if (strFirst == '4') {
                tarL = triL;
            } else if (strFirst === '7') {
                tarL = triL - (tarW - triW) / 2;
            } else {
                tarL = triL - (tarW - triW);
            }
            break;
        }
        case 'left': {
            tarL = triL - tarW;
            if (strFirst == '2') {
                tarT = triT;
            } else if (strFirst === '6') {
                tarT = triT - (tarW - triW) / 2;
            } else {
                tarT = triT - (tarH - triH);
            }
            break;
        }
    }

    if (params.edgeAdjust && funCenterJudge(align)) {
        // 是居中定位
        // 变更的不是方向，而是offset大小
        // 偏移处理
        if (align == '7-5' || align == '5-7') {
            // 左右是否超出
            if (tarL - sl < 0.5 * winWidth) {
                // 左半边，判断左边缘
                if (tarL - sl < 0) {
                    tarL = sl;
                }
            } else if (tarL - sl + tarW > winWidth) {
                tarL = winWidth + sl - tarW;
            }
            // 下面两个else if 判断上下是否超出
        } else if (tarT - st < 0.5 * winHeight) {
            // 左半边，判断左边缘
            if (tarT - st < 0) {
                tarT = st;
            }
        } else if (tarT - st + tarH > winHeight) {
            tarT = winHeight + st - tarH;
        }
    }

    if (strNewDirect == 'top' || strNewDirect == 'left') {
        tarL = tarL - offX;
        tarT = tarT - offY;
    } else {
        tarL = tarL + offX;
        tarT = tarT + offY;
    }

    //浮动框显示
    // target.css({
    //     position: 'absolute',
    //     left: Math.round(tarL),
    //     top: Math.round(tarT)
    // }).attr('data-align', align);
    var {top,left} = getNearRelative(target)
    target.style.position = 'absolute'
    target.style.left = Math.round(tarL) + left + 'px'
    target.style.top = Math.round(tarT) + top +'px'
    // z-index自动最高
    // if (target.zIndex) {
    //     target.zIndex();
    // }
};

export default follow
