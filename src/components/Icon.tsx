import React from 'react';

//require 一个目录:google:how to require a full context
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}


type Props = {
  name?: string
}& React.SVGAttributes<SVGElement>

//这里的类型开头必须是大小,也不能用any
const Icon = (props: Props) => {

  const {name,children, ...rest} = props
  return (

    <svg className="icon"  {...rest} >
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};

export default Icon;