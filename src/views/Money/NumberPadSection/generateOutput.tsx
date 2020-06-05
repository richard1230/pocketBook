const generateOutput = (text: string, output = '0') => {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (output === '0') {
        return text;
      } else {
        return output + text;
      }
    case '删除':
      if (output.length === 1) {
        return '';
      } else {
        //output.length-1这里可以直接写成 -1
        return output.slice(0, output.length - 1) || '';
      }
    case '清空':
      return '';
    case '.':
      if (output.indexOf('.') >= 0) {
        return output;
      }
      return (output + '.');
    default :
      return '';
  }
};

export {generateOutput};