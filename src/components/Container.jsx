import { useNode } from "@craftjs/core";

const Container = ({ children, className }) => {
  const { connectors: { connect, drag } } = useNode();
  const appliedClass = className || "p-4 bg-gray-900 rounded";

  return (
    <div ref={ref => connect(drag(ref))} className={appliedClass}>
      {children}
    </div>
  );
};

export default Container;
