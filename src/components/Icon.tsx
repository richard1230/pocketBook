import React from 'react';
import cs from 'classnames';
//require 一个目录:google:how to require a full context
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}


type Props = {
  name?: string
}& React.SVGAttributes<SVGElement>

//这里的类型开头必须是大小,也不能用any
const Icon = (props: Props) => {

  const {name,children,className, ...rest} = props
  return (
    //如果rest里面有classname,那么className=icon里面的icon就会被覆盖,故上面也需要加上className
    <svg className={cs('icon',className)}  {...rest} >
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};

export default Icon;