import react, { useRef, useState, useEffect } from 'react';
import { useNode } from "@craftjs/core";

const Text = ({text, className}) => {

  const applyClass = className ? className :'text-xl text-white mx-auto' ;
  const { 
    connectors: {connect, drag},
     hasSelectedNode, 
     hasDraggedNode, 
     actions: {setProp} } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged
  }));

  const [editable, setEditable] = useState(false);
 useEffect(() => {
  if (!hasSelectedNode) {
    setEditable(false);
  }
}, [hasSelectedNode]);
  

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      connect(drag(ref.current));
    }
  }, [connect, drag]);

  return (
    <div  
    ref={ref}
      contentEditable={editable}
      onClick={() => setEditable(true)}
 className={applyClass}
 >
  {text}
  </div>
  )
}

export default Text