import { useState } from "react";
import { FaAngleDown, FaAngleRight, FaCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Icon = ({ isOpen, isParentNode, onClick }) => {
  if (isParentNode) {
    return (
      <span onClick={onClick}>
        {isOpen ? <FaAngleDown /> : <FaAngleRight />}
      </span>
    );
  }
  return (
    <FaCircle
      style={{
        height: "6px",
      }}
    />
  );
};

const Node = ({ label, link, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isParentNode = Boolean(children && children.length);
  return (
    <li>
      <div className="node">
        <div className="label">
          <Icon
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            isParentNode={isParentNode}
          />
          <a href={link}>{label}</a>
        </div>
      </div>
      <AnimatePresence>
        {isParentNode && isOpen ? (
          <motion.div
            variants={{
              collapsed: {
                height: 0,
                opacity: 0,
              },
              open: {
                height: "auto",
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.2,
            }}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="node-content"
          >
            <Nodes node={children} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
};

const Nodes = ({ node }) => {
  return (
    <ul className="nodes">
      {node.map((node) => {
        return <Node key={node.id} {...node} />;
      })}
    </ul>
  );
};

export default Nodes;
