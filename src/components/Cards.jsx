import Card from "./Card";

const dashboardData = [
  {
    title: "Attendance Rate",
    value: "92%",
    pillText: "3%", // Percentage change
    period: "Last Updated: Dec 22, 2024",
    trend: "Up", // Indicates an increase in attendance rate
  },
  {
    title: "Salary Processed",
    value: "₹8,50,000",
    pillText: "5%", // Percentage change
    period: "Disbursed on: Dec 20, 2024",
    trend: "Down", // Indicates a decrease in salary processed
  },
  {
    title: "Overtime Logged",
    value: "120 hrs",
    pillText: "8%", // Percentage change
    period: "Period: Dec 1 - Dec 21, 2024",
    trend: "Up", // Indicates an increase in overtime hours
  },
];

function Cards() {
  return (
    <>
      {dashboardData.map((i, l) => (
        <Card
          key={l}
          title={i.title}
          value={i.value}
          pillText={i.pillText}
          trend={i.trend}
          period={i.period}
        />
      ))}
    </>
  );
}

export default Cards;
