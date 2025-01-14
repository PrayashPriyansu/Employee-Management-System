import {
  CalendarCheck,
  CalendarClock,
  CalendarX,
  Clock,
  EditIcon,
  IndianRupee,
  Phone,
} from "lucide-react";

const employee = {
  id: 1,
  name: "Ravi Kumar",
  phone: "9876543210",

  address: "123, ABC Street, New Delhi, India",

  dailyLogs: [
    { date: "2024-12-01", regularHours: 8, overtimeHours: 2 },
    { date: "2024-12-02", regularHours: 8, overtimeHours: 1 },
    { date: "2024-12-03", regularHours: 8, overtimeHours: 3 },
    // Add more daily logs as required
  ],
  attendance: {
    present: 20,
    absent: 2,
    late: 1,
  },
  totalHoursWorked: 160,
  overtimeHours: 10,
  hourlyRate: 250,
  baseSalary: 40000,

  totalSalary: 42500,
};

const profileData = [
  {
    text: "Total Hours",
    totalHours: `${employee.totalHoursWorked} hrs`,
    iconColor: "text-blue-500",
    Icon: Clock,
  },
  {
    text: "Hourly Rate",
    totalHours: `₹${employee.hourlyRate}`,
    toolTip: true,
    Icon: IndianRupee,
    iconColor: "text-green-500",
  },
  {
    text: "Salary",
    totalHours: `₹${employee.totalSalary}`,
    Icon: IndianRupee,
    iconColor: "text-green-500",
  },
  {
    text: "Days Present",
    totalHours: `${employee.attendance.present}`,
    Icon: CalendarCheck,
    iconColor: "text-green-800",
  },
  {
    text: "Days Absent",
    totalHours: `${employee.attendance.absent}`,
    Icon: CalendarX,
    iconColor: "text-red-800",
  },
  {
    text: "Days Late",
    totalHours: `${employee.attendance.late}`,
    Icon: CalendarClock,
    iconColor: "text-orange-500",
  },
  {
    text: "Overtime Hours",
    totalHours: `${employee.attendance.late}`,
    Icon: CalendarClock,
    iconColor: "text-orange-500",
  },
];

function Profile() {
  return (
    <div className="grid grid-cols-4 gap-3 lg:grid-cols-12 ">
      <div className="flex flex-col gap-2 px-2 py-5 border rounded shadow col-span-full border-stone-300">
        <span className="text-3xl font-semibold">{employee.name}</span>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex items-center gap-1 text-stone-500">
            <Phone className="size-4" />
            <span className="font-thin">{employee.phone}</span>
          </div>
          <span className="font-thin text-stone-500">{employee.address}</span>
        </div>
      </div>

      {profileData.map((card, index) => (
        <ProfileCard
          key={index}
          text={card.text}
          totalHours={card.totalHours}
          toolTip={card.toolTip}
          Icon={card.Icon}
          iconColor={card.iconColor}
        />
      ))}
    </div>
  );
}

export default Profile;

function ProfileCard({ Icon, iconColor, totalHours, text, toolTip = false }) {
  return (
    <div className="relative flex items-center justify-between col-span-4 px-2 py-5 border rounded shadow">
      <div className="flex items-center gap-2">
        <Icon className={`${iconColor} stroke-1 size-7`} />
        <h3 className="font-thin text-stone-800">{text}</h3>
      </div>
      <p className="font-mono font-bold md:text-2xl lg:text-3xl">
        {totalHours}
      </p>

      {toolTip && (
        <div className="absolute top-0 right-0">
          <EditIcon className="size-4 stroke-[1.2] hover:fill-blue-500 cursor-pointer" />
        </div>
      )}
    </div>
  );
}
