const getAppendName = (element) => {
    // 언제 가져오면 안되는가?
    // null, 빈값일 때는 가져오면 안된다
    if (element.tagName !== null && element.tagName !== '') {
      return element.tagName;
    }
  }

const setBgColor = (elem, bgColor) => {
    elem.style.backgroundColor = bgColor;
  }

const setDisplay = (elem, display, align = 'center', justify = 'center', direction = 'row') => {
    if (typeof elem === 'object') {
      elem.style.display = display;
      elem.style.alignItems = align;
      elem.style.justifyContent = justify;
      elem.style.flexDirection = direction;
    } else {
      console.error('try again');
    }
  }

// export defalut 
