import { useNode } from "@craftjs/core";

const Text = ({text, className}) => {
  const applyClass = className ? className :'text-xl text-white mx-auto' ;
  const { connectors: {connect, drag} } = useNode();

  return (
    <div  ref={ref => connect(drag(ref))}
 className={applyClass}>{text}</div>
  )
}

export default Text