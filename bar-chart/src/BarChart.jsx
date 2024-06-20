import { useMemo } from "react";
import { motion } from "framer-motion";

const Bar = ({ name, colour, ticketCount, height }) => {
  return (
    <motion.div
      className="bar"
      initial={{ height: 0 }}
      animate={{ height: `${height}%` }}
      exit={{ height: 0 }}
      style={{
        // height: `${height}%`,
        backgroundColor: colour,
      }}
    >
      <div className="tooltip">
        {name} - {ticketCount}
      </div>
    </motion.div>
  );
};

const BarChart = ({ data }) => {
  const maxCountTicket = useMemo(() => {
    return Math.max(...data.map((x) => x.ticketCount));
  }, []);
  return (
    <div className="chart-container">
      <div className="chart">
        {data.map((item) => {
          return (
            <Bar
              height={(item.ticketCount / maxCountTicket) * 100}
              key={item.id}
              {...item}
            />
          );
        })}
      </div>
      <div className="y-axis-label">Number of tickets</div>
      <div className="x-axis-label">Departments</div>
    </div>
  );
};

export default BarChart;
